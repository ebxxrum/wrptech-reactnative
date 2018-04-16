import React from 'react';
import { StackNavigator } from 'react-navigation';
import WeekRoute from '../routes/WeekRoute';
import ActionNavigation from './ActionNavigation';

const RootNavigation = StackNavigator(
  {
    Week: {
      screen: WeekRoute,
      navigationOptions: {
        header: null
      }
    },
    Action: {
      screen: ActionNavigation,
      navigationOptions: {
        header: null
      }
    },
  }
);

export default RootNavigation;
