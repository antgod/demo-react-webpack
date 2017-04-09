import React, { PropTypes, Component, cloneElement } from 'React'

const wrapperContainer = WrappedComponent =>
  class extends WrappedComponent {
    renderContainer(){
      const originElement = super.render()
      /* 注意，这里不会再渲染ViewHold的render函数，所以如果设置text，只会传到div属性上，而不会当做children。必须手动设置children */
      let newProps = { children: 'you need to login' }
      return cloneElement(originElement, {...originElement.props, ...newProps})
    }

    render() {
      const { desc, login } = this.props
      return (<div>
        <div className="hoc-sub-title">{desc}</div>
        {
          login ? super.render() : this.renderContainer()
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