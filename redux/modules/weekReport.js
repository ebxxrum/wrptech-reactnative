import { AsyncStorage } from 'react-native';
import callApi from '../../redux/util/apiCaller';
import moment from 'moment';

const SET_WEEK_REPORT = 'SET_WEEK_REPORT';

function setWeekReport(week, weekInfo, weekName, reportStatus) {
  return {
    type: SET_WEEK_REPORT,
    week,
    weekInfo,
    weekName,
    reportStatus
  };
}

function getWeekReport(accessToken, weekInfo, profile) {
  console.log("getWeekReport");
  console.log(weekInfo);
  var id = weekInfo.id;
  var date = weekInfo.end_date;
  var weekName = _getWeekName(date);

  return dispatch => {
    return callApi(`weeks/${id}`, accessToken)
    .then(json => {
      if (json) {
        var reportStatus = _getReportStatus(json, profile);
        dispatch(setWeekReport(json, weekInfo, weekName, reportStatus));
        return true;
      }
    });
  };
}

function _getWeekName(date) {
  var date = new Date(date);

  // weekOfMonth 설정
  var year = date.getFullYear();
  var month = date.getMonth();
  var first = new Date(year, month, 1).getDay() - 1;
  var weekOfMonth = Math.floor((first + date.getDate())/7) + 1;
  return (month+1) + "월" + weekOfMonth + "주";
}

function _getReportStatus(week, profile) {
  var reportStatus = false; // false: not written, true: written
  week.map(week =>
    profile.name === week.name && week.report &&
      reportStatus: true
  )
  return reportStatus;
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
  const { week, weekInfo, weekName, reportStatus } = action;
  return {
    week: week,
    weekInfo: weekInfo,
    weekName: weekName,
    reportStatus: reportStatus
  };
}

const actionCreators = {
  getWeekReport
};

export { actionCreators };
export default reducer;
