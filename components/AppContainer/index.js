import { connect } from 'react-redux';
import AppContainer from './presenter';
import { actionCreators as userActions } from '../../redux/modules/user';
import { actionCreators as WeeksActions } from '../../redux/modules/weeks';

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  console.log("AppContainer - index");
  console.log(user);
  return {
    isLoggedIn: user.isLoggedIn,
    accessToken: user.accessToken
  };
};

mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initApp: () => {
      dispatch(userActions.getProfile());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
