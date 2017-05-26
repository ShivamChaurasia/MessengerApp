import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchContacts } from '../actions'
import Container from '../components/Container';
import Loader from '../components/Loader';
import '../components/index.css';

class App extends Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired
  }
  componentDidMount(){
    const { dispatch } = this.props
    dispatch(fetchContacts());
  }
  render(){
    const { isFetching } = this.props;
    return (
      <div className="app-wrapper">
        {isFetching ? <Loader /> : <Container />}
      </div>)
  }
}

const mapStateToProps = state => {
    const { isFetching} = state;
    return {
      isFetching
    }
}

export default connect(mapStateToProps)(App)
