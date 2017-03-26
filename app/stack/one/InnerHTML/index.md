```
import React, { Component } from 'react'

class InnerHTML extends Component {
  render() {
    return (<div
      dangerouslySetInnerHTML={{__html: 'cc &copy; 2015'}} />)
  }
}

const createInnerHTML = () => {
  // class 属性改为 className；for 属性改为 htmlFor; boolean属性可以省略值; children 可以作为属性传递给组件
  const props = { children: '李宏吉', style: { color: 'red' }, className: 'label', htmlFor: 'name' }
  const component = <Props {...props} />

  // 错误示例：反模式。对象创建后，属性就不可更改，以下做法不生效。
  // component.props.children = '李宏吉';

  return component
}

export default createProps
```