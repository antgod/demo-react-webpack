import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

const test1 = 'test'
const test2 = 'test'

class App extends Component {
  constructor() {
    super()
    this.state = {
      test: test1,
    }

    // 性能优化点2：
    // 我们不用每次都绑定事件，因此把绑定移到构造器内。如果绑定方法需要传递参数，那么可 以考虑通过抽象子组件或改变现有数据结构解决。
    this.onClick = this.onClick.bind(this)

    // 可以解决性能优化点3的问题
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  componentDidMount() {
    this.setState({
      test: test2,
    })
  }

  onClick() {
    console.log(this)
  }

  render() {
    console.log('render')

    // 性能优化点1:
    // 这样每次都会刷新div，因为style每次都是新的
    // const ret = <div style={{ color: 'black' }}>{this.state.test.test}</div>, 防止不刷新需要上层组件传入style
    // 性能优化点2：
    // 同样，如果有this.props.items.filter(item => item.val > 30)}作为属性，仍然会刷新div
    // 性能优化点3:
    // 如果div有子元素，仍然会从新刷新，因为子元素通过React.createClass创建，前文说过，这个函数每次都会返回一个新的对象
    // 采用constructor增加PureRenderMixin解决

    const defaultStyle = {}
    const ret = <div style={this.props.style || defaultStyle} onClick={this.onClick}>见说明</div>
    return ret
  }
}

export default App
