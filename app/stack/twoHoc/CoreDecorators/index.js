import React, { Component } from 'React'
import { mixin } from 'core-decorators'

const PureRender = {
  componentDidMount() {
    console.log('MyComponent加载完毕')
  },
}

const Theme = {
  setTheme() {},
}

@mixin(PureRender, Theme)
class MyComponent extends Component {
  render() {
    console.log(this.setTheme)
    return <div>效果在控制台</div>
  }
}

export default MyComponent
