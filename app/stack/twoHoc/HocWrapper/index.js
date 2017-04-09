import React, { Component } from 'React'

const wrapperContainer = WrappedComponent =>
  class extends Component {
    render() {
      return <WrappedComponent text={this.props.value} />
    }
  }

class MyComponent extends Component {
  render() {
    return <div>{this.props.text}</div>
  }
}

@wrapperContainer
class MyComponentDecorators extends Component {
  render() {
    return <div>{this.props.text}</div>
  }
}

const createContainer = () => {
  const WrapperDecorators = MyComponentDecorators
  const Wrapper = wrapperContainer(MyComponent)
  return (<div>
    <WrapperDecorators value="WrapperDecorators" />
    <Wrapper value="Wrapper" />
  </div>)
}

export default createContainer
