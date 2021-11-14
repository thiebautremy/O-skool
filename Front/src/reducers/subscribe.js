import {
  SUBSCRIBE_SAVE,
  HANDLE_CHANGE_SUBSCRIBE,
  CHANGE_USERNAME,
  IS_SUCCESS
} from '../actions/auth';

export const initialState = {
    user_name: '',
    email: "",
    password: "",
    isSuccessSubscribe: false
  }
const subscribe = (state = initialState, action = {} ) => {
  switch(action.type) {
    case IS_SUCCESS:
        return {
          ...state,
          isSuccessSubscribe: action.value
        }
    case CHANGE_USERNAME:
      return {
        ...state,
        user_name: action.value
      }
    case HANDLE_CHANGE_SUBSCRIBE: 
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
