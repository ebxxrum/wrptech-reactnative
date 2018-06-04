import { AsyncStorage } from 'react-native';
import callApi from '../../redux/util/apiCaller';
import _getWeekName from '../../redux/util/getWeekName';

const SET_WEEK_REPORT = 'SET_WEEK_REPORT';

function setWeekReport(week, weekInfo) {
  return {
    type: SET_WEEK_REPORT,
    week,
    weekInfo,
  };
}

function getWeekReport(accessToken, weekInfo, profile) {
  console.log("getWeekReport");
  console.log(weekInfo);
  var id = weekInfo.id;
  var date = weekInfo.end_date;
  // va = _getWeekName(date);

  return dispatch => {
    return callApi(`weeks/${id}`, accessToken)
    .then(json => {
      if (json) {
        var info = _getReportStatus(json, weekInfo, profile);
        dispatch(setWeekReport(json, info));
        return true;
      }
    });
  };
}

function _getReportStatus(reports, weekInfo, profile) {
  weekInfo.reportStatus = false;
  weekInfo.myReport = null;

  reports.map(report =>
    profile.name === report.name && report.report &&
      weekInfo.reportStatus: true,
      weekInfo.myReport: report.report
  )

  return weekInfo;
}

const initalState = {};

function reducer(state = initalState, action) {
  switch (action.type) {
    case SET_WEEK_REPORT:
      return applyWeekReport(state, action);
    default:
      return state;
  }
}

function applyWeekReport(state, action) {
  const { week, weekInfo } = action;
  return {
    week: week,
    weekInfo: weekInfo,
  };
}

const actionCreators = {
  getWeekReport
};

export { actionCreators };
export default reducer;
