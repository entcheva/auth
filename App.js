import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC915WSqDQDQduDIxZKUJVUAtOdTplhMQg',
      authDomain: 'auth-acb21.firebaseapp.com',
      databaseURL: 'https://auth-acb21.firebaseio.com',
      projectId: 'auth-acb21',
      storageBucket: '',
      messagingSenderId: '13828717977'
    })
  }

  render() {
    return (
    <View>
      <Header headerText='Authentication' />
      <LoginForm />
    </View>
    );
  }
};
