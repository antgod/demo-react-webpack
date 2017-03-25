import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

class ReactDom extends Component {

  componentDidMount() {
    console.log(ReactDOM.findDOMNode(this), ReactDOM.findDOMNode(this.refs.div),
      ReactDOM.findDOMNode(this) === ReactDOM.findDOMNode(this.refs.div))

    console.log(this.input.focus())
  }

  render() {
    return <div ref="div">
      <input ref={ref=>this.input = ref}/>
    </div>
  }
}

export default ReactDom



