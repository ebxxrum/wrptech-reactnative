import { SET_WEEKS, ADD_WEEKS } from './calendarActions';

const initalState = {
  data: [],
  page: 1,
  hasMoreData: true
}

const CalendarReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_WEEKS:
      return {
        data: [...action.weeks],
        page: action.page
      }
    case ADD_WEEKS:
      return {
        data: [...state.data, ...action.weeks],
        page: action.page
      }
    default:
      return state;
  }
}

export const getRecentWeek = state => state.calendars.data[0];

export const getCalendar = state => state.calendars.data;

export const getPage = state => state.calendars.page;

export default CalendarReducer;