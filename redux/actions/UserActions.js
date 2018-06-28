import callApi from '../../utils/apiCaller';
import callAxios from '../../utils/apiAxios';
import axios from 'axios';

// Actions
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_USER = 'SET_USER';

// Action Creators
export function setLogIn(accessToken) {
  return {
    type: LOGIN,
    accessToken
  };
}

export function setUser(profile) {
  return {
    type: SET_USER,
    profile
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}

// API Action 
// dispatch() to allow state to be updated

// Export Action Creators
export function login(email, password) {
  return dispatch => {
    // TODO: use axios, and handle 401 error
    return callApi(`users/authenticate`, null, 'post', {email, password})
    .then(json => {
      // TODO: if use axios, can handdle error more easier
      switch(json) {
        case 'Not found User':
          return false;
        case 'Please check your password':
          return false;
        default: 
          dispatch(setLogIn(json.token));
          return true;
      }
    });
  };
}

export function getProfile(accessToken) {
  console.log("getProfile start");
  return dispatch => {
    return callAxios(`users/me`, accessToken)
    .then(json => {
      dispatch(setUser(json));
    });
  };
}