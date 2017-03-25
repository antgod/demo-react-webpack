import React, { Component, PropTypes } from 'react'

class ComponentProps extends Component {

  static defaultProps = {
    title: undefined,
  };

  static propTypes = {
    title: PropTypes.element,
  };

  constructor(prop) {
    super(prop);
  }

  render() {
    /*此处获得react对象，不能再实例化*/
    const Title= this.props.title;
    return <div>
      {Title}
      <div {...Title.props}></div>
    </div>
  }
}

const createComponentProps = ()=>{
  return <ComponentProps title={<div>title</div>}/>
};


export default createComponentProps



