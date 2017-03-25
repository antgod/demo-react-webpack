import React, { Component } from 'react'

class Tabs extends Component {
  constructor(prop) {
    super(prop);

    const props = this.props;

    let activeIndex =  props.activeIndex || 0;

    this.state = {
      activeIndex,
      prevIndex: activeIndex,
    }
  }

  render() {
    return <div className="ui-tabs">1</div>
  }
}


export default Tabs



