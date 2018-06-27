// Import
import { AsyncStorage } from 'react-native';
import callApi from '../util/apiCaller';
import callAxios from '../util/apiAxios';

// Actions
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const SET_USER = 'SET_USER';

// Action Creators
function setLogIn(accessToken) {
  return {
    type: LOGIN,
    accessToken
  };
}

function setUser(user) {
  return {
    type: SET_USER,
    user
  };
}

function logout() {
  return {
    type: LOGOUT
  };
}

// API Action (Reducer)
// dispatch() to allow state to be updated
function login(email, password) {
  return dispatch => {
    return callApi(`users/authenticate`, null, 'post', {email, password})
    .then(json => {
      if (json) {
        dispatch(setLogIn(json.token));
        return true;
      } else {
        return false;
      }
    });
  };
}

function getProfile(accessToken) {
  return dispatch => {
    return callAxios(`users/me`, accessToken)
    .then(json => {
      dispatch(setUser(json));
    });
  };
}

// Initial State
const initialState = {
  isLoggedIn: false
};

// Reducer
// root reducer: actually passed as the first argument to createStore.
// the only part of the reducer logic that must have the (state, action) -> newState
function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return applyLogin(state, action);
    case SET_USER:
      return applySetUser(state, action);
    case LOGOUT:
      return applyLogout(state, action);
    default:
      return state;
  }
}

// Reducer Functions
// case fuction: to handle the update logic for a specific action.
function applyLogin(state, action) {
  const { accessToken } = action;
  return {
    ...state,
    isLoggedIn: true,
    accessToken
  };
}

function applySetUser(state, action) {
  const { user } = action;
  return {
    ...state,
    profile: user
  }
}

function applyLogout(state, action) {
  AsyncStorage.clear();
  return {
    ...state,
    isLoggedIn: false,
  }
}

// Export Action Creators
const actionCreators = {
  login,
  logout,
  getProfile,
};

export { actionCreators };

// Export Reducer
export default reducer;
