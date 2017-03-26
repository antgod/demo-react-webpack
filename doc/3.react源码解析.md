##算法解析：http://www.atatech.org/articles/60515
之前有人一直问我为什么react那么火，让我找个说服他换前端框架的理由，嗯，我想虚拟DOM应该算是一个优势。
     什么是虚拟dom呢？所谓虚拟DOM就是说，在React中有如下这段代码：
  
	  React.render(
	    <div className="commentBox">
	      Hello, world! I am a CommentBox.
	    </div>
	  );
   这里的div其实和DOM中的div完全是两码事儿了，只不过React提供了和DOM类似的Tag和API，事实上React会通过他自己的逻辑去转化为真正的DOM。所以，把这种叫做虚拟DOM。

   那么这样做有什么好处呢？最明显的一点好处就是React所谓的 dom diff ，能够实现O(n)级别的dom更新。当有数据变动导致DOM变动时，React不是全局刷新，而是通过它内部的 dom diff 算法计算出不同点，然后以最小粒度进行更新。这也是React号称性能好的原因。

   React diff 作为 Virtual DOM 的加速器，其算法上的改进优化是 React 整个界面渲染的基础，以及性能提高的保障，同时也是 React 源码中最神秘、最不可思议的部分，本文从源码入手，深入剖析 React diff 的不可思议之处。
 
   正常来说计算一棵树形结构转换成另一棵树形结构的最少操作，传统 diff 算法通过循环递归对节点进行依次对比，效率低下，算法复杂度较高，达到 O(n^3)（本人未实践过），

   React 通过制定大胆的策略，将 O(n^3) 复杂度的问题转换成 O(n) 复杂度的问题。其实算法直接降低这么多，肯定是有多牺牲的，或者说是是指定了特定的策略，定制化的实现了所需算法。react的特定策略如下：
   
1. Web UI 中 DOM 节点跨层级的移动操作特别少，可以忽略不计。
2. 拥有相同类的两个组件将会生成相似的树形结构，拥有不同类的两个组件将会生成不同的树形结构。
3. 对于同一层级的一组子节点，它们可以通过唯一 id 进行区分。

  基于以上三个前提策略，React 分别对 tree diff、component diff 以及 element diff 进行算法优化，事实也证明这三个前提策略是合理且准确的，它保证了整体界面构建的性能。

##tree diff
   Web UI 中 DOM 节点跨层级的移动操作特别少，可以忽略不计，React 对树的算法进行了简洁明了的优化，即对树进行分层比较，两棵树只会对同一层次的节点进行比较。 既然 DOM 节点跨层级的移动操作少到可以忽略不计，只会对相同颜色方框内的 DOM 节点进行比较，即对同一个父节点下的所有子节点进行比较。当发现节点已经不存在，则该节点及其子节点会被完全删除掉，不会用于进一步的比较。这样只需要对树进行一次遍历，便能完成整个 DOM 树的比较

    
 
   分析至此，大部分人可能都存在这样的疑问：如果出现了 DOM 节点跨层级的移动操作，React diff 会有怎样的表现呢？是的，对此我也好奇不已，不如试验一番。
   
   如下图，A 节点（包括其子节点）整个被移动到 D 节点下，由于 React 只会简单的考虑同层级节点的位置变换，而对于不同层级的节点，只有创建和删除操作。当根节点发现子节点中 A 消失了，就会直接销毁 A；当 D 发现多了一个子节点 A，则会创建新的 A（包括子节点）作为其子节点。此时，React diff 的执行情况：create A -> create B -> create C -> delete A。


  由此可发现，当出现节点跨层级移动时，并不会出现想象中的移动操作，而是以 A 为根节点的树被整个重新创建，这是一种影响 React 性能的操作，因此 React 官方建议不要进行 DOM 节点跨层级的操作。

  注意：在开发组件时，保持稳定的 DOM 结构会有助于性能的提升。例如，可以通过 CSS 隐藏或显示节点，而不是真的移除或添加 DOM 节点。
   


##component diff
React 是基于组件构建应用的，对于组件间的比较所采取的策略也是简洁高效，在React中比较两个虚拟DOM节点，当两个节点不同时，应该如何处理？这分为两种情况：

节点类型不同
节点类型相同
 1.节点类型不同的组件的diff判断
   如下图，当 component D 改变为 component G 时，即使这两个 component 结构相似，一旦 React 判断 D 和 G 是不同类型的组件，就不会比较二者的结构，而是直接删除 component D，重新创建 component G 以及其子节点。虽然当两个 component 是不同类型但结构相似时，React diff 会影响性能，但正如 React 官方博客所言：不同类型的 component 是很少存在相似 DOM tree 的机会，因此这种极端因素很难在实现开发过程中造成重大影响的。


2.节点单类型相同，属性不同
   如下组件MyComponent中，
   
	var MyComponent = React.createClass({
	    render: function() {
	        if (this.props.first) {
	            return <div className="first"></div>;
	        } else {
	            return <div className="second"</div>;
	        }
	    }
	});
 
如果我们加载了<MyComponent first={true}>，替换成了<MyComponent first={false}>，则会直接替换组件的属性：使用`className="second`替换`className=first`


##element diff

  看到这里，你可能会有一个疑问，对于上图中的树，如果老的R节点的子孩子为节点：A、B、C、D，更新后的R节点的孩子为：B、A、D、C，此时新老集合从左到右进行 diff 差异化对比，发现 B != A，则创建并插入 B 至新集合，删除老集合 A；以此类推，创建并插入 A、D 和 C，删除 B、C 和 D。

React 发现这类操作繁琐冗余，因为这些都是相同的节点，但由于位置发生变化，导致需要进行繁杂低效的删除、创建操作，其实只要对这些节点进行位置移动即可。

针对这一现象，React 提出优化策略：允许开发者对同一层级的同组子节点，添加唯一 key 进行区分，虽然只是小小的改动，性能上却发生了翻天覆地的变化！这也是为什么我们在开发时，经常会遇到下面的提示：

(一般情况下，会在数组中的组件会被提示需要添加key，react不会对数组中设置默认的key。而在render中直接返回的组件是不需要单独加key的，因为他会根据组件名称等信息默认设置上key)

下面我们来看一下，为每个组件加上key之后，会发生什么：
如下图所示，新老集合进行 diff 差异化对比，通过 key 发现新老集合中的节点都是相同的节点，因此无需进行节点删除和创建，只需要将老集合中节点的位置进行移动，更新为新集合中节点的位置，此时 React 给出的 diff 结果为：D 不做任何操作，A、B、C 进行移动操作。

该算法的步骤如下：首先对新集合的节点进行循环遍历，for (name in nextChildren)，通过唯一 key 可以判断新老集合中是否存在相同的节点，if (prevChild === nextChild)，如果存在相同节点，则进行移动操作，但在移动前需要将当前节点在老集合中的位置与 lastIndex 进行比较，若lastIndex较大，则进行节点移动操作，否则不执行该操作。这是一种顺序优化手段，lastIndex 一直在更新，表示访问过的节点在老集合中最右的位置（即最大的位置），如果新集合中当前访问的节点比 lastIndex 大，说明当前访问节点在老集合中就比上一个节点位置靠后，则该节点不会影响其他节点的位置，因此不用添加到差异队列中，即不执行移动操作，只有当访问的节点比 lastIndex 小时，才需要进行移动操作。



以上主要分析新老集合中存在相同节点但位置不同时，对节点进行位置移动的情况，如果新集合中有新加入的节点且老集合存在需要删除的节点，那么 React diff 又是如何对比运作的呢？



当完成新集合中所有节点 diff 时，最后还需要对老集合进行循环遍历，判断是否存在新集合中没有但老集合中仍存在的节点，发现存在这样的节点 D，因此删除节点 D，到此 diff 全部完成。

综上所述，当节点处于同一层级时，React diff 提供了三种节点操作，分别为：INSERT_MARKUP（插入）、MOVE_EXISTING（移动）和 REMOVE_NODE（删除）。

+ INSERT_MARKUP，新的 component 类型不在老集合里， 即是全新的节点，需要对新节点执行插入操作。

+ MOVE_EXISTING，在老集合有新 component 类型，且 element 是可更新的类型，generateComponentChildren 已调用 receiveComponent，这种情况下 prevChild=nextChild，就需要做移动操作，可以复用以前的 DOM 节点。

+ REMOVE_NODE，老 component 类型，在新集合里也有，但对应的 element 不同则不能直接复用和更新，需要执行删除操作，或者老 component 不在新集合里的，也需要执行删除操作。

```

function enqueueInsertMarkup(parentInst, markup, toIndex) {
  updateQueue.push({
    parentInst: parentInst,
    parentNode: null,
    type: ReactMultiChildUpdateTypes.INSERT_MARKUP,
    markupIndex: markupQueue.push(markup) - 1,
    content: null,
    fromIndex: null,
    toIndex: toIndex,
  });
}

function enqueueMove(parentInst, fromIndex, toIndex){
  updateQueue.push({
    parentInst: parentInst,
    parentNode: null,
    type: ReactMultiChildUpdateTypes.MOVE_EXISTING,
    markupIndex: null,
    content: null,
    fromIndex: fromIndex,
    toIndex: toIndex,
  });
}

function enqueueRemove(parentInst, fromIndex) {
  updateQueue.push({
    parentInst: parentInst,
    parentNode: null,
    type: ReactMultiChildUpdateTypes.REMOVE_NODE,
    markupIndex: null,
    content: null,
    fromIndex: fromIndex,
    toIndex: null,
  });
}

``` 

##总结
React 通过制定大胆的 diff 策略，将 O(n3) 复杂度的问题转换成 O(n) 复杂度的问题；

React 通过分层求异的策略，对 tree diff 进行算法优化。不要存在节点跨级操作。

React 通过相同类生成相似树形结构，不同类生成不同树形结构的策略，对 component diff 进行算法优化。不要存在组件替换操作。

React 通过设置唯一 key的策略，对 element diff 进行算法优化。

建议：在开发组件时，保持稳定的 DOM 结构会有助于性能的提升；

建议：在开发过程中，尽量减少类似将最后一个节点移动到列表首部的操作，当节点数量过大或更新操作过于频繁时，在一定程度上会影响 React 的渲染性能。

建议：减少组件的删除与更新，使用css隐藏显示组件替换组件的删除操作。

