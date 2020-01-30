import React from 'react';
import MessageList from './message_list';
import ChannelList from './channel_list';

const App = () => {
  return (
    <div className="app">
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
