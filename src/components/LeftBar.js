import React, { Component } from 'react';
import Person from './Person';
import SearchComponent from './SearchComponent';

class LeftBar extends Component {
  render(){
    let { selected } = this.props;
    return (
      <div id="side" className="chatlist-panel pane pane-one">
        <SearchComponent />
        <div className="chatList">
          {
            this.props.contactData.map(function(contact){
              return <Person contact={contact} key={contact.login} selected={selected}/>
            })
          }
        </div>
      </div>
      )
  }
}
export default LeftBar;
