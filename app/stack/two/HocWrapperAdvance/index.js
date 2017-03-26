import React, { Component } from 'React'
import { omit } from '@common/utils'

const wrapperContainer = WrappedComponent =>
  class extends Component {
    // 抽象子组件数据到父组件
    constructor(props) {
      super(props)
      this.state = {
        name: '',
      }

      this.onNameChange = this.onNameChange.bind(this)  // 修正this指向
    }

    onNameChange(value) {
      this.setState({
        name: value,
      })
    }

    init(wrapperedComponentInstance) {
      wrapperedComponentInstance.init()
    }

    render() {
      const newProps = {
        refer: this,
        value: this.state.name,
        onChange: e => this.onNameChange(e.target.value),
      }
      return (<div style={{ color: 'red' }}>
        <WrappedComponent {...this.props} {...newProps} />
      </div>)
    }
  }

@wrapperContainer
class MyComponentDecorators extends Component {
  init() {
    console.log('初始化MyComponentDecorators完毕')
  }

  componentDidMount() {
    this.props.refer.init(this)
  }

  render() {
    return (<div>
      <label htmlFor="name">{this.props.text}</label>
      <input name="name" {...omit(this.props, ['text', 'refer'])} />
    </div>)
  }
}

const createContainer = () => {
  const WrapperDecorators = MyComponentDecorators
  return (<WrapperDecorators text="WrapperDecorators"/>)
}

export default createContainer
