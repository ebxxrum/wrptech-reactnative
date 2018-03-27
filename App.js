// import React, { Component } from 'react';
import LogInScreen from './screens/LogInScreen';
import JoinScreen from './screens/JoinScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen';
import ReportScreen from './screens/ReportScreen';
// import switchNavigator from './navigation/switchNavigator';
// import AuthScreen from './routes/AuthScreen';

import { StackNavigator, SwitchNavigator } from 'react-navigation';

const AuthStack = StackNavigator({ LogIn: LogInScreen, Join: JoinScreen  });
const AppStack = StackNavigator({ Report: ReportScreen });

export default SwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
