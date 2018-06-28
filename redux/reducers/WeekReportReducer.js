import { SET_WEEK_REPORT } from '../actions/WeekReportActions';

const initalState = {};

const WeekReportReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_WEEK_REPORT:
      return {
          week: action.week,
          weekInfo: action.weekInfo
      };
    default:
      return state;
  }
};

export const getReport = state => state.weekReport.week;

export const getWeekInfo = state => state.weekReport.weekInfo;

export default WeekReportReducer;