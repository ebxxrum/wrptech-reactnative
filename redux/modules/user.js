// Import
import { API_URL } from '../../constants';
import { AsyncStorage } from 'react-native';

// Actions
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const SETUSER = 'SETUSER';
const REGISTER = 'REGISTER';

// Action Creators
function setLogIn(accessToken) {
  return {
    type: LOGIN,
    accessToken
  };
}

function setUser(user) {
  return {
    type: SETUSER,
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
    return fetch(`${API_URL}/users/authenticate/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringfy({
        email,
        password
      })
    })
    .then(response => response.json())
    .then(json => {
      if(json.accessToken) {
        dispatch(setLogIn(json.accessToken));
        return true;
      } else {
        return false;
      }
    });
  };
}

function getProfile(accessToken) {
  return (dispatch, getState) {
    const { user: { accessToken }} = getState();
    fetch(`${API_URL}/users/me`, {
      headers: {
        Authorization: `JWT ${ accessToken }`
      },
      body: JSON.stringfy({
        accessToken
      })
    })
    .then(response => {
      if (response.status === 401) {
        dispatch(userActions.LOGOUT());
      } else {
        return response.json();
      }
    })
    .then(json => json);
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
      return applyLogin(state, action);
    case SETUSER:
      return applySetUser(state, action);
    case LOGOUT:
      return applyLogout(state, action);
    default:
      return state;
  }
}

// Reducer Functions
function applyLogin(state, action) {
  const { user } = action;
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
