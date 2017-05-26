import React, { Component } from 'react';
import LeftBar from './LeftBar';
import ChatBox from './ChatBox';
import logo from '../images/chatteron.png';
import { connect } from 'react-redux';

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
const mapStateToProps = state => {
    const { posts, selected, selectedURL, chatData, message } = state;
    return {
      selected,
      selectedURL,
      chatData,
      contactData: posts,
      message
    }
}
export default connect(mapStateToProps)(Container)
