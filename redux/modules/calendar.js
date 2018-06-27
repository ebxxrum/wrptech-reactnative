import callAxios from '../util/apiAxios';
import getWeekName from '../../redux/util/getWeekName';
import getWeekStatus from '../../redux/util/getWeekStatus';

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
