import { AsyncStorage } from 'react-native';
import callApi from '../../redux/util/apiCaller';
import _getWeekName from '../../redux/util/getWeekName';

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

function getWeeks(accessToken, page = 1) {
  return dispatch => {
    return callApi(`weeks`, `${accessToken}&page=${page}`)
    .then(json => {
      var weeks = _setWeekName(json);
      dispatch(setWeeks(weeks, page));
    });
  };
}

function _setWeekName(weeks) {
  weeks.map(week =>
    week.weekName = _getWeekName(week.end_date)
  )
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
