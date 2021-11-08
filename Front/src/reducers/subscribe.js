import {
  SUBSCRIBE_SAVE,
  HANDLE_CHANGE,
  CHANGE_USERNAME
} from '../actions/auth';

export const initialState = {
    user_name: '',
    email: "",
    password: "",
  }
const subscribe = (state = initialState, action = {} ) => {
  switch(action.type) {
    case CHANGE_USERNAME:
      return {
        ...state,
        user_name: action.value
      }
    case HANDLE_CHANGE: 
      return {
        ...state, 
        [action.name]: action.value
      }
    case SUBSCRIBE_SAVE: 
        return {
          ...state, 
            email: action.email,
            password: action.password,
            role: action.role,
            success: true
        }
    default: 
      return state;
  }
}

export default subscribe;
