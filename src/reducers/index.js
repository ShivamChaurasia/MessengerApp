import {
  REQUEST_POSTS, RECEIVE_POSTS,FILTER_LIST,UPDATE_SELECTED,ADD_CHAT
} from '../actions'
import _ from 'lodash';

let chatDataBase=[{id:1, from:"self", time:"10:10 AM", message:"hi"},{id:2, from:"mojombo", time:"10:10 AM", message:"hi"},{id:3, from:"self", time:"1:51 AM", message:"Bye"}];
let chatData=JSON.parse(JSON.stringify(chatDataBase));

const appStates = (state = {
    isFetching: true,
    selected:1,
    posts: [],
    chatData:[],
    selectedURL:""
}, action) => {
    switch (action.type) {
        case REQUEST_POSTS:
            return {
                ...state,
                chatData:chatDataBase
            }
        case RECEIVE_POSTS:
            return {
                ...state,
                isFetching: false,
                posts: action.posts,
                allItems:action.posts,
                selectedURL:action.posts[0].avatar_url,
            }
        case FILTER_LIST:
            var filteredArray = state.allItems.filter(function(l){
                    return l.login.toLowerCase().match( action.string );
                });
            return {
                ...state,
                posts: filteredArray
            }
        case UPDATE_SELECTED:
            return {
                ...state,
                selected:action.id,
                selectedURL: action.url
            }
        case ADD_CHAT:
            chatData.push({id:Math.floor(Date.now() / 1000), from:"selfa", time:"10:10 AM", message:action.newMsg})
            let newChatData = JSON.parse(JSON.stringify(chatData));
            return {
                ...state,
                chatData:newChatData
            }
        default:
            return state
    }
}

export default appStates
