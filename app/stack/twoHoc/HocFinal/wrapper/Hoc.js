import React, { PropTypes, Component, Children } from 'React'
import { immutableRenderDecorator } from 'react-immutable-render-mixin'
import HocWrapper from './HocWrapper'

@immutableRenderDecorator
@HocWrapper('属性代理实现')
class Proxy extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { append, children } = this.props
    return (<div className="hoc">
      {
        Children.map(children, child => {
          const props = { ...child.props, append }
          return React.cloneElement(child, { ...props })
        })
      }
    </div>)
  }
}

@immutableRenderDecorator
@HocWrapper('反向继承实现')
class Extend extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { append, children } = this.props
    return (<div className="hoc">
      {
        Children.map(children, child => {
          const props = { ...child.props, append }
          return React.cloneElement(child, { ...props })
        })
      }
    </div>)
  }
}

export const HocProxy = Proxy
export const HocExtend = Extend
