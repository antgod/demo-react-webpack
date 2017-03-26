import React, { Component } from 'react';

const WrapperComponent = WrapperComponent => class extends Component {
  constructor() {
    super();
    this.state = { val: 0 };
    this.update = this.update.bind(this);
  }
  update(){
    this.setState({val: this.state.val + 1});
  }
  componentWillMount(){
    console.log('will mount...')
  }
  render(){
    return (
      <WrapperComponent
        update={this.update}
        {...this.state}
        {...this.props}
      />
    )
  }
  componentDidMount(){
    console.log('mounted...')
  }
}

const Button = (props) => {
  return (
    <button onClick={props.update}>
      {props.txt} - {props.val}
    </button>
  )
}

const Label = (props) => {
  return (
    <label onMouseMove={props.update}>
      {props.txt} - {props.val}
    </label>
  )
}

let ButtonMixed = WrapperComponent(Button);
let LabelMixed = WrapperComponent(Label);

class AbstractState extends Component {
  render(){
    return (
      <div>
        <ButtonMixed txt="button" />
        <LabelMixed txt="label" />
      </div>
    )
  }
}

export default AbstractState;