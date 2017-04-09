import React, { Component } from 'React'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'

@immutableRenderDecorator
class HocContent extends Component {
  render() {
    const { panel } = this.props

    return (<div className="hoc-content">
      {panel}
    </div>)
  }
}

export default HocContent