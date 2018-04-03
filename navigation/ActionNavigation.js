import React from 'react';
import { StackNavigator } from 'react-navigation';
import ActionButtonRoute from '../routes/ActionButtonRoute';

const ActionNavigation = StackNavigator({
  Action: {
    screen: ActionButtonRoute
  }
});

export default ActionNavigation;
