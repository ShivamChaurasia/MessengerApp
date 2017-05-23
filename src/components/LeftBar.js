import React from 'react';
import Person from './Person';
import SearchComponent from './SearchComponent';

let LeftBar =({ selected, contactData })=> {
    return (
      <div id="side" className="chatlist-panel pane pane-one">
        <SearchComponent />
        <div className="chatList">
          {
            contactData.map(function(contact){
              return <Person contact={contact} key={contact.login} selected={selected}/>
            })
          }
        </div>
      </div>
      )
}
export default LeftBar;
