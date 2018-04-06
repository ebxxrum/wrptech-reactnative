import { API_URL } from '../../constants';
import { AsyncStorage } from 'react-native';

const WEEKS = 'WEEKS';
const RECENT = 'RECENT';
const USERS_WITH_REPORTS = 'USERS_WITH_REPORTS';
const SPECIFIC_REPORTS = 'SPECIFIC_REPORTS';
const SET_REPORT = 'SET_REPORT';

function setWeeks(weeks) {
  return {
    type: WEEKS,
    weeks
  };
}

function setUsersWithReports(weeks) {
  return {
    type: USERS_WITH_REPORTS,
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

function getUsersWithReports(accessToken, id) {
  console.log("getUsersWithReports");
  return dispatch => {
    return fetch(`${API_URL}/weeks/${id}?access_token=${accessToken}`)
    .then(response => response.json())
    .then(json => {
      if (json) {
        dispatch(setUsersWithReports(json));
      }
    });
  };
}

function createReport(accessToken, id, work, plan) {
  return dispatch => {
    return fetch(`${API_URL}/weeks/${id}?access_token=${accessToken}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        work,
        plan
      })
    })
    .then(response => response.json())
    .then(json => {
      if(json) {
        dispatch(setReport(json));
      }
    });
  };
}

const initalState = {};

function reducer(state = initalState, action) {
  switch (action.type) {
    case WEEKS:
      return applyWeeks(state, action);
    case USERS_WITH_REPORTS:
      return applyUsersWithReports(state, action);
    default:
      return state;
  }
}


function applyWeeks(state, action) {
  const { weeks } = action;
  return {
    ...state,
    weeks: weeks
  };
}

function applyUsersWithReports(state, action) {
  console.log("applyUsersWithReports");
  const { weeks } = action;
  return {
    ...state,
    thisWeek: weeks
  }
}

const actionCreators = {
  getWeeks,
  getUsersWithReports
};

export { actionCreators };

export default reducer;
