import React, { Component } from 'react'

class ReverseMode extends Component {
  constructor() {
    super()
  }

  render() {
    return <div>{this.props.children}</div>
  }
}

const createReverseMode = () => {
  // children 可以作为属性传递给组件
  const props = { children: '李宏吉' };
  const component = <ReverseMode {...props} />;
  // 错误示例：反模式，对象创建后就不可更改，在创建前更改
  // component.props.name= '李宏吉';
  return component
};

export default createReverseMode



