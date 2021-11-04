import { 
    SAVE_INFOS_STUDENTS_TROMBI,
    SAVE_INFOS_STUDENTS_DETAIL
  } from '../actions/app';
  
  export const initialState = {
      students: [],
      student: []
    }
  const students = (state = initialState, action = {} ) => {
    switch(action.type) {
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
  