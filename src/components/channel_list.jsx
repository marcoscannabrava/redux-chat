/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { selectChannel, fetchMessages } from '../actions/index';

class ChannelList extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.fetchMessages(nextProps.selectedChannel);
    }
  }

  handleClick = (channel) => {
    this.props.selectChannel(channel);
  }

  renderList = () => {
    return this.props.channels.map((channel) => {
      return (
        <li
          key={channel}
          className={channel === this.props.selectedChannel ? 'active' : null}
          onClick={() => this.handleClick(channel)}
        >
          #{channel}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="channels">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChannel, fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);

