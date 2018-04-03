import React from 'react';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ReportScreen from '../screens/ReportScreen';
import ProfileScreen from '../screens/ProfileScreen';

const RootNavigation = StackNavigator(
  {
    Report: {
      screen: ReportScreen,
      navigationOptions: {
        header: null
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        headerTitle: 'user name'
      }
    }
  }
);

export default RootNavigation;
