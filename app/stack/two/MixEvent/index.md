```
import './index.css'
import React, { Component } from 'react'
import Ewm from './ewm.png'

class MixEvent extends Component {
  constructor() {
    super()

    this.state = {
      active: false,
    }
  }

  componentWillUnmount() {
    /* React使用原生事件时，一定要在组件卸载时候手动移除 */
    document.body.removeEventListener('click')
  }

  componentDidMount() {
    document.body.addEventListener('click', (e) => {
      /* 第一种解决方案：用e.target来阻止 */
      const target = e.target
      if (target && (target.matches('img.qr') || target.matches('button.btn'))) {
        return
      }
      this.setState({
        active: false,
      })
    })
    /* 第二种解决方案：不要将合成事件与原生事件混用， 全部使用原生事件 */
  }

  toggleCode(e) {
    /* 当混用原生与react事件时，并不能阻止默认事件,因为事件并不是绑定在qr元素上，而是绑定在最外层元素上 */
    /* 反之，原生组件阻止冒泡会阻止React合适事件传播 */
    e.stopPropagation()
    this.setState({
      active: !this.state.active,
    })
  }

  render() {
    return (<div className="wrapper">
      <button className="btn" onClick={::this.toggleCode}>切换二维码</button>
      <div
        style={{ display: this.state.active ? 'block' : 'none' }}
      >
        <img src={Ewm} width={100} className="qr" alt=""/>
      </div>
    </div>)
  }
}

export default MixEvent
```

# React合成事件是SyntheticEvent的实例

完全符合W3C标准，不存在任何浏览器兼容问题

react合成事件只是原生dom的一个子集。仅仅实现了DOM Level3事件接口，统一浏览器兼容问题。
有些（比如window.resize）事件并没有实现。

# 与原生事件的不同点

1. 事件传播与阻止事件传播

    浏览器原生 DOM 事件的传播可以分为 3 个阶段：事件捕获阶段、目标对象本身的事件处理程序调用以及事件冒泡。事件捕获会优先调用结构树最外层的元素上绑定的事件监听器，然后依次向内调用，一直调用到目标元素上的事件监听器为止。可以在将 e.addEventListener() 的第三个参数设置为 true 时，为元素 e 注册捕获事件处理程序，并且在事件传播的第一个阶段调用。此外，事件捕获并不是一个通用的技术，在低于 IE9 版本的浏览器中无法使用。而事件冒泡则与事件捕获的表现相反，它会从目标元素向外传播事件，由内而外直到最外层。

    可以看出，事件捕获在程序开发中的意义并不大，更致命的是它的兼容性问题。所以，React 的合成事件则并没有实现事件捕获，仅仅支持了事件冒泡机制。这种 API 设计方式统一而简洁，符合“二八原则”。

    阻止原生事件传播需要使用 e.preventDefault()，不过对于不支持该方法的浏览器（IE9 以下），只能使用 e.cancelBubble = true 来阻止。而在 React 合成事件中，只需要使用 e.preventDefault() 即可。

2. 事件类型

    React 合成事件的事件类型是 JavaScript 原生事件类型的一个子集。

3. 事件绑定方式

    受到 DOM 标准的影响，绑定浏览器原生事件的方式也有很多种，具体如下所示。

    直接在 DOM 元素中绑定：
    ```
    <button onclick="alert(1);">Test</button>
    ```
    在 JavaScript 中，通过为元素的事件属性赋值的方式实现绑定：
    ```
    el.onclick = e => { console.log(e); }
    ```
    通过事件监听函数来实现绑定：
    ```
    el.addEventListener('click', () => {}, false);
    el.attachEvent('onclick', () => {});
    ```
    相比而言，React 合成事件的绑定方式则简单得多：
    ```
    <button onClick={this.handleClick}>Test</button>
    ```
4. 事件对象

    原生 DOM 事件对象在 W3C 标准和 IE 标准下存在着差异。在低版本的 IE 浏览器中，只能使用 window.event 来获取事件对象。而在 React 合成事件系统中，不存在这种兼容性问题，在事件处理函数中可以得到一个合成事件对象。

# 混用

1. 阻止冒泡是不行的。阻止 React 事件冒泡的行为只能用于 React 合成事件系统中，且没办法阻止原生事件的冒泡。
2. 反之，在原生事件中的阻止冒泡行为，却可以阻止 React 合成事件的传播。
