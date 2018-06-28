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

export function setUser(user) {
  return {
    type: SET_USER,
    user
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
    return callApi(`users/authenticate`, null, 'post', {email, password})
    .then(json => {
      if (json) {
        axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
        axios.defaults.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE';
        axios.defaults.headers['Access-Control-Allow-Headers'] = 'Authorization';
        axios.defaults.headers['Authorization'] = `Bearer ${json.token}`

        dispatch(setLogIn(json.token));
        return true;
      } else {
        return false;
      }
    });
  };
}

export function getProfile(accessToken) {
  return dispatch => {
    return callAxios(`users/me`, accessToken)
    .then(json => {
      dispatch(setUser(json));
    });
  };
}