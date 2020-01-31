import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Message extends Component {
  render() {
    const options = {
      hour: 'numeric', minute: 'numeric', second: 'numeric',
      year: 'numeric', month: 'short', day: 'numeric'
    };
    const date = new Intl.DateTimeFormat('en-US', options).format(Date.parse(this.props.msg.created_at));
    return (
      <div className="msg">
        <h3><b>{this.props.msg.author}</b><i>{date}</i></h3>
        <p>{this.props.msg.content}</p>
      </div>
    );
  }
}

export default Message;
