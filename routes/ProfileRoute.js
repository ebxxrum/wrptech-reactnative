import { StackNavigator } from 'react-navigation';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileDetailScreen from '../screens/ProfileDetailScreen';

const ProfileRoute = StackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      headerLeft: null,
      headerBackTitle: null
    }
  },
  ProfileDetail: {
    screen: ProfileDetailScreen,
    navigationOptions: {
      headerTitle: "개인정보 수정",
    }
  },
});

export default ProfileRoute;
