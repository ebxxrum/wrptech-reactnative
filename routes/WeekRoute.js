import { StackNavigator } from 'react-navigation';
import WeekScreen from '../screens/WeekScreen';
import Form from '../components/Form';

const WeekRoute = StackNavigator(
  {
    Week: {
      screen: WeekScreen,
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
