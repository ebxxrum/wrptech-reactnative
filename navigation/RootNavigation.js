import React from 'react';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import WeekScreen from '../screens/WeekScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FormScreen from '../components/Form';

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
    },
    Form: {
      screen: FormScreen,
      navigationOptions: {
          headerTitle: "create report"
      }
    },
  }
);

export default RootNavigation;
