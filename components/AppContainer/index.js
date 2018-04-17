import { connect } from 'react-redux';
import AppContainer from './presenter';
import { actionCreators as userActions } from '../../redux/modules/user';
import { actionCreators as weeksActions } from '../../redux/modules/weeks';

const mapStateToProps = (state, ownProps) => {
  const { user, weeks } = state;
  return {
    isLoggedIn: user.isLoggedIn,
    accessToken: user.accessToken,
    profile: user.profile,
    weeks: weeks.weeks,
    recentArray: weeks.recentArray
  };
};

mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initApp: (accessToken, weeks) => {
      dispatch(userActions.getProfile(accessToken));
      dispatch(weeksActions.getWeeks(accessToken, 1));
      dispatch(weeksActions.getRecent(accessToken, weeks[0]));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
