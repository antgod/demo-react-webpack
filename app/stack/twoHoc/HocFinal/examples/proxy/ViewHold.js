import React, { PropTypes, Component, Children } from 'React'

const wrapperContainer = WrappedComponent =>
  class extends Component {
    render() {
      const { desc, login } = this.props
      return (<div>
        <div className="hoc-sub-title">{desc}</div>
        {
          login ?
            /* 注意：此处必须传递属性 */
            <WrappedComponent {...this.props} /> :
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