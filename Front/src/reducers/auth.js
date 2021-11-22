import { 
  HANDLE_CHANGE_AUTH,
  LOGOUT,
  LOGIN,
  CHANGE_ERROR_MODAL,
  CHANGE_MESSAGE_ERROR_MODAL
} from '../actions/auth';

export const initialState = {
    email: 're@re.com',
    password: 're',
    isLogged: false,
    errorModal: false,
    messageErrorModal: '',
    userName: '',
  }
const auth = (state = initialState, action = {} ) => {
  switch(action.type) {
    case CHANGE_ERROR_MODAL: {
      return {
        ...state,
        errorModal: action.value
      }
    }
    case CHANGE_MESSAGE_ERROR_MODAL: {
      return {
        ...state,
        messageErrorModal: action.value
      }
    }
    case LOGIN: {
      return {
        ...state,
        isLogged: true,
        userName: action.value
      }
    }
    case HANDLE_CHANGE_AUTH: {
      return {
        ...state,
        [action.name]: action.value,
      }
    }
    case LOGOUT: {
      localStorage.setItem('isLogged', false)
      localStorage.setItem('userName', '')
      return {
        ...state,
        email: '',
        password: '',
        isLogged: false,
        userName: '',
      }
    }
    default: 
      return state;
  }
}

export default auth;
