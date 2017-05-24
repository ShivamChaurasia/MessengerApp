import React from 'react';

let Message = ({ msgObj, selectedURL }) => {
    return(
        <div className={msgObj.from==="self" ? "msgSent" : "msgReceived"}>
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
}

export default Message;
