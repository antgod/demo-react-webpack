import React, { Component, PropTypes, Children, cloneElement } from 'react'
import classnames from 'classnames'

class TabContent extends Component {
  static propTypes = {
    classPrefix: React.PropTypes.string,
    panels: PropTypes.node,
    activeIndex: PropTypes.number,
  }

  getTabPanes() {
    const { classPrefix, activeIndex, panels } = this.props


    return panels.filter(child => child.props.order == activeIndex).map((child, index) => {
      if (!child) { return }
      return cloneElement(child, {
        classPrefix,
        isActive: true,
        children: child.props.children,
        key: `tabpane-${index}`,
      })
    })
  }

  render() {
    const { classPrefix } = this.props

    const classes = classnames({
      [`${classPrefix}-content`]: true,
    })

    return (
      <div className={classes}>
        {this.getTabPanes()}
      </div>
    )
  }
}

export default TabContent
