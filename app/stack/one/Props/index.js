import React, { Component } from 'react'

class Props extends Component {
  render() {
    return (<div>
      {/* 省略 Boolean 属性值会导致 JSX 认为 bool 值设为了 true。要传 false 时，必须使用属性表达式。
          这常用于表单元素中，比如 disabled、required、checked 和 readOnly 等。
          原生标签的自定义属性应该使用data-前缀, 否则不会渲染（如果示例中d改为a，会渲染出两个属性a,data-a */}
      <input type="checkbox" checked  onChange={() => null} />
      <input type="checkbox" data-a="123"/>
      <label {...this.props}>{this.props.children}</label>
    </div>)
  }
}

const createProps = () => {
  // class 属性改为 className；for 属性改为 htmlFor; boolean属性可以省略值; children 可以作为属性传递给组件
  const props = { children: '李宏吉', style: { color: 'red' }, className: 'label', htmlFor: 'name' }
  const component = <Props {...props} />

  // 错误示例：反模式。对象创建后，属性就不可更改，以下做法不生效。
  // component.props.children = '李宏吉';

  return component
}

export default createProps
