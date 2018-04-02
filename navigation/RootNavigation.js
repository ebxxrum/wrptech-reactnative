import React from 'react';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ReportScreen from '../screens/ReportScreen';

const RootNavigation = StackNavigator(
  {
    Report: {
      screen: ReportScreen,
      navigationOptions: {
        header: null
      }
    }
  }
);

export default RootNavigation;
