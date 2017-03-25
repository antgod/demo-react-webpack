import React, { Component } from 'react'

const CustomProps = () => {
  // 原生标签的自定义属性应该使用data-前缀, 否则不会渲染（如果示例中d改为a，会渲染出两个属性a,data-a）
  return <div a="xxx" data-d="yyy">test</div>
};

export default CustomProps;



