import React, { Component } from 'react';



class BaseComponent extends React.Component {

  render() {
    return <div className="wrapper" {...this.props}>
      HighOrderComponent
    </div>
  }
}

const ComponentWrapper = Component =>
  class WrappedComponent extends React.Component {

    onClick(e){
      alert(e)
    }

    render() {
      const { onClick } = this
      const props = {
        ...this.props,
        onClick
      }
      return <Component {...props}></Component>
    }
  }

export const HighOrderComponent = ComponentWrapper (BaseComponent)

