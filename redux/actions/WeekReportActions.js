import callApi from '../../utils/apiCaller';
import callAxios from '../../utils/apiAxios';

export const SET_WEEK_REPORT = 'SET_WEEK_REPORT';

export function setWeekReport(week, weekInfo) {
  return {
    type: SET_WEEK_REPORT,
    week,
    weekInfo,
  };
}

export function getWeekReport(accessToken, weekInfo) {
  var id = weekInfo.id;

  return dispatch => {
    return callAxios(`weeks/${id}`, accessToken)
    .then(json => {
      if (json) {
        dispatch(setWeekReport(json, weekInfo));
        return true;
      }
    });
  };
}

export function createReport(accessToken, id, work, plan) {
  return dispatch => {
    return callApi(`weeks/${id}/reports`, accessToken, 'post', {work, plan})
    .then(json => {
      if (json) {
        // dispatch(getWeeks(accessToken, 1));
        return true;
      } else {
        return false;
      }
    });
  };
}