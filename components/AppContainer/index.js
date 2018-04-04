import { connect } from 'react-redux';
import AppContainer from './presenter';
import { actionCreators as userActions } from '../../redux/modules/user';
import { actionCreators as weeksActions } from '../../redux/modules/weeks';

const mapStateToProps = (state, ownProps) => {
  const { user, weeks } = state;
  console.log(state);
  return {
    isLoggedIn: user.isLoggedIn,
    accessToken: user.accessToken,
    profile: user.profile,
    weeks: weeks.weeks,
    thisWeek: weeks.thisWeek,
    page: 1,
  };
};

mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initApp: (accessToken, page, weekID) => {
      dispatch(userActions.getProfile(accessToken));
      dispatch(weeksActions.getWeeks(accessToken, page));
      dispatch(weeksActions.getUsersWithReports(accessToken, weekID));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
