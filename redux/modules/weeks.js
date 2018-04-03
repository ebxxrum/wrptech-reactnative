import { API_URL } from '../../constants';
import { AsyncStorage } from 'react-native';

const WEEKS = 'WEEKS';
const RECENT = 'RECENT';
const USERS_REPORTS = 'USER_REPORTS';
const SPECIFIC_REPORTS = 'SPECIFIC_REPORTS';
const SET_REPORT = 'SET_REPORT';

function setWeeks(weeks) {
  return {
    type: WEEKS,
    weeks
  };
}

function getWeeks(accessToken, page) {
  console.log("getWeeks");
  return dispatch => {
    return fetch(`${API_URL}/weeks?access_token=${accessToken}&page=${page}`)
    .then(response => response.json())
    .then(json => {
      if (json) {
        dispatch(setWeeks(json));
      }
    });
  };
}

const initalState = {};

function reducer(state = initalState, action) {
  switch (action.type) {
    case WEEKS:
      console.log("reducer weeks");
      return applyWeeks(state, action);
    default:
      return state;
  }
}


function applyWeeks(state, action) {
  const { weeks } = action;
  console.log("applyWeeks");
  return {
    ...state,
    weeks: weeks
  };
}

const actionCreators = {
  getWeeks,
};

export { actionCreators };

export default reducer;
