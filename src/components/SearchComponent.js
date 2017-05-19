import React from 'react';
import { connect } from 'react-redux'
import { filterList } from '../actions'

let SearchComponent = ({ dispatch }) => (

	<div tabIndex="-1" className="chatlist-panel-search">
        <div className="pane-subheader pane-list-subheader subheader-search">
            <div className="icon icon-search"></div>
            <input type="text" className="input input-search" data-tab="2" dir="auto" placeholder="Search or start new chat"
            onChange={e => {
      		  dispatch(filterList(e.target.value))
      		}}/>
        </div>
    </div>

)
SearchComponent = connect()(SearchComponent)

export default SearchComponent;
