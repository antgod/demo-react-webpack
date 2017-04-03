```js
import React, { Component } from 'react'
import { isEqual } from 'lodash'

class App extends Component {
  constructor() {
    super()
    this.state = {
      test: 'test',
    }
  }

  componentDidMount() {
    this.setState({
      test: 'test',
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 采用深度对比太昂贵了
    return !isEqual(this.props, nextProps) || !isEqual(this.state, nextState)
  }

  render() {
    console.log('render')
    return <div>{this.state.test}</div>
  }
}

export default App
```
