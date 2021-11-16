import { 
  HANDLE_SUBMIT, 
  HANDLE_CHANGE_AUTH,
  LOGOUT,
  LOGIN
} from '../actions/auth';

export const initialState = {
    email: '',
    password: '',
    isLogged: false,
    userName: '',
  }
const auth = (state = initialState, action = {} ) => {
  switch(action.type) {
    // case HANDLE_SUBMIT: {
    //   const connexion = {
    //     email: action.email,
    //     password: action.password
    //   }
    //   return {
    //     ...state,
    //     connexion,
    //   }
    // }
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
