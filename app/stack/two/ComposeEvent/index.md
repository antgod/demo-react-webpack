```
import React, { Component } from 'react'
import './index.css'

class ComposeEvent extends Component {
  handerClick(...rest) {
    console.log(this, rest)
  }

  render() {
    /* 并不会把事件直接绑定到节点，而是同意绑定到结构的最外层，使用一个统一的时间监听器，
     这个事件监听器上维持了一个映射来保存所有组件内部的事件监听和处理函数 */

    // 如果不进行绑定，this指向null
    // 此处可以使用bind, 箭头函数， es7::函数与函数内绑定
    return (<div>
      {
        [1, 2, 3, 4, 5].map((item, index) =>
          <div
            className="item"
            onClick={::this.handerClick}
            key={index}
          >
            {item}
          </div>
        )

      }
    </div>)
  }
}

export default ComposeEvent
```

# 合成事件的实现机制

    在 React 底层，主要对合成事件做了两件事：事件委派和自动绑定。

1. 事件委派

    在使用 React 事件前，一定要熟悉它的事件代理机制。它并不会把事件处理函数直接绑定到真实的节点上，而是把所有事件绑定到结构的最外层，使用一个统一的事件监听器，这个事件监听器上维持了一个映射来保存所有组件内部的事件监听和处理函数。当组件挂载或卸载时，只是在这个统一的事件监听器上插入或删除一些对象；当事件发生时，首先被这个统一的事件监听器处理，然后在映射里找到真正的事件处理函数并调用。这样做简化了事件处理和回收机制，效率也有很大提升。

2. 自动绑定

    在 React 组件中，每个方法的上下文都会指向该组件的实例，即自动绑定 this 为当前组件。而且 React 还会对这种引用进行缓存，以达到 CPU 和内存的最优化。在使用 ES6 classes 或者纯函数时，这种自动绑定就不复存在了，我们需要手动实现 this 的绑定。

    现在我们来看几种绑定的方法。

    - bind 方法。

    - 构造器内声明。

    - 箭头函数。

    - 双::

    - 函数声明 handle = (e) => {}

