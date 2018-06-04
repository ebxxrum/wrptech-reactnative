import { connect } from 'react-redux';
import AppContainer from './presenter';
import { actionCreators as userActions } from '../../redux/modules/user';
import { actionCreators as weeksActions } from '../../redux/modules/weeks';
import { actionCreators as weekReportActions } from '../../redux/modules/weekReport';
import { actionCreators as calendarActions } from '../../redux/modules/calendar';

const mapStateToProps = (state, ownProps) => {
  console.log("AppContainer");
  console.log(state);
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
      dispatch(calendarActions.getWeeks(accessToken));
    },
    initReport: (accessToken, week, profile) => {
      dispatch(weeksActions.getRecent(accessToken, week));
      dispatch(weekReportActions.getWeekReport(accessToken, week, profile));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
