import React, { Component } from 'react'

const HOCFactory = (params) => WrapperComponent =>
  class extends WrapperComponent {
    render(){
      const context = {
        store: params.store,
        util: params.util
      };

      return <WrapperComponent {...this.props} {...context}/>;
    }
  };

class WrappedComponent extends Component{
  constructor(){
    super()
    this.state = {
      start: 100,
      end: 100,
    }
  }
  render(){
    return <div>
      {this.props.util.add(this.state.start,this.state.end)}
      {this.props.children}
    </div>
  }
}

const createHOCFactory = ()=>{
  const HOCComponent = HOCFactory({
    store: {},
    util: {
      add: (a, b) => a + b
    },
  })(WrappedComponent);
  return <HOCComponent>
    HOCComponent
  </HOCComponent>
};

export default createHOCFactory



