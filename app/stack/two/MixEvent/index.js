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

  clickBody(e) {
  /* 第一种解决方案：用e.target来阻止 */
    const target = e.target
    if (target && (target.matches('img.qr') || target.matches('button.btn'))) {
      return
    }
    this.setState({
      active: false,
    })
  }

  componentWillUnmount() {
    /* React使用原生事件时，一定要在组件卸载时候手动移除 */
    document.body.removeEventListener('click', this.handle)
  }

  componentDidMount() {
    this.handle = e => this.clickBody(e)
    document.body.addEventListener('click', this.handle)
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
