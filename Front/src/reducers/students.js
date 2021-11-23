import { 
    SAVE_INFOS_STUDENTS_TROMBI,
    SAVE_INFOS_STUDENTS_DETAIL,
    IS_SUCCESS,
    CHANGE_ERROR_MESSAGE,
    CHANGE_ERROR_MESSAGE_VISIBILITY,
    CHANGE_CONFIRM_DELETE_MODAL,
    CHANGE_SUCCESS_DELETE
  } from '../actions/app';
  
  export const initialState = {
      students: [],
      student: [],
      isSuccess: true,
      errorMessage: '',
      errorMessageVisibility: false,
      confirmDeleteModal: false,
      successDelete: false,
    }
  const students = (state = initialState, action = {} ) => {
    switch(action.type) {
      case CHANGE_SUCCESS_DELETE:
        return {
          ...state,
          successDelete: action.value
        }
      case CHANGE_CONFIRM_DELETE_MODAL:
        return {
          ...state,
          confirmDeleteModal: action.value
        }
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
  