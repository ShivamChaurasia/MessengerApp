export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const FILTER_LIST = 'FILTER_LIST';
export const UPDATE_SELECTED = 'UPDATE_SELECTED';
export const UPDATE_TEXT = 'UPDATE_TEXT';
export const ADD_CHAT = 'ADD_CHAT';

var request = require('superagent');

export const requestPosts = () => ({
  type: REQUEST_POSTS,
})

export const receivePosts = (json) => ({
  type: RECEIVE_POSTS,
  posts: json,
})

export const fetchContacts = () => dispatch => {
  dispatch(requestPosts())
  request('GET', 'https://api.github.com/users')
  	.then(function(response){
    	dispatch(receivePosts(response.body))
    })
}

export const filterList = (string) => ({
  type: FILTER_LIST,
  string: string,
})

export const updateSelected = (id,url) => ({
  type: UPDATE_SELECTED,
  id: id,
  url: url,
})

export const updateText = (newMsg) => ({
  type: UPDATE_TEXT,
  newMsg: newMsg
})

export const addChat = () => ({
  type: ADD_CHAT
})
