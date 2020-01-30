import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { createMessage } from '../actions/index';

// eslint-disable-next-line react/prefer-stateless-function
class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    createMessage(this.props.selectedChannel, this.props.author, this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <div className="type_msg">
        <div className="input_msg_write">
          <form onSubmit={this.handleSubmit}>
            <input type="text" className="write_msg" placeholder="Type a message" value={this.state.value} onChange={this.handleChange} />
            <button className="msg_send_btn" type="submit"><i className="fa fa-paper-plane-o" aria-hidden="true" /></button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel,
    author: state.currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMessage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);

