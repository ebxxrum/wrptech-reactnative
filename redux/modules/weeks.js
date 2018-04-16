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

function setRecent(weeks, recentWeekID) {
  return {
    type: RECENT,
    weeks,
    recentWeekID
  };
}

function setUsersWithReports(weeks) {
  return {
    type: USERS_WITH_REPORTS,
    weeks
  };
}

function setReport(report) {
  return {
    type: SET_REPORT,
    report
  }
}

function getWeeks(accessToken) {
  return dispatch => {
    return fetch(`${API_URL}/weeks?access_token=${accessToken}`)
    .then(response => response.json())
    .then(json => {
      if (json) {
        dispatch(setWeeks(json));
        dispatch(getRecent(accessToken, json));
      }
    });
  };
}

function getRecent(accessToken, weeks) {
  var id = weeks[0].id;
  return dispatch => {
    return fetch(`${API_URL}/weeks/${id}?access_token=${accessToken}`)
    .then(response => response.json())
    .then(json => {
      if (json) {
        dispatch(setRecent(json, id));
      }
    });
  };
}

function getUsersWithReports(accessToken, id) {
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

function createReport(access_token, id, work, plan) {
  console.log("createReport")
  return dispatch => {
    return fetch(`${API_URL}/weeks/${id}/reports`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        access_token,
        work,
        plan
      })
    })
    .then(response => response.json())
    .then(json => {
      if(json) {
        dispatch(getWeeks(access_token));
        return true;
      } else {
        return false;
      }
    });
  };
}

const initalState = {};

function reducer(state = initalState, action) {
  switch (action.type) {
    case WEEKS:
      return applyWeeks(state, action);
    case RECENT:
      return applyRecent(state, action);
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

function applyRecent(state, action) {
  const { weeks, recentWeekID } = action;
  return {
    ...state,
    recent: weeks,
    recentWeekID: recentWeekID
  };
}

function applyUsersWithReports(state, action) {
  const { weeks } = action;
  return {
    ...state,
    thisWeek: weeks
  };
}

const actionCreators = {
  getWeeks,
  getRecent,
  getUsersWithReports,
  createReport
};

export { actionCreators };

export default reducer;
