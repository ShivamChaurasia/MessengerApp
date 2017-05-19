import React, { Component } from 'react';
import LeftBar from './LeftBar';
import ChatBox from './ChatBox';

class Container extends Component {
  render(){
    let { contactData, selected, selectedURL, chatData } = this.props
    return (
      <div>
        <div className="banner"><img src="https://chatteron.io/images/chatteron.png" alt="ChatterOn Logo" className="light-logo" /></div>
        <div className="app">
          <LeftBar contactData={contactData} selected={selected}/>
          <ChatBox chatData={chatData} selectedURL={selectedURL}/>
        </div>
      </div>
      )
  }
}
export default Container;
