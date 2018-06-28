import { AsyncStorage } from 'react-native';
import { LOGIN, LOGOUT, SET_USER } from '../actions/UserActions';

// Initial State
export const initialState = { isLoggedIn: false };
  
// Reducer
// root reducer: actually passed as the first argument to createStore.
// the only part of the reducer logic that must have the (state, action) -> newState

// Reducer Functions
// case fuction: to handle the update logic for a specific action.
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        isLoggedIn: true, 
        accessToken: action.accessToken
      }
    case SET_USER:
      return {
        ...state,
        profile: action.user
      }
    case LOGOUT:
      AsyncStorage.clear();
      return {
        isLoggedIn: false
      }
    default:
      return state;
  }
}

export const getLoginStatus = state => state.users.isLoggedIn;

export const getAccessToken = state => state.users.accessToken;

export const getUser = state => state.users.profile;

// Export Reducer
export default UserReducer;