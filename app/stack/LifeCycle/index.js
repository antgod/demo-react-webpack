import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

class LifeCycle extends Component {

  static defaultProps = {
    title: undefined,
  };

  static propTypes = {
    title: PropTypes.element,
  };

  constructor(prop) {
    console.log('1.constructor');
    super(prop);
    this.state = {}
  }

  componentWillMount() {
    console.log('2.componentWillMount');
    this.setState({
      name: 'lhj'
    });
  }

  componentDidMount() {
    console.log('4.componentDidMount');

    /* 只会执行一次render */
    this.setState({
      name: 'lhj'
    });

    this.setState({
      name: 'lhj1'
    });

    this.setState({
      name: 'lhj2'
    });

    // 对于延迟性设置，会多次执行render
    setTimeout(()=> this.setState({
      name: 'lhj3'
    }), 0);
  }

  /* 只有父组件更改才会调用，初始化不会调用 */
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
    this.setState({
      name: 'lhj'
    });
  }

  /*
   * 必须返回true 或者 false， 不能更新组件状态
   * */
  shouldComponentUpdate(nextProps, nextState) {
    console.log('5.shouldComponentUpdate');
    console.log(nextProps, nextState);
    return true
  }

  /*
   * 不能更新组件状态
   * */
  componentWillUpdate() {
    console.log('6.componentWillUpdate');
  }

  /*
   * 不能更新组件状态
   * */
  componentDidUpdate() {
    console.log('7.componentDidUpdate');
  }

  render() {
    console.log('3.render');
    console.log(this.state.name);
    return <div>
      效果在控制台
    </div>
  }
}

const createLifeCycle = ()=> {
  return <LifeCycle title={<div>title</div>}/>
};
export default createLifeCycle



