import { 
    SAVE_INFOS_STUDENTS_TROMBI,
    SAVE_INFOS_STUDENTS_DETAIL,
    IS_SUCCESS,
    CHANGE_ERROR_MESSAGE,
    CHANGE_ERROR_MESSAGE_VISIBILITY
  } from '../actions/app';
import { CHANGE_ERROR_MODAL } from '../actions/auth';
  
  export const initialState = {
      students: [],
      student: [],
      isSuccess: false,
      errorMessage: '',
      errorMessageVisibility: false
    }
  const students = (state = initialState, action = {} ) => {
    switch(action.type) {
      case CHANGE_ERROR_MESSAGE:
        return {
          ...state,
          errorMessage: action.value
        }
      case CHANGE_ERROR_MESSAGE_VISIBILITY:
        return {
          ...state,
          errorMessageVisibility: action.value
        }
      case IS_SUCCESS:
        return {
          ...state,
          isSuccess: action.value
        }
      case SAVE_INFOS_STUDENTS_TROMBI: 
        return {
          ...state, 
          students: action.value
        }
      
      case SAVE_INFOS_STUDENTS_DETAIL: 
        return {
          ...state, 
          student: action.value
        }
      
      default: 
        return state;
    }
  }
  
  export default students;
  