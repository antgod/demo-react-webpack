import React, { Component } from 'react'

class HighLevel extends Component {
  constructor() {
    super()
  }

  render() {
    return <div>
      {React.Children.map(this.props.children, Children => {
        // 这里可以调用高阶函数，对子组件进行过滤，也可以对组件进行再加工，如下例子
        const {style: ContentStyle, children, type} = Children.props;
        const style = {
          height: '15vh',
          background: '#eee',
        };
        return (<div>
          <div style={style}>top</div>
          <div style={ContentStyle}>{`type:${Children.type},content:`}{children}</div>
          <div style={style}>footer</div>
         </div>)
      })}
    </div>
  }
}
/*
* 高阶组件包装
* */
const createHighLevel = () => {
  const style = {
    height: '70vh',
    background: '#bbb',
  };

  const component = <HighLevel>
    <div style={style}>content</div>
  </HighLevel>;
  return component
};

export default createHighLevel



