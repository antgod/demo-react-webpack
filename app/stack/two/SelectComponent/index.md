```
import './index.less'
import 'antd/dist/antd.min.css'
import React, { Component } from 'react'
import { Input } from 'antd'

function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

class SelectInput extends Component {
  render() {
    const { keyword, onChange, placeholder } = this.props
    return (
      <div className="select-input-wrapper">
        <Input
          className="select-input"
          type="text"
          value={keyword}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
        />
      </div>
    )
  }
}

class ListItem extends Component {
  render() {
    const { label, onClick } = this.props
    return <li onClick={() => onClick(label)}>{label}</li>
  }
}

class List extends Component {
  render() {
    const { data = [], onClick, active = false } = this.props

    const finalList = active ? (<ul className="search-list-wrapper">
      {data.map((item, index) => <ListItem onClick={onClick} label={item} key={index}/>)}
    </ul>) : null
    return finalList
  }
}

class Selector extends Component {
  render() {
    const { children } = this.props
    return (
      <div>
        {children.map((child, index) => {
          return React.cloneElement(child, { ...this.props, key: index })
        })}
      </div>
    )
  }
}

// 完成 SearchInput 与 List 的交互
const searchDecorator = (WrappedComponent) => {
  class SearchDecorator extends Component {
    constructor(props) {
      super(props)
      this.onChangeHandle = this.onChangeHandle.bind(this)
      this.onClickHandle = this.onClickHandle.bind(this)
      this.state = {}
    }

    onChangeHandle(keyword) {
      this.setState({
        keyword,
        active: true,
      })
      this.props.onSearch(keyword)
    }

    onClickHandle(keyword) {
      this.setState({
        keyword,
        active: false,
      })
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          onChange={this.onChangeHandle}
          onClick={this.onClickHandle}
        />
      )
    }
  }
  return SearchDecorator
}

// 完成 List 数据请求
const asyncSelectDecorator = params => (WrappedComponent) => {
  class AsyncSelectDecorator extends Component {
    constructor() {
      super()
      this.state = {}
      this.onSearch = this.onSearch.bind(this)
    }

    onSearch(keyword) {
      // 这里可以模拟发起ajax请求
      const data = [1, 2, 3, 4].map(count => new Array(count).fill(keyword).join(''))
      this.setState({
        data,
      })
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...params}
          onSearch={this.onSearch}
          data={this.state.data}
        />
      )
    }
  }
  return AsyncSelectDecorator
}

const WrapperSelector = compose(asyncSelectDecorator({
  placeholder: '请输入',
}), searchDecorator)(Selector)

class SearchSelect extends Component {
  render() {
    return (
      <WrapperSelector className="search-select" {...this.props}>
        <SelectInput />
        <List />
      </WrapperSelector>
    )
  }
}

export default SearchSelect
```

