import { API_URL } from '../../constants';
import { AsyncStorage } from 'react-native';
import moment from 'moment';

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

function setRecent(recentWeekInfo, recentWeek, recentWeekName) {
  return {
    type: RECENT,
    recentWeekInfo,
    recentWeek,
    recentWeekName
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

function getWeeks(accessToken, page) {
  return dispatch => {
    return fetch(`${API_URL}/weeks?page=${page}&access_token=${accessToken}`)
    .then(response => response.json())
    .then(json => {
      if (json) {
        dispatch(setWeeks(json));
        // dispatch(getRecent(accessToken, json));
        return json;
      }
    });
  };
}

function getRecent(accessToken, week) {
  var id = week.id;
  var end_date = week.end_date;
  var weekName = getWeekName(end_date);
  return dispatch => {
    return fetch(`${API_URL}/weeks/${id}?access_token=${accessToken}`)
    .then(response => response.json())
    .then(json => {
      if (json) {
        dispatch(setRecent(week, json, weekName));
        return true;
      }
    });
  };
}

function getWeekName(end_date) {
  var date = new Date(end_date);
  date.setDate(date.getDate() + 1);

  // weekOfMonth 설정
  var year = date.getFullYear();
  var month = date.getMonth();
  var first = new Date(year, month, 1).getDay() - 1;
  var weekOfMonth = Math.floor((first + date.getDate())/7) + 1;
  return (month+1) + "월" + weekOfMonth + "주";
}

function getUsersWithReports(accessToken, id) {
  return dispatch => {
    return fetch(`${API_URL}/weeks/${id}?access_token=${accessToken}`)
    .then(response => response.json())
    .then(json => {
      if (json) {
        dispatch(setUsersWithReports(json));
        return json;
      }
      // } else {
      //   return false;
      // }
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
        dispatch(getWeeks(access_token, 1));
        // dispatch(getRecent(access_token, info));
        return true;
      } else {
        return false;
      }
    });
  };
}

const initalState = {
};

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
  const { recentWeekInfo, recentWeek, recentWeekName } = action;
  return {
    ...state,
    recentArray: {recentWeekInfo, recentWeek, recentWeekName}
  };
}

function applyUsersWithReports(state, action) {
  const { weeks } = action;
  return {
    ...state,
    searchedWeek: weeks
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
