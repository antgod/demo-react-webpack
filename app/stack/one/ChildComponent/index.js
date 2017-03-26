import React, { Component } from 'react'

// 父组件
class DatePicker extends Component {
  render() {
    return <div />
  }
}

// 子组件
DatePicker.RangePicker = class extends Component {
  render() {
    const { value } = this.props
    const [start = '', end = ''] = value.split('~')
    return (<div>
      <input value={start} onChange={e => e.preventDefault()}/>
      至
      <input value={end} onChange={e => e.preventDefault()}/>
    </div>)
  }
}

const createRangePicker = () => <DatePicker.RangePicker value="2010-01-01~2017-01-01" />

export default createRangePicker
