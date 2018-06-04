import { AsyncStorage } from 'react-native';
import callApi from '../../redux/util/apiCaller';
import _getWeekName from '../../redux/util/getWeekName';

const SET_WEEK_REPORT = 'SET_WEEK_REPORT';

function setWeekReport(week, weekInfo, weekName, myReport, reportStatus) {
  return {
    type: SET_WEEK_REPORT,
    week,
    weekInfo,
    weekName,
    myReport,
    reportStatus
  };
}

function getWeekReport(accessToken, weekInfo, profile) {
  var id = weekInfo.id;
  var date = weekInfo.end_date;
  var weekName = _getWeekName(date);

  return dispatch => {
    return callApi(`weeks/${id}`, accessToken)
    .then(json => {
      if (json) {
        var myReport, reportStatus = _getReportStatus(json, profile);
        dispatch(setWeekReport(json, weekInfo, weekName, myReport, reportStatus));
        return true;
      }
    });
  };
}

function _getReportStatus(week, profile) {
  var myReport = null, reportStatus = false; // false: not written, true: written
  week.map(week =>
    profile.name === week.name && week.report &&
      reportStatus: true,
      myReport: week.report
  )
  return myReport, reportStatus;
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
  const { week, weekInfo, weekName, myReport, reportStatus } = action;
  return {
    week: week,
    weekInfo: weekInfo,
    weekName: weekName,
    myReport: myReport,
    reportStatus: reportStatus,
  };
}

const actionCreators = {
  getWeekReport
};

export { actionCreators };
export default reducer;
