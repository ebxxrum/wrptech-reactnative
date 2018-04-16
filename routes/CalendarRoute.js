import { StackNavigator } from 'react-navigation';
import CalendarScreen from '../screens/CalendarScreen';
import ReportList from '../components/ReportList';

const CalendarRoute = StackNavigator(
  {
    Calendar: {
      screen: CalendarScreen,
      navigationOptions: {
        header: null
      }
    },
    ReportList: {
      screen: ReportList,
      navigationOptions: {
        header: null
      }
    },
  }
);

export default CalendarRoute;
