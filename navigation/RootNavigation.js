import React from 'react';
import { StackNavigator } from 'react-navigation';
import WeekRoute from '../routes/WeekRoute';
import ProfileRoute from '../routes/ProfileRoute';
import CalendarRoute from '../routes/CalendarRoute';

const RootNavigation = StackNavigator(
  {
    Week: {
      screen: WeekRoute,
      navigationOptions: {
        header: null
      }
    },
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

export default RootNavigation;
