import React, { PropTypes, Component, Children } from 'React'

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'
}

const wrapperContainer = WrappedComponent =>
  class extends WrappedComponent {
    displayName = `wrapperContainer|${getDisplayName(WrappedComponent)}`

    render() {
      return (<div>
        {super.render()}
        命名: {this.displayName}
      </div>)
    }
  }

@wrapperContainer
class ViewClassName extends Component {
  constructor(props){
    super(props)
    this.state = this.props
  }
  render() {
    return <div>{this.props.text}</div>
  }
}

export default ViewClassName
