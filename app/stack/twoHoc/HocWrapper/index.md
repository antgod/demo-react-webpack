```
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

```

简单地替换成作用在类上的 decorator，即接收需要装饰的类为参数，返回一个新的内部类。这与高阶组件的定义完全一致。因此，可以认为作用在类上的 decorator 语法糖简化了高阶组件的调用。

当使用属性代理构建高阶组件时，调用顺序不同于 mixin。上述执行生命周期的过程类似于堆栈调用：

```
didmount→HOC didmount→(HOCs didmount)→(HOCs will unmount)→HOC will unmount→unmount
```
从功能上，高阶组件一样可以做到像 mixin 对组件的控制，包括控制 props、通过 refs 使用引用、抽象 state 和使用其他元素包裹 WrappedComponent。
