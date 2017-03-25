import React, { Component } from 'react';


class Button extends React.Component {
  render() {
    return (
      <button style={{ background: this.context.color }}>
        {this.props.children}
      </button>
    );
  }
}

Button.contextTypes = {
  color: React.PropTypes.string
};

class Message extends React.Component {
  render() {
    return (
      <div>
        {this.props.text} <Button>Delete</Button>
      </div>
    );
  }
}

class MessageList extends React.Component {
  getChildContext() {
    return { color: "purple" };
  }

  render() {
    const children = [{text:'test'}].map((message,index) =>
      <Message text={message.text} key={index}/>
    );
    return <div className="wrapper">{children}</div>;
  }
}

MessageList.childContextTypes = {
  color: React.PropTypes.string
};


export default MessageList;
