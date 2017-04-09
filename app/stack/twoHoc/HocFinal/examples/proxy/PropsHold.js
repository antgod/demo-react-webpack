import React, { PropTypes, Component, cloneElement } from 'React'

const wrapperContainer = WrappedComponent =>
  class extends Component {
    renderContainer() {
      let newProps = { text: 'you need to login' }
      return <WrappedComponent {...{ ...this.props, ...newProps }} />
    }

    render() {
      const { desc, login } = this.props
      return (<div>
        <div className="hoc-sub-title">{desc}</div>
        {
          login ? <WrappedComponent {...this.props} /> : this.renderContainer()
        }
      </div>)
    }
  }

@wrapperContainer
class PropsHold extends Component {
  render() {
    return <div>{this.props.text}</div>
  }
}

export default PropsHold