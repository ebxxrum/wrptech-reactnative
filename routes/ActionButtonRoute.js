import { StackNavigator } from 'react-navigation';
import ProfileScreen from '../screens/ProfileScreen';

const ActionButtonRoute = StackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      headerTitle: "사용자 이름"
    }
  }
});
