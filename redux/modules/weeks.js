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

function getWeeks(access_token, page) {
  console.log("getWeeks");
  return dispatch => {
    return fetch(`${API_URL}/weeks`, {
      body: JSON.stringify({
        access_token,
        page
      })
    })
    .then(response => {
      if (response) {
        console.log(response);
      } else {
        console.log(response.json());
        return response.json();
      }
    })
    .then(json => json);
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
    weeks
  };
}

const actionCreators = {
  getWeeks,
};

export { actionCreators };

export default reducer;
