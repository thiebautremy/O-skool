import {
  SUBSCRIBE_SAVE,
  HANDLE_CHANGE_SUBSCRIBE,
  CHANGE_USERNAME,
  IS_SUCCESS,
  CHANGE_MODAL_VISIBILITY_SUBSCRIBE,
  CHANGE_ERROR_MESSAGE_SUBSCRIBE
} from '../actions/auth';

export const initialState = {
    user_name: '',
    email: "",
    password: "",
    isSuccessSubscribe: false,
    errorMessageSubscribe: '',
    modaleVisibilitySubscribe: false,
  }
const subscribe = (state = initialState, action = {} ) => {
  switch(action.type) {
    case CHANGE_MODAL_VISIBILITY_SUBSCRIBE:
      return {
        ...state,
        modaleVisibilitySubscribe: action.value
      }
    case CHANGE_ERROR_MESSAGE_SUBSCRIBE: 
    return {
      ...state,
      errorMessageSubscribe: action.value
    }
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
