import React, { Component } from 'react'

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
    return <div>效果在控制台</div>
  }
}

export default MyClass
