import React from 'react';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import WeekScreen from '../screens/WeekScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileDetailScreen from '../screens/ProfileDetailScreen';
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
    ProfileDetail: {
      screen: ProfileDetailScreen,
      navigationOptions: {
        headerTitle: "개인정보 수정"
      }
    },
    Form: {
      screen: FormScreen,
    },
  }
);

export default RootNavigation;
