import { StackNavigator } from 'react-navigation';
import WeekRoute from '../routes/WeekRoute';
import CalendarRoute from '../routes/CalendarRoute';

const RootNavigation = StackNavigator(
  {
    Week: {
      screen: WeekRoute,
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
