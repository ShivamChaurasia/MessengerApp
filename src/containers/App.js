import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPostsIfNeeded } from '../actions'
import Container from '../components/Container';
import Loader from '../components/Loader';
import '../components/index.css';

class App extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    chatData: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    selected: PropTypes.number.isRequired,
  }
  componentDidMount(){
    const { dispatch } = this.props
    dispatch(fetchPostsIfNeeded());
    var _this=this;
  }
  render(){
    const { isFetching, posts, selected, selectedURL, chatData} = this.props;
    return (
      <div className="app-wrapper">
        {isFetching ? <Loader /> : <Container contactData={posts} selected={selected} selectedURL={selectedURL} chatData={chatData}/>}
      </div>)
  }
}

const mapStateToProps = state => {
  if(!state.items){
      return {
      isFetching: true,
      selected:1,
      posts: [],
      chatData:[]
    }
  }else{
    const { items, isFetching, selected, selectedURL, chatData } = state;
    return {
      isFetching,
      selected,
      selectedURL,
      chatData,
      posts: items
    }
  }
}

export default connect(mapStateToProps)(App)