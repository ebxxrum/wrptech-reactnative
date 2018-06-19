import { AsyncStorage } from 'react-native';
import callApi from '../../redux/util/apiCaller';
import _getWeekName from '../../redux/util/getWeekName';

const SET_WEEK_REPORT = 'SET_WEEK_REPORT';

function setWeekReport(week, weekInfo) {
  return {
    type: SET_WEEK_REPORT,
    week,
    weekInfo,
  };
}

function getWeekReport(accessToken, weekInfo) {
  var id = weekInfo.id;

  return dispatch => {
    return callApi(`weeks/${id}`, accessToken)
    .then(json => {
      if (json) {
        dispatch(setWeekReport(json, weekInfo));
        return true;
      }
    });
  };
}

function createReport(accessToken, id, work, plan) {
  return dispatch => {
    return callApi(`weeks/${id}/reports`, accessToken, 'post', {work, plan})
    .then(json => {
      if (json) {
        // dispatch(getWeeks(accessToken, 1));
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
    case SET_WEEK_REPORT:
      return applyWeekReport(state, action);
    default:
      return state;
  }
}

function applyWeekReport(state, action) {
  const { week, weekInfo } = action;
  return {
    week: week,
    weekInfo: weekInfo,
  };
}

const actionCreators = {
  getWeekReport,
  createReport
};

export { actionCreators };
export default reducer;
