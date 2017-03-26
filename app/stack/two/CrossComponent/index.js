import React, { Component, PropTypes } from 'react'

class Button extends Component {
  static contextTypes = {
    color: PropTypes.string,
  }

  render() {
    const { value } = this.props

    return (
      <button style={{ color: this.context.color }}>
        {value}
      </button>
    )
  }
}

class ListItem extends Component {
  static contextTypes = {
    color: PropTypes.string,
  }

  render() {
    return (
      <div>
        <Button {...this.props}/>
      </div>
    )
  }
}

class List extends Component {
  static childContextTypes = {
    color: PropTypes.string,
  }

  getChildContext() {
    return {
      color: 'red',
    }
  }

  render() {
    const { list } = this.props
    return (
      <div>
        <ul>
          {list.map((entry, index) => (
            <ListItem key={`list-${index}`} value={entry.text}/>
          ))}
        </ul>
      </div>
    )
  }
}

const createList = () => {
  const list = [
    {
      text: 'name',
      checked: true,
    },
    {
      text: 'age',
      checked: true,
    },
  ]

  const handleItemChange = entry => console.log(entry)
  return <List list={list} handleItemChange={handleItemChange}/>
}

export default createList
