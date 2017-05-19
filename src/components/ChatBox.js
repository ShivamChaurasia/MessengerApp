import React from 'react';
import { connect } from 'react-redux'
import { addChat } from '../actions'

let ChatBox = ({ dispatch, chatData, selectedURL }) => {
    return (
      <div id="main" className="pane pane-chat pane-two">
        <div className="msgList">
          {
            chatData.map(function(msgObj){
              return(<div key={msgObj.id} className={msgObj.from==="self" ? "msgSent" : "msgReceived"}>
                        {msgObj.from === "self" ?
                        <div className="chat-avatar">
                            <div className="avatar icon-user-default">
                                <div className="avatar-body"><img src={selectedURL} alt="Avtar" draggable="false" className="avatar-image is-loaded" />
                                </div>
                            </div>
                        </div> : null
                        }
                        <span>{msgObj.message}</span>
                      </div>)
            })
          }
        </div>
        <div className="add-message-container">
          <textarea id="addMessage"/>
          <button className="send-icon" onClick={e => {
                  dispatch(addChat(document.querySelector("#addMessage").value))
                  document.querySelector("#addMessage").value = "";
                }}/>
        </div>
      </div>
      )
}
ChatBox = connect()(ChatBox)

export default ChatBox;
