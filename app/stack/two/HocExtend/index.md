```
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
```

正如所见，高阶组件返回的组件继承于 WrappedComponent。因为被动地继承了 WrappedComponent，所有的调用都会反向，这也是这种方法的由来。

这种方法与属性代理不太一样。它通过继承 WrappedComponent 来实现，方法可以通过 super 来顺序调用。因为依赖于继承的机制，HOC 的调用顺序和队列是一样的：
```
didmount→HOC didmount→(HOCs didmount)→will unmount→HOC will unmount→(HOCs will unmount)
```
在反向继承方法中，高阶组件可以使用 WrappedComponent 引用，这意味着它可以使用WrappedComponent 的 state、props 、生命周期和 render 方法。但它不能保证完整的子组件树被解析。