import React, { PropTypes, Component, Children } from 'React'

const wrapperContainer = WrappedComponent =>
  class extends WrappedComponent {
    render() {
      const { desc, login } = this.props
      return (<div>
        <div className="hoc-sub-title">{desc}</div>
        {
          login ?
            super.render() :
            <div>you need to login</div>
        }
      </div>)
    }
  }

@wrapperContainer
class ViewHold extends Component {
  render() {
    return <div>{this.props.text}</div>
  }
}

export default ViewHold