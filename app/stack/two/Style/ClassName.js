import React, { Component } from 'react'
import classNames from 'classnames';
import Style from './style.css'


class Button extends Component{
  render(){
    const btnClass = classNames({
      btn: true,
      btn_pressed: this.props.isPressed,
      btn_hovered: this.props.isHovered,
    });

    return <button className={btnClass}>{this.props.label}</button>;
  }
}

const createButton = ()=>{
  return <Button isPressed={true} isHovered={true} label="按钮"/>
};

export default createButton