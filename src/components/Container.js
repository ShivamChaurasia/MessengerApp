import React, { Component } from 'react';
import LeftBar from './LeftBar';
import ChatBox from './ChatBox';
import logo from '../images/chatteron.png';

class Container extends Component {
  render(){
    let { contactData, selected, selectedURL, chatData, message } = this.props;
    return (
      <div>
        <div className="banner"><img src={logo} alt="ChatterOn Logo" className="light-logo" /></div>
        <div className="app">
          <LeftBar contactData={contactData} selected={selected}/>
          <ChatBox chatData={chatData} selectedURL={selectedURL} message={message}/>
        </div>
      </div>
      )
  }
}
export default Container;
