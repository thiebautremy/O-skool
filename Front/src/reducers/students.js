import { 
    SAVE_INFOS_STUDENTS_TROMBI,
    SAVE_INFOS_STUDENTS_DETAIL,
    IS_SUCCESS
  } from '../actions/app';
  
  export const initialState = {
      students: [],
      student: [],
      isSuccess: false
    }
  const students = (state = initialState, action = {} ) => {
    switch(action.type) {
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
  