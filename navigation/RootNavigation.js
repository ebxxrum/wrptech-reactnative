import React from 'react';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import WeekScreen from '../screens/WeekScreen';
import FormScreen from '../components/Form';
import ProfileScreen from '../routes/ProfileRoute';
import CalendarScreen from '../screens/CalendarScreen';

const RootNavigation = StackNavigator(
  {
    Week: {
      screen: WeekScreen,
      navigationOptions: {
        header: null
      }
    },
    Form: {
      screen: FormScreen,
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        header: null
      }
    },
    Calendar: {
      screen: CalendarScreen,
      navigationOptions: {
        header: null
      }
    }
  }
);

export default RootNavigation;
