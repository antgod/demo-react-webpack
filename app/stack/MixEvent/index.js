import React, { Component } from 'react'

import Ewm from './ewm.png'
import './index.css'

class MixEvent extends Component {
  constructor() {
    super()

    this.state={
      active: false,
    }
  }

  componentDidMount(){
    document.body.addEventListener('click', e=>{
      /*第一种解决方案：用e.target来阻止*/
      if(e.target && e.target.matches('img.qr')){
        return
      }
      this.setState({
        active: false,
      })
    })

    /*第二种解决方案：全部使用原生事件*/
  }

  componentWillUnmount(){
    document.body.removeEventListener('click')
  }

  handleClick(e) {
    /*当混用原生与react事件时，并不能阻止默认事件,因为事件并不是绑定在qr元素上，而是绑定在最外层元素上*/
    /*反之，原生组件阻止冒泡会阻止React合适事件传播*/
    e.stopPropagation();
    this.setState({
      active: !this.state.active
    })
  }

  handleClickQr(e) {
    e.preventDefault();
  }

  render() {
    /*React使用原生事件时，一定要在组件卸载时候手动移除*/

    /**/
    return <div>
      <button onClick={::this.handleClick}>切换二维码</button>
      <div
        style={{display:this.state.active?'block':'none'}}
        onClick={this.handleClickQr}
      >
        <img src={Ewm} width={100} className="qr"/>
      </div>
    </div>
  }
}

export default MixEvent



