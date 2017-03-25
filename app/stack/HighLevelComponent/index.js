import React, { Component } from 'react'

const WrapperComponent = WrapperComponent =>
  class extends WrapperComponent {
    constructor(props){
      super(props);
      this.state = {
        name: '',
      };

      this.onNameChange = ::this.onNameChange;
      this.onClick = ::this.onClick;
      console.log('hoc constructor')
    }

    componentDidMount(){
      console.log('hoc componentDidMount')
    }
    // ref属性为函数时，参数为当前组件
    prop(componentInstance){
      componentInstance.initHighLevelComponent();
    }
    onClick(e){
      this.hide()
    }
    onNameChange(event) {
      this.setState({
        name: event.target.value
      })
    }
    render(){
      const props = {...this.props,...{ref:this.prop}};
      const listeners = {
        onClick: this.onClick,
      };

      const newProps = {
        name: {
          value:this.state.name,
          onChange: this.onNameChange
        }
      };

      // 高阶组件可以传递多余属性
      return <WrapperComponent {...listeners} {...props} {...newProps}/>
    }
  };

@WrapperComponent
class HighLevelComponent extends Component{
  constructor(props){
    super(props);
    console.log('constructor')
  }
  hide(){
    console.log('hide', this)
  }

  componentDidMount(){
    console.log('componentDidMount')
  }

  initHighLevelComponent(){
    console.log('initHighLevelComponent', this)
  }
  render(){
    return <div>
      <button onClick={this.props.onClick} >绑定</button>
      <input {...this.props.name} />
    </div>
  }
}

export default HighLevelComponent



