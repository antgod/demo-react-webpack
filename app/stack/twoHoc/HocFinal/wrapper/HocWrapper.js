import React, { Component } from 'React'

const HocWrapper = (append) => Hoc =>
  class extends Component {
    render() {
      const props= {...this.props, append}
      return <div>
        <Hoc {...props} />
      </div>
    }
  }

export default HocWrapper