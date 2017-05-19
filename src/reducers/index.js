import {
  REQUEST_POSTS, RECEIVE_POSTS,FILTER_LIST,UPDATE_SELECTED,ADD_CHAT
} from '../actions'
import _ from 'lodash';

let chatDataBase=[{id:1, from:"self", time:"10:10 AM", message:"hi"},{id:2, from:"mojombo", time:"10:10 AM", message:"hi"},{id:3, from:"self", time:"1:51 AM", message:"Bye"}];
let chatData=JSON.parse(JSON.stringify(chatDataBase));

const appStates = (state = { }, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, {isFetching: true, selected:1, chatData:chatDataBase })
    case RECEIVE_POSTS:
      return Object.assign({}, {isFetching: false, items: action.posts, allItems:action.posts, selected:state.selected, selectedURL:action.posts[0].avatar_url, chatData:chatDataBase})
    case FILTER_LIST:
      var filteredArray = state.allItems.filter(function(l){
                return l.login.toLowerCase().match( action.string );
            });
      return Object.assign({}, {isFetching: false, items: filteredArray, allItems:state.allItems, selected:state.selected, selectedURL: state.selectedURL, chatData:chatDataBase})
    case UPDATE_SELECTED:
      return Object.assign({}, {isFetching: false, items: state.items, allItems:state.allItems, selected:action.id, selectedURL: action.url, chatData:chatDataBase})
    case ADD_CHAT:
      chatData.push({id:Math.floor(Date.now() / 1000), from:"selfa", time:"10:10 AM", message:action.newMsg})
      let newChatData = JSON.parse(JSON.stringify(chatData));
      return Object.assign({}, {isFetching: false, items: state.items, allItems:state.allItems, selected:state.selected, selectedURL: state.selectedURL, chatData:newChatData })
    default:
      return state
  }
}

export default appStates
