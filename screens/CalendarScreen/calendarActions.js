import callAxios from '../../utils/apiAxios';
import getWeekName from '../../utils/getWeekName';
import getWeekStatus from '../../utils/getWeekStatus';

export const SET_WEEKS = 'SET_WEEKS';
export const ADD_WEEKS = 'ADD_WEEKS';

export function setWeeks(weeks, page) {
  return {
    type: SET_WEEKS,
    weeks,
    page: page
  };
}

export function addWeeks(weeks, page) {
  return {
    type: ADD_WEEKS,
    weeks,
    page: page
  };
}

export function getWeeks(accessToken, page, profile) {
  return dispatch => {
    return callAxios(`weeks`, `${accessToken}&page=${page}`)
    .then(json => {
      var weeks = _setWeekName(json);
      var weeksWithInfo = _setWeekInfo(accessToken, weeks, profile);
      if (page > 1) {
        dispatch(addWeeks(weeksWithInfo, page));
      } else {
        dispatch(setWeeks(weeksWithInfo, page));
      }
    });
  };
}

function _setWeekName(weeks) {
  weeks.map(week =>
    week.weekName = getWeekName(week.end_date)
  )
  return weeks;
}

function _setWeekInfo(accessToken, weeks, profile) {
  Promise.all(weeks.map(week =>
    callAxios(`weeks/${week.id}`, accessToken)
    .then(json => {
      if (json) {
        getWeekStatus(json, week, profile);
      }
    })
  ))
  return weeks;
}
