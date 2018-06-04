import { AsyncStorage } from 'react-native';
import callApi from '../../redux/util/apiCaller';
import _getWeekName from '../../redux/util/getWeekName';
import _getWeekStatus from '../../redux/util/getWeekStatus';

const SET_WEEKS = 'SET_WEEKS';
const PER_PAGE = 5;

function setWeeks(weeks, page) {
  const cureentPage = page + 1;
  return {
    type: SET_WEEKS,
    weeks,
    page: cureentPage
  };
}

function getWeeks(accessToken, page = 1, profile) {
  return dispatch => {
    return callApi(`weeks`, `${accessToken}&page=${page}`)
    .then(json => {
      var weeks = _setWeekName(json);
      var weeksWithInfo = _setWeekInfo(accessToken, weeks, profile);
      dispatch(setWeeks(weeksWithInfo, page));
    });
  };
}

function _setWeekName(weeks) {
  weeks.map(week =>
    week.weekName = _getWeekName(week.end_date)
  )
  return weeks;
}

function _setWeekInfo(accessToken, weeks, profile) {
  Promise.all(weeks.map(week =>
    callApi(`weeks/${week.id}`, accessToken)
    .then(json => {
      if (json) {
        _getWeekStatus(json, week, profile);
      }
    })
  ))
  return weeks;
}

const initalState = {
  data: [],
  page: 1,
  hasMoreData: true
}

function reducer(state = initalState, action) {
  switch (action.type) {
    case SET_WEEKS:
      return applyWeeks(state, action);
    default:
      return state;
  }
}

function applyWeeks(state, action) {
  const { weeks, page } = action;
  return {
    data: [...weeks],
    page: page,
    hasMoreData: weeks.length === PER_PAGE
  }
}

const actionCreators = {
  getWeeks
}

export { actionCreators };
export default reducer;
