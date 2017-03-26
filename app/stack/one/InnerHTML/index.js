import React, { Component } from 'react'

class InnerHTML extends Component {
  render() {
    return (<div>
      <div>{['cc ', <span>&copy;</span>, ' 2015']}</div>
      <div dangerouslySetInnerHTML={{ __html: 'cc &copy; 2015' }}/>
    </div>)
  }
}

const createInnerHTML = () => {
  const component = <InnerHTML />
  return component
}

export default createInnerHTML
