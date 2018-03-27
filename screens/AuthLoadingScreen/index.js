import React, { Component } from 'react';
import { View, Text, Navigator, AsyncStorage, ActivityIndicator, StatusBar } from 'react-native';

class AuthLoadingScreen extends Component {
  constructor() {
    super();
    this._getAccessToken();
  }

  _getAccessToken = async() => {
    const accessToken = await AsyncStorage.getItem('accessToken');
    this.props.navigation.navigate(accessToken ? 'Auth' : 'App');
  };

  render() {
    return (
      <View style={style.container}>
        <ActivityIndicator size="large" color="#e91b23" />
        <StatusBar barStyle="default" />
      </View>
    );
  }}

export default AuthLoadingScreen;
