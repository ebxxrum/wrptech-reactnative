import { SET_WEEKS, ADD_WEEKS } from '../../redux/actions/CalendarActions';

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

export const getRecentWeek = state => state.calendar.data[0];

export const getCalendar = state => state.calendar.data;

export const getPage = state => state.calendar.page;

export default CalendarReducer;