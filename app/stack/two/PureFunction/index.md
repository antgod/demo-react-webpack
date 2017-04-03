```
import React, { Component } from 'react'

const Render = ({text}) => <div>{text}</div>

class App extends Component {
  render() {
    return <Render text={'test'} />
  }
}

export default App
```

### 给定相同的输入，它总是返回相同的输出

但并不是所有方法都适应这个条件，有些方法的结果并不完全依赖于你所传入的参数。比如，

```js
Math.random(); // => 0.8982946265648812
Math.random(); // => 0.5326573647965065
Math.random(); // => 0.08841438748355146
```

就算我们不传任何参数到方法中，该方法也依然总是会输出不同的结果。从这个意义上说，Math.random() 就不满足纯函数的条件。还有下面的例子：

```js
function time() { return new Date().toLocaleTimeString(); }
```

看到 time 一定恍然大悟了吧。获取时间的方法也是同样的，不论我们限定更新时间的区间在秒、分、时，甚至是年，它总是会在这个范围之外改变值而导致不能做到输入和输出一致。

还有我们常用的 slice 和 splice 方法，它们有相似的功能，都可以用来作数据截取。那么，它们的执行结果是一致的么？比如：

```js
const stars = ['Earth', 'Mars', 'Mercury', 'Venus'];

stars.slice(0, 2); // => ['Earth', 'Mars']
stars.slice(0, 2); // => ['Earth', 'Mars']
stars.slice(0, 2); // => ['Earth', 'Mars']

stars.splice(0, 2) // => ['Earth', 'Mars']
stars.splice(0, 2) // => ['Mercury', 'Venus']
stars.splice(0, 2) // => []
```

我们清晰地看到 slice 方法在参数一定的情况下输出是完全一样的，而 splice 方法的执行结果会改变原数组。对于程序来说，splice 的隐藏行为是危险的，因为这是常会令人疏忽的隐式改变。在 Ruby 语言的设计中，会用 ! 号来区分是否改变原始值，这是一个很好的提醒。

当然，还有很多情况是在不同的输入下会有相同的输出，但从概念上说，这个方法也还是纯函数。例如：

```js
function compare(val, comparedVal) { return val <= comparedVal; }

compare(1, 3); // => true
compare(1, 5); // => true
compare(1, 7); // => true

compare(7, 1); // => false
compare(9, 1); // => false
compare(11, 1); // => false
```

### 过程没有副作用
其实很好理解，就是说在纯函数中我们不能改变外部状态。而在 JavaScript 中改变外部状态的情况比比皆是，就比如方法的参数是对象或数组，那么它本身就有可能被方法执行的过程改变。例如，

```js
const addToCart = (cart, item, quantity) => {
  cart.items.push({
    item,
    quantity,
  });
  return cart;
};
```

当我们调用方法的时候，

```js
const originalCart = {
  items: [],
};

const cart = addToCart(
  originalCart,
  {
    name: "Digital SLR Camera",
    price: '1495',
  },
  1
);
```

这个例子很简单。这是一个加入到“购物车”的方法，但在执行 addToCart 方法的时候，改变了 originalCart 对象。尽管我们返回了新对象，但因为在 JavaScript 中对象是引用，因此原来的对象也改变了。这就产生了副作用。

因此，我们提出了 Immutable 的概念，让参数中的引用重新复制。这里我们借用了 lodash 的cloneDeep 方法来作深拷贝：

```js
import '_' from 'lodash';

const addToCart = (cart, item, quantity) => {
  const newCart = _.cloneDeep(cart);

  newCart.items.push({
    item,
    quantity,
  });

  return newCart;
};
```

### 没有额外的状态依赖
指方法内的状态都只在方法的生命周期内存活，这意味着我们不能在方法内使用共享变量，因为这会给方法带来不可知因素。

React 在设计时带有函数式编程的基因，因为 React 组件本身就是纯函数。React 的 createElement 方法保证了组件是纯净的，即传入指定 props 得到一定的 Virtual DOM，整个过程都是可预测的。

我们可以通过拆分组件为子组件，进而对组件做更细粒度的控制。这也是函数式编程的魅力之一，保持纯净状态，可以让方法或组件更加专注（focused），体积更小（small），更独立（independent），更具有复用性（reusability）和可测试性（testability）。
