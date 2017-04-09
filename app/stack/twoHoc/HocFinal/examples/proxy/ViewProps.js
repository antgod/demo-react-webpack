import React, { PropTypes, Component, Children } from 'React'

const wrapperContainer = WrappedComponent =>
  class extends Component {
    constructor(props){
      super(props)
      this.state = this.props
    }
    render() {
      return (<div>
        <WrappedComponent {...this.props} />
        <div className="hoc-sub-title">Props</div>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
        <div className="hoc-sub-title">State</div>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>)
    }
  }

@wrapperContainer
class ViewProps extends Component {
  constructor(props){
    super(props)
    this.state = this.props
  }
  render() {
    return <div>{this.props.text}</div>
  }
}

export default ViewProps
