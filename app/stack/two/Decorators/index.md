```
import { Component } from 'react'

// 可以对类进行装饰
function isTestable(value) {
  /* @params:
   * target: 当前装饰类：MyClass
   * */
  return function decorator(target) {
    // 装饰类属性
    target.isTestable = value
  }
}

function enumerable(value) {
  /* @params:
   * target: 当前装饰类：MyClass
   * key: 当前装饰属性名:method
   * descriptor: defineProperty函数的第三个参数：descriptor
   * */
  return function (target, key, descriptor) {
    // 这里可以对属性值装饰
    descriptor.value = () => {
      return `名字：${value}`
    }
    return descriptor
  }
}

@isTestable(true)
class MyClass extends Component {

  @enumerable('李宏吉')
  method() {
  }

  render() {
    console.log(this.method(), MyClass.isTestable)
    return null
  }
}

export default MyClass
```

# mixin 的问题

我们认可 mixin 给组件开发带来抽象的好处，但随着大量使用 mixin，它的问题也渐渐暴露出来了。Dan Abramov 是最早提出这个问题的人，他总结了 mixin 最大的一些问题6。

- 破坏了原有组件的封装

我们知道 mixin 方法会混入方法，给原有组件带来新的特性，比如 mixin 中有一个 renderList方法，给我们带来了渲染 List 的能力，但它也可能带来了新的 state 和 props，这意味着组件有一些“不可见”的状态需要我们去维护，但我们在使用的时候并不清楚。此外，renderList 中的方法会有调用组件中的方法，但很可能被其他 mixin 截获，带来很多不可知。

另外，mixin 也有可能去依赖其他的 mixin，这样会建立一个 mixin 的依赖链，当我们改动其中一个 mixin 的状态时，很可能会直接影响其他的 mixin。解决方法是可以约定好输入和输出。但不幸的是，mixin 是平面结构，所有方法都在同一个环境中，我们没法做到很好的约定。

- 命名冲突

刚才也提到了，mixin 是平面结构，那么不同 mixin 中的命名在不可知的情况，重用的情况是不可控的。尤其是像 handleChange 这样常见的名字，我们不能在两个 mixin 中同时使用，也不能在自己的组件中使用这个名字的方法。

尽管我们可以通过更改名字来解决，但遇到第三方引用，或已经引用了几个 mixin 的情况下，总是要花一定的成本去解决冲突。

- 增加复杂性

在过去写 mixin 的时候，是不是常遇到这样的情形：我们设计一个组件，引入名为 PopupMixin 的 mixin，这样就给组件引进了 PopupMixin 生命周期方法，还有 hidePopup()、startPopup() 等方法。当我们再引入HoverMixin时，将有更多的方法被引进，比如 handleMouseEnter()、handleMouseLeave()、isHovering()方法。当然，我们可以进一步抽象出 TooltipMixin，将两个整合在一起，但我们发现它们都有 componentDidUpdate 方法。

几个月后，再去看组件的实现时，会发现代码已经没法维护，它的逻辑已经复杂到难以理解。写 React 组件时，我们首先考虑的往往是单一的功能、简洁的设计和逻辑。当加入功能的时候，可以继续控制组件的输入和输出。如果说因为复杂性，我们不断加入新的状态，那么组件肯定会因此变得非常难以维护。

针对这些困扰，React 社区提出了新的方式来取代 mixin，那就是高阶组件。

# Decorators

简而言之，decorators就是把装饰类当做参数传入装饰器函数内。
当函数有返回值时候，返回值当做装饰后的函数代理装饰函数。
当函数没有返回值时，参数当做装饰后的函数代理装饰函数。

比如：

```
@decorators
class Cls{

}

function decorators(Cls){
  Cls.age = 10
  Cls.prototype.age = 20
  // return { age: 30 }
}

console.log(Cls.age)          // 打印10，打开注释后（return { age: 30}），输出30
console.log(new Cls().age)    // 打印20，打开注释后（return { age: 30}），报错
```
