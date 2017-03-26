```
import React, { Component } from 'react'

// 二级类名
class DatePicker extends Component {
  constructor() {
    super()
  }

  render() {
    return <div></div>
  }
}

DatePicker.RangePicker = class extends Component {
  constructor() {
    super()
  }

  render() {
    const { value } = this.props
    const [start = '', end = ''] = value.split('~')
    return (<div>
      <input value={start} /> 至 <input value={end} />
    </div>)
  }
}

const createRangePicker = ()=> {
  return <DatePicker.RangePicker value="2010-01-01~2017-01-01"/>
}

export default createRangePicker

```