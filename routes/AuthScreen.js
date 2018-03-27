import { StackNavigator } from 'react-navigation';
import LogInScreen from '../screens/LogInScreen';
import JoinScreen from '../screens/JoinScreen';

const AuthRoute = StackNavigator (
  {
    Login: {
      screen: LogInScreen,
    },
    Join: {
      screen: JoinScreen,
    },
  }
);

export default AuthRoute;
