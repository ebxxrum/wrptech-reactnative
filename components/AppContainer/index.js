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
    recent: weeks.recent,
    recentWeekID: weeks.recentWeekID,
    thisWeek: weeks.thisWeek,
  };
};

mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initApp: (accessToken, weekID, weeks) => {
      dispatch(userActions.getProfile(accessToken));
      dispatch(weeksActions.getWeeks(accessToken));
      dispatch(weeksActions.getUsersWithReports(accessToken, weekID));
      // dispatch(weeksActions.getRecent(accessToken, weeks));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
