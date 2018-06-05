import { StackNavigator } from 'react-navigation';
import CalendarScreen from '../screens/CalendarScreen';

const CalendarRoute = StackNavigator(
  {
    Calendar: {
      screen: CalendarScreen,
      navigationOptions: {
        header: null
      }
    },
  }
);

export default CalendarRoute;
