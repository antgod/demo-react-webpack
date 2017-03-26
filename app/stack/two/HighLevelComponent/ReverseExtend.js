import React, { Component } from 'react'

const getDisplayName = Component => {
  return Component.displayName || Component.name || 'Component'
};

const WrapperComponent = Component =>
  class extends Component {
    /*修正displayName*/
    static displayName = getDisplayName(Component);
    constructor(){
      super();
      console.log('hoc constructor')
    }
    onClick(){
      this.hide()
    }

    componentWillMount(){
      console.log('hoc componentWillMount')
    }

    componentDidMount(){

      console.log('hoc componentDidMount')
    }
    render(){

      // 高阶组件可以传递多余属性,可以劫持并重构渲染，可以控制state
      return super.render()
    }
  }

class ReverseExtend extends Component{
  constructor(){
    super()
    console.log('constructor')
  }
  hide(){
    console.log('hide', this)
  }
  componentWillMount(){
    console.log(' componentWillMount')
  }
  componentDidMount(){
    console.log('componentDidMount')
  }
  render(){
    return <div>
      <button onClick={::this.onClick}>绑定</button>
    </div>
  }
}

const wrapperedComponent = WrapperComponent(ReverseExtend);
// console.log(wrapperedComponent.displayName)
export default wrapperedComponent



