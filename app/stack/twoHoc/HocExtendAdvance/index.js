import React, { Component } from 'React'

const wrapperContainer = WrappedComponent =>
  class extends WrappedComponent {
    render() {
      if (this.props.login) {
        return super.render()
      } else {
        return (<div>
          <div className="title">渲染劫持-修改render:</div>
          you need to login
        </div>)
      }
    }
  }

@wrapperContainer
class MyComponentDecorators extends Component {
  render() {
    return <div>{this.props.text}</div>
  }
}

const wrapperContainerClone = WrappedComponent =>
  class extends WrappedComponent {
    render() {
      const element = super.render()
      let newProps = {}
      if (element && element.type === 'div') {
        newProps = { children: 'may the force be with you' }
      }
      const props = Object.assign({}, element.props, newProps)
      const newElement = React.cloneElement(element, props, props.children)
      return (<div>
        <div className="title">渲染劫持-修改参数:</div>
        {newElement}
      </div>)
    }
  }

@wrapperContainerClone
class MyComponentDecoratorsClone extends Component {
  render() {
    return <div>{this.props.text}</div>
  }
}

const wrapperContainerState = WrappedComponent =>
  class extends WrappedComponent {
    constructor(props){
      super(props)
      this.state = this.props
    }
    render() {
      return (<div>
        <div className="title">展示属性:</div>
        {super.render()}
        <p>Props</p>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
        <p>State</p>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>)
    }
  }

@wrapperContainerState
class MyComponentDecoratorsState extends Component {
  constructor(props){
    super(props)
    this.state = this.props
  }
  render() {
    return <div>{this.props.text}</div>
  }
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'
}

const wrapperContainerName = WrappedComponent =>
  class extends WrappedComponent {
    displayName = `wrapperContainerName(${getDisplayName(WrappedComponent)})`

    render() {
      return (<div>
        <div className="title">命名:</div>
        {this.displayName}
      </div>)
    }
  }

@wrapperContainerName
class MyComponentDecoratorsName extends Component {
  render() {
    return <div>{this.props.text}</div>
  }
}

function hocFactoryFactory(params) {
  // 可以做一些改变 params 的事
  return function HOCFactory(WrappedComponent) {
    return class HOC extends Component {
      render() {
        return (<div>
          <div className="title">传入参数:</div>
          <WrappedComponent {...this.props} {...params}/>
        </div>)
      }
    }
  }
}

@hocFactoryFactory({ text: 'HOCFactoryFactory' })
class MyComponentDecoratorsProps extends Component {
  render() {
    return <div>{this.props.text}</div>
  }
}

const createContainer = () => {
  const WrapperDecorators = MyComponentDecorators
  return (<div>
    <WrapperDecorators text="WrapperDecorators" login={false}/>
    <MyComponentDecoratorsClone text="WrapperDecorators"/>
    <MyComponentDecoratorsState text="DisplayStateAndProps"/>
    <MyComponentDecoratorsName />
    <MyComponentDecoratorsProps />
  </div>)
}

export default createContainer
