import { connect } from 'react-redux';
import AppContainer from './presenter';
import { actionCreators as userActions } from '../../redux/modules/user';
import { actionCreators as weeksActions } from '../../redux/modules/weeks';
import { actionCreators as weekReportActions } from '../../redux/modules/weekReport';

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
    initApp: (accessToken) => {
      dispatch(userActions.getProfile(accessToken));
      dispatch(weeksActions.getWeeks(accessToken, 1));
    },
    initReport: (accessToken, week, profile) => {
      dispatch(weeksActions.getRecent(accessToken, week));
      dispatch(weekReportActions.getWeekReport(accessToken, week, profile));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
