import { WEEK_REPORT } from './WeekActions';

const initalState = {};

const WeekReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_WEEK_REPORT:
      return {
        week: action.week,
        weekInfo: action.weekInfo,
        weekName: action.weekName,
        reportStatus: action.reportStatus
      };
    default:
      return state;
  }
};

export const getWeek = state => state.week.week;
export const getWeekInfo = state => state.week.weekInfo;
export const getWeekName = state => state.week.weekName;
export const getReportStatus = state => state.week.reportStatus;

export default WeekReducer;
