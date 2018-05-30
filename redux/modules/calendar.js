import { AsyncStorage } from 'react-native';
import callApi from '../util/apiCaller';

const ADD_WEEKS = 'ADD_WEEKS';
const PER_PAGE = 5;

function addWeeks(weeks, page) {
  const currentPage = page + 1;

  return {
    type: ADD_WEEKS,
    page: currentPage,
    weeks
  }
}

export function fetchWeeks(accessToken, page = 1) {
  return dispatch => {
    return callApi(`weeks`, accessToken, 'get', page)
    .then(json => {
      dispatch(addWeeks(json, page));
    });
  };
}

const initalState = {
  data: [],
  page: 1,
  hasMoreData: true
}

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case ADD_WEEKS:
      return {
        data: [...state.data, ...action.weeks],
        page: action.page,
        hasMoreData: (action.weeks.length === PER_PAGE)
      };
    default:
      return state;
  }
}

export const getWeeks = state => state.weeks.data;

export const getPage = state => state.weeks.page;

export const getHasMoreData = state => state.weeks.hasMoreData;
