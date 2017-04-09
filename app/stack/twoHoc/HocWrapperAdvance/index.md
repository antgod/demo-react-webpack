```
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
```

下面我们再来讨论一下高阶组件与 mixin 的不同之处，如图 2-1 所示。

<p><img src="http://www1.ituring.com.cn/figures/2017/ReactDeep/04.d02z.001.png" alt="{%}"></p>

图已经很清晰地表达了 mixin 与高阶组件的不同之处。

简单来说，高阶组件符合函数式编程思想。对于原组件来说，并不会感知到高阶组件的存在，只需要把功能套在它之上就可以了，从而避免了使用 mixin 时产生的副作用。