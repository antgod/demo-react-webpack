import React, { Component, PropTypes } from 'React'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'
import { Seq } from 'immutable'
import HocTitle from './HocTitle'
import HocContent from './HocContent'

@immutableRenderDecorator
class HocPanel extends Component {
  render() {
    const { title, children, append } = this.props

    debugger
    return (<div className="hoc-panel">
      <HocTitle title={title} append={append}/>
      <HocContent panel={children}/>
    </div>)
  }
}

export default HocPanel