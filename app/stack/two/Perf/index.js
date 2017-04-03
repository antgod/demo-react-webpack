import React, { Component } from 'react'
import createFragment from 'react-addons-create-fragment'
import Perf from 'react-addons-perf'

const data = [{
  sid: '600211',
  name: 'Cam1',
}, {
  sid: '600243',
  name: 'Arcthur',
}, {
  sid: '600225',
  name: 'Echo',
}]

//  我们把 key 设成了序号，这么做的确不会报警告了，但这是非常低效的做法。我们在生产环境下常常犯这样的错误，这个 key 是每次用来做 Virtual DOM diff 的，
//  每一位同学都用序号来更新的问题是它没有和同学的唯一信息相匹配，相当于用了一个随机键，那么不论有没有相同的项，更新都会重新渲染。
//  正确的做法也很简单，只需要把 key 的内容换成 sid 就可以了：
function Rank({ list }) {
  return (
    <ul>
      {list.map((entry, index) => (
        <li key={index}>{entry.name}</li>
      ))}
    </ul>
  )
}

// 我们还需要知道的一种情况是，有两个子组件需要渲染的时候，我们没法给它们设 key。这时需要用到 React 插件 createFragment 来解决：
function RandomRank({ first, second }) {
  const children = createFragment({
    first,
    second,
  })
  return (
    <ul>
      {children}
    </ul>
  )
}

class CreateRank extends Component {
  constructor() {
    super()
    Perf.start()
    Perf.stop()
  }

  render() {
    Perf.printInclusive()
    const ret = (<div>
      <Rank list={data}/>
      <RandomRank first={<li>random1</li>} second={<li>random2</li>}/>
    </div>)
    return ret
  }
}

export default CreateRank

