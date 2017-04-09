import classnames from 'classnames'
import React, { Component, PropTypes } from 'React'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'

@immutableRenderDecorator
class HocTitle extends Component {
  render() {
    const { title, append } = this.props

    const classes = classnames({
      'hoc-title': true,
    });

    return (<div>
      <span className={classes}>{title}</span>
      ({append})
    </div>)
  }
}

export default HocTitle