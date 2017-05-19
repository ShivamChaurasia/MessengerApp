import React from 'react';
import { connect } from 'react-redux'
import { updateSelected } from '../actions'

let Person = ({ dispatch, contact, selected }) => {
    let classes = contact.id === selected ? "unread chat active" : "unread chat";
    return (
      <div className="first infinite-list-item infinite-list-item-transition">
          <div tabIndex="-1" className="chat-drag-cover">
              <div className={classes} onClick={e => {
                  dispatch(updateSelected(contact.id,contact.avatar_url))
                }}>
                  <div className="chat-avatar">
                      <div className="avatar icon-user-default">
                          <div className="avatar-body"><img src={contact.avatar_url} alt="Avtar" draggable="false" className="avatar-image is-loaded" />
                          </div>
                      </div>
                  </div>
                  <div className="chat-body">
                      <div className="chat-main">
                          <div className="chat-title"><span className="emojitext ellipsify" dir="auto" title={contact.login}>{contact.login}</span>
                          </div>
                          <div className="chat-meta"><span className="chat-time">1:51 AM</span>
                          </div>
                      </div>
                      <div className="chat-secondary">
                          <div className="chat-status" title=""><span className="emojitext ellipsify" dir="ltr">Bye</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      )
}

Person = connect()(Person)

export default Person;
