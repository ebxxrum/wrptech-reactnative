import { StackNavigator } from 'react-navigation';
import LogInScreen from '../screens/LogInScreen';
import JoinScreen from '../screens/JoinScreen';

const LoggedOutNavigation = StackNavigator({
  LogIn: {
    screen: LogInScreen,
    navigationOptions: {
      header: null
    }
  },
  Join: {
    screen: JoinScreen,
    navigationOptions: {
      headerTitle: '회원가입'
    }
  },
});

export default LoggedOutNavigation;
