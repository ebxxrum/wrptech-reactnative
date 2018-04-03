import { StackNavigator } from 'react-navigation';
import LogInScreen from '../screens/LogInScreen';
import JoinScreen from '../screens/JoinScreen';

const LoggedOutNavigation = StackNavigator({
  LogIn: {
    screen: LogInScreen,
    navigationOptions: {
      header: null
    }
  }
});

export default LoggedOutNavigation
