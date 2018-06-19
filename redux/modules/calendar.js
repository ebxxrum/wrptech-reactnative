import { AsyncStorage } from 'react-native';
import callApi from '../../redux/util/apiCaller';
import _getWeekName from '../../redux/util/getWeekName';
import _getWeekStatus from '../../redux/util/getWeekStatus';

const SET_WEEKS = 'SET_WEEKS';
const ADD_WEEKS = 'ADD_WEEKS';

function setWeeks(weeks, page) {
  return {
    type: SET_WEEKS,
    weeks,
    page: page
  };
}

function addWeeks(weeks, page) {
  return {
    type: ADD_WEEKS,
    weeks,
    page: page
  };
}

function getWeeks(accessToken, page, profile) {
  return dispatch => {
    return callApi(`weeks`, `${accessToken}&page=${page}`)
    .then(json => {
      var weeks = _setWeekName(json);
      var weeksWithInfo = _setWeekInfo(accessToken, weeks, profile);
      console.log("getWeeks");
      console.log(page);
      if (page > 1) {
        console.log("add");
        dispatch(addWeeks(weeksWithInfo, page));
      } else {
        console.log("set");
        dispatch(setWeeks(weeksWithInfo, page));
      }
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
    case ADD_WEEKS:
      return fetchWeeks(state, action);
    default:
      return state;
  }
}

function applyWeeks(state, action) {
  const { weeks, page } = action;
  return {
    data: [...weeks],
    page: page,
  }
}

function fetchWeeks(state, action) {
  const { weeks, page } = action;
  return {
    data: [...state.data, ...weeks],
    page: page,
  }
}

const actionCreators = {
  getWeeks
}

export { actionCreators };
export default reducer;
