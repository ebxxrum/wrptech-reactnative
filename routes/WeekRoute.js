import { StackNavigator } from 'react-navigation';
import WeekScreen from '../screens/WeekScreen';
import Report from '../components/Report';
import Form from '../components/Form';

const WeekRoute = StackNavigator(
  {
    Week: {
      screen: WeekScreen,
      navigationOptions: {
        header: null
      }
    },
    Report: {
      screen: Report,
      navigationOptions: {
        header: null
      }
    },
    Form: {
      screen: Form,
    },
  }
);

export default WeekRoute;
