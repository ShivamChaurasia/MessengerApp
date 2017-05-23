import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchContacts } from '../actions'
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
    dispatch(fetchContacts());
  }
  render(){
    const { isFetching, posts, selected, selectedURL, chatData, message} = this.props;
    return (
      <div className="app-wrapper">
        {isFetching ? <Loader /> : <Container contactData={posts} selected={selected} selectedURL={selectedURL} chatData={chatData} message={message}/>}
      </div>)
  }
}

const mapStateToProps = state => {
    const { posts, isFetching, selected, selectedURL, chatData, message } = state;
    return {
      isFetching,
      selected,
      selectedURL,
      chatData,
      posts: posts,
      message
    }
}

export default connect(mapStateToProps)(App)
// export default App