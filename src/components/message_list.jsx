import React, { Component } from 'react';
import { connect } from "react-redux";

// eslint-disable-next-line react/prefer-stateless-function
class MessageList extends Component {
  renderList = () => {
    return this.props.msgs.map(msg => <Message key={msg.created_at} msg={msg} />);
  }

  render() {
    return (
      <div className="msg-list">
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    msgList: state.msgs
  };
}

export default connect(mapStateToProps)(MessageList);

