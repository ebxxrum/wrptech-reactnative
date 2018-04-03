import { connect } from 'react-redux';
import AppContainer from './presenter';
import { actionCreators as userActions } from '../../redux/modules/user';
import { actionCreators as weeksActions } from '../../redux/modules/weeks';

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  console.log("AppContainer - index");
  console.log(user);
  return {
    isLoggedIn: user.isLoggedIn,
    accessToken: user.accessToken,
    profile: user.profile,
    page: 1,
  };
};

mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initApp: (accessToken, page) => {
      dispatch(userActions.getProfile(accessToken));
      dispatch(weeksActions.getWeeks(accessToken, page));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
