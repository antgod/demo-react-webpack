import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

const test1 = {
  test: 'test',
}

const test2 = {
  test: 'test',
}

class App extends Component {
  constructor() {
    super()
    // 官方在早期就为开发者提供了名为 react-addons-pure-render-mixin 的插件。
    // 其原理为重新实现了 shouldComponentUpdate 生命周期方法，让当前传入的 props和 state 与之前的作浅比较，如果返回 false，那么组件就不会执行 render 方法。
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      test: test1,
    }
  }

  componentDidMount() {
    this.setState({
      test: test2,
    })
  }


  render() {
    console.log('render')
    return <div>{this.state.test.test}</div>
  }
}

export default App
