import React, { Component } from 'react';
import LogIn from './screens/LogInScreen';
import Join from './screens/JoinScreen';

export default class App extends Component {
  render() {
    return <LogIn> <Join /> </LogIn>;
    // return <Join />;
  }
}
