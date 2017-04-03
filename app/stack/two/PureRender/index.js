import React, { Component } from 'react'
import { isEqual } from 'lodash'

const test1 = {
  test: 'test',
}

const test2 = {
  test: 'test',
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      test: test1,
    }
  }

  componentDidMount() {
//    this.setState({
//      test: test2,
//    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 采用深度对比太昂贵了
    return !isEqual(this.props, nextProps) || !isEqual(this.state, nextState)
  }

  render() {
    console.log('render')
    return <div>{this.state.test.test}</div>
  }
}

export default App
