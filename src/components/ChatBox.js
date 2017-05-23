import React from 'react';
import { connect } from 'react-redux';
import { addChat, updateText } from '../actions';
import Message from './Message';

let ChatBox = ({ dispatch, chatData, selectedURL, message }) => {
    return (
      <div id="main" className="pane pane-chat pane-two">
        <div className="msgList">
          {
            chatData.map(function(msgObj){
              return(<Message msgObj={msgObj} selectedURL={selectedURL} key={msgObj.id}/>)
            })
          }
        </div>
        <div className="add-message-container">
          <textarea id="addMessage" value={message} onChange={
            e=>dispatch(updateText(e.target.value))
          }/>
          <button className="send-icon" onClick={e => {
                  dispatch(addChat())
                }}/>
        </div>
      </div>
      )
}
ChatBox = connect()(ChatBox)

export default ChatBox;
