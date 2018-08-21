import { LOGIN, LOGGED_IN, LOGOUT } from '../actions/profile-actions';
const userProfile = (state = {}, action) => {
    switch (action.type) {
      case LOGGED_IN:
        return {
            ...state,
            ...action.userProfile
          }
      case LOGOUT:
        return;
      
      case LOGIN:
      default:
        return state
    }
  }
  
  export default userProfile

