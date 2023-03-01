import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import {Header} from './components/common';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    var firebaseConfig = {
      apiKey: 'AIzaSyAPz1ZzQqo3mGmZUGMfIj_xM42cDTzgP_M',
      authDomain: 'tutions-cf255.firebaseapp.com',
      projectId: 'tutions-cf255',
      storageBucket: 'tutions-cf255.appspot.com',
      messagingSenderId: '1071452171046',
      appId: '1:1071452171046:web:bf11a498cabdfe28a52fe7',
      measurementId: 'G-PKJPMB9TMT',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}

export default App;
