```
import React, { Component } from 'react'
import classNames from 'classnames'
import Style from './style.css'

class Button extends Component {
  render() {
    const btnClass = classNames({
      btn: true,
      [`${Style.btn_pressed}`]: this.props.isPressed,
      [`${Style.btn_hovered}`]: this.props.isHovered,
    })

    return <button className={btnClass}>{this.props.label}</button>
  }
}

const createButton = () => {
  return <Button isPressed isHovered label="按钮"/>
}

export default createButton
```
# 需要在webpack.config.js开启css module配置，详见文件注释

# 更多例子请参考[CSS-Modules][1]

# CSS 模块化遇到了哪些问题？

CSS 模块化重要的是解决好以下两个问题：CSS 样式的导入与导出。灵活按需导入以便复用代码，导出时要能够隐藏内部作用域，以免造成全局污染。Sass、Less、PostCSS 等试图解决 CSS 编程能力弱的问题，但这并没有解决模块化这个问题。Facebook 工程师 Vjeux 抛出了 React 开发中遇到的一系列 CSS 相关问题，结合实际开发的问题有以下几点。

1. 全局污染：CSS 使用全局选择器机制来设置样式，优点是方便重写样式。缺点是所有的样式都是全局生效，样式可能被错误覆盖，因此产生了非常丑陋的 !important，甚至 inline !important 和复杂的选择器权重计数表4，提高犯错概率和使用成本。Web Components 标准中的 Shadow DOM 能彻底解决这个问题，但它把样式彻底局部化，造成外部无法重写样式，损失了灵活性。

2. 命名混乱：由于全局污染的问题，多人协同开发时为了避免样式冲突，选择器越来越复杂，容易形成不同的命名风格，很难统一。样式变多后，命名将更加混乱。

3. 依赖管理不彻底：组件应该相互独立，引入一个组件时，应该只引入它所需要的 CSS 样式。现在的做法是除了要引入 JavaScript，还要再引入它的 CSS，而且 Saas/Less 很难实现对每个组件都编译出单独的 CSS，引入所有模块的 CSS 又造成浪费。JavaScript 的模块化已经非常成熟，如果能让 JavaScript 来管理 CSS 依赖是很好的解决办法，而 webpack 的 css-loader 提供了这种能力。

4. 无法共享变量：复杂组件要使用 JavaScript 和 CSS 来共同处理样式，就会造成有些变量在 JavaScript 和 CSS 中冗余，而预编译语言不能提供跨 JavaScript 和 CSS 共享变量的这种能力。

5. 代码压缩不彻底：由于移动端网络的不确定性，现代工程项目对 CSS 压缩的要求已经到了变态的程度。很多压缩工具为了节省一个字节，会把 16px 转成 1pc，但是这对非常长的类名却无能为力。

  [1]: https://github.com/antgod/css-modules-demos