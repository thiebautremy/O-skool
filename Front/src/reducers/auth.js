import { 
  HANDLE_SUBMIT, 
  CHECK_IS_LOGGED__TEACHER,
  HANDLE_CHANGE,
  LOGOUT,
} from '../actions/auth';

export const initialState = {
    email: '',
    password: '',
    isTeacher: false,
    isParent: false,
    isLogged: false,
    id: '',
  }
const auth = (state = initialState, action = {} ) => {
  switch(action.type) {
    case HANDLE_SUBMIT: {
      const connexion = {
        email: action.email,
        password: action.password
      }
      return {
        ...state,
        connexion,
      }
    }
    case HANDLE_CHANGE: {
      return {
        ...state,
        [action.name]: action.value,
      }
    }
    case CHECK_IS_LOGGED__TEACHER: {
      return {
        ...state,
        isTeacher: true,
        isParent: false,
        isLogged: true,
        id: action.id,
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
