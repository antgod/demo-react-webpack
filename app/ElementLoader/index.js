import { createElement, Component, render } from 'rax';
import Container from './Container.tpl';

class App extends Component {
  render() {
    return <Container text="hello world" show={true} items={[1, 2, 3]}/>;
  }
}

export default App