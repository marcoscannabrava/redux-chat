import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { selectChannel } from '../actions/index';

// eslint-disable-next-line react/prefer-stateless-function
class ChannelList extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.selectChannel(e.target.innerHtml);
  }

  renderList = () => {
    this.props.channels.map((channel) => {
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      return <h3 key={channel} onClick={this.handleClick}>#{channel}</h3>;
    });
  }

  render() {
    return (
      <div className="channels">
        {this.renderList()}
      </div>
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
  return bindActionCreators({ selectChannel }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);

