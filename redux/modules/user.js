// Import
import { API_URL } from '../../constants';
import { AsyncStorage } from 'react-native';

// Actions
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const SET_USER = 'SET_USER';
const REGISTER = 'REGISTER';

// Action Creators
function setLogIn(accessToken) {
  console.log("setLogin");
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
  console.log("function login");
  return dispatch => {
    return fetch(`${API_URL}/users/authenticate/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    .then(response => response.json())
    .then(json => {
      if(json.token) {
        console.log("working");
        console.log(json);
        dispatch(setLogIn(json.token));
        return true;
      } else {
        console.log("error");
        console.log(json);
        return false;
      }
    });
  };
}

function getProfile(accessToken) {
  console.log("getProfile");
  return dispatch => {
    return fetch(`${API_URL}/users/me?access_token=`+ accessToken)
    .then(response => response.json())
    .then(json => {
      if(json) {
        console.log("working");
        console.log(json);
        dispatch(setUser(json));
      }
      return {
        name: json.name
      }
    });
  };
}

// Initial State
const initialState = {
  isLoggedIn: false
};

// Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      console.log("reducer login");
      console.log(state, action);
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
function applyLogin(state, action) {
  const { accessToken } = action;
  console.log("applyLogin");
  console.log(state, action);
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
    accessToken: ''
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
