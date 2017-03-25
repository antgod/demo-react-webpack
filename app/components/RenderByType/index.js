import React, { Component } from 'react';


let  renderByType = (type, props, children) => {
  const Component = type
  return <Component {...props}>{children}</Component>
}

let  renderByCopy = (type, props ,children) => {
  const Component = type
  return React.cloneElement(
    <Component />,
    props,
    children,
  )
}

let Container = () => {
  return <div className="wrapper">
    <div>{renderByType('input',{value:'renderByType',onChange:e=>null})}</div>
    <div>{renderByType('div',null,'renderByType')}</div>
    <div>{renderByCopy('input',{value:'renderByCopy',onChange:e=>null})}</div>
    <div>{renderByCopy('div',null,'renderByCopy')}</div>
  </div>
}


export default Container;
