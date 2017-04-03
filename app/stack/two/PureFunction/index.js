import React, { Component } from 'react'

const Render = ({text}) => <div>{text}</div>


class App extends Component {
  render() {
    return <Render text={'test'} />
  }
}

export default App
