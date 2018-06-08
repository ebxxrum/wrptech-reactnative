import { StackNavigator } from 'react-navigation';
import WeekScreen from '../screens/WeekScreen';
import ReportScreen from '../screens/ReportScreen';

const WeekRoute = StackNavigator(
  {
    Week: {
      screen: WeekScreen,
      navigationOptions: {
        header: null
      }
    },
    Report: {
      screen: ReportScreen,
    }
  }
);

export default WeekRoute;
