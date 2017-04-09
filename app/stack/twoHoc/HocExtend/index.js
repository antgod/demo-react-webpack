import React, { Component } from 'React'

const wrapperContainer = WrappedComponent =>
  class extends WrappedComponent {
    render() {
      return super.render()
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
  return <WrapperDecorators text="WrapperDecorators" />
}

export default createContainer
