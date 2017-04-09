import React, { PropTypes, Component } from 'React'

function wrapperContainer(params) {
  // 可以做一些改变 params 的事
  return function HOCFactory(WrappedComponent) {
    return class HOC extends WrappedComponent {
      render() {
        return (<div>
          <WrappedComponent {...this.props} {...params}/>
        </div>)
      }
    }
  }
}

@wrapperContainer({ text: 'HOCFactory' })
class HocFactory extends Component {
  render() {
    return <div>{this.props.text}</div>
  }
}

export default HocFactory
