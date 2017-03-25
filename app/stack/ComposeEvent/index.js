import React, { Component } from 'react'
import './index.css'

class ComposeEvent extends Component {
  constructor() {
    super()
  }

  handerClick() {
    console.log(this, arguments)
  }

  render() {
    /* 并不会把事件直接绑定到节点，而是同意绑定到结构的最外层，使用一个统一的时间监听器，
    这个事件监听器上维持了一个映射来保存所有组件内部的事件监听和处理函数 */

    // 如果不进行绑定，this指向null
    // 此处可以使用bind, 箭头函数， es7::函数与函数内绑定
    return <div>
      {
        [1,2,3,4,5].map((item, index)=>
          <div className='item'
            onClick={::this.handerClick}
            key={index}
          >
            {item}
          </div>
        )

      }
    </div>
  }
}

export default ComposeEvent



