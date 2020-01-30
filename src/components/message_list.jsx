import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { fetchMessages } from '../actions/index';
import Message from './message';
import MessageForm from './message_form';

// eslint-disable-next-line react/prefer-stateless-function
class MessageList extends Component {
  componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 5000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  renderList = () => {
    return this.props.msgs.map(msg => <Message key={msg.created_at} msg={msg} />);
  }

  render() {
    return (
      <div className="selected-channel">
        <h2>Channel #{this.props.selectedChannel}</h2>
        <div className="msg-list" ref={(list) => { this.list = list; }}>
          {this.renderList()}
        </div>
        <MessageForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    msgs: state.msgs,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);

