import { 
  HANDLE_SUBMIT, 
  HANDLE_CHANGE_AUTH,
  LOGOUT,
} from '../actions/auth';

export const initialState = {
    email: '',
    password: '',
    isLogged: false,
    id: '',
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
    case HANDLE_CHANGE_AUTH: {
      return {
        ...state,
        [action.name]: action.value,
      }
    }
    case LOGOUT: {
      return {
        ...state,
        email: '',
        password: '',
        isTeacher: false,
        isParent: false,
        isLogged: false,
        id: '',
      }
    }
    default: 
      return state;
  }
}

export default auth;
