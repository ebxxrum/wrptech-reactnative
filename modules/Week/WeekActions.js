import { AsyncStorage } from 'react-native';
import callApi from '../../redux/util/apiCaller';
import moment from 'moment';

const SET_WEEK_REPORT = 'SET_WEEK_REPORT';

export function setWeekReport(week, weekInfo, weekName, reportStatus) {
  return {
    type: SET_WEEK_REPORT,
    week,
    weekInfo,
    weekName,
    reportStatus
  };
}

export function getWeekReport(accessToken, week, profile) {
  var id = week.id;
  var date = week.end_date;
  var weekName = _getWeekName(date);
  var reportStatus = false; // false: not written, true: written

  return dispatch => {
    return callApi(`weeks/${id}`, accessToken)
    .then(json => {
      if (json) {
        reportStatus = _getReportStatus(json, profile);
        dispatch(setWeekReport(json, week, weekName, reportStatus));
        return true;
      }
    });
  };
}

function _getWeekName(date) {
  var date = new Date(end_date);

  // weekOfMonth 설정
  var year = date.getFullYear();
  var month = date.getMonth();
  var first = new Date(year, month, 1).getDay() - 1;
  var weekOfMonth = Math.floor((first + date.getDate())/7) + 1;
  return (month+1) + "월" + weekOfMonth + "주";
}

function _getReportStatus(week, profile) {
  var reportStatus = false;
  reportStatus = week.forEach((week) => {
    if ((profile.name === week.name) && week.report) {
      return true;
    }
  });
  return reportStatus;
}
