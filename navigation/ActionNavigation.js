import React from 'react';
import { StackNavigator } from 'react-navigation';
import ProfileRoute from '../routes/ProfileRoute';
import CalendarRoute from '../routes/CalendarRoute';

const ActionNavigation = StackNavigator(
  {
    Profile: {
      screen: ProfileRoute,
      navigationOptions: {
        header: null
      }
    },
    Calendar: {
      screen: CalendarRoute,
      navigationOptions: {
        header: null
      }
    },
  }
);

export default ActionNavigation;
