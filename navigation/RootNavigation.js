import React from 'react';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import WeekScreen from '../screens/WeekScreen';
import ProfileScreen from '../screens/ProfileScreen';

const RootNavigation = StackNavigator(
  {
    Week: {
      screen: WeekScreen,
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
