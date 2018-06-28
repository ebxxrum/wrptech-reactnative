import { SET_WEEK_REPORT } from './weekReportActions';

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

export const getWeekReport = state => state.weeks.week;

export const getWeekInfo = state => state.weeks.weekInfo;

export default WeekReportReducer;