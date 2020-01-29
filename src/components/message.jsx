import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Message extends Component {
  render() {
    return (
      <div className="msg">
        <h3><b>{this.props.msg.author}</b><i> - {this.props.msg.created_at}</i></h3>
        <p>{this.props.msg.content}</p>
      </div>
    );
  }
}

export default Message;
