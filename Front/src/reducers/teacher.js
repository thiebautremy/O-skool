import { 
    HANDLE_CHANGE,
    SAVE_TEACHER_INFOS,
    LOGOUT
  } from '../actions/auth';

import {
    MODIFICATION_TEACHER_PROFIL,
    SAVE_INFOS_TEACHER_TROMBI,
    DELETE_STUDENT,
    FETCH_INFOS_STUDENT_PROFIL,
    MODIFICATION_STUDENT_PROFIL,
    FETCH_INFOS_TEACHER_PROFIL,
} from  '../actions/app';
  
  export const initialState = {
    teachers: []
    };
  
  const teacher = (state = initialState, action = {}) => {
    switch (action.type) {
        case HANDLE_CHANGE:
            return {
              ...state,
              [action.name]: action.value,
            };
        case SAVE_TEACHER_INFOS:
            return {
                ...state,
                firstName: action.firstName,
                lastName: action.lastName,
                phone: action.mobile_phone,
            };
        case MODIFICATION_TEACHER_PROFIL:
            return {
              ...state,
              teacher: action.modifTeacher
            };
        case FETCH_INFOS_TEACHER_PROFIL:
            return {
              ...state,
              firstName: action.firstname,
              lastName: action.lastname,
              phone: action.mobile_phone,
            };
          case DELETE_STUDENT: 
            return {
              ...state, 
              teacher: action.deleteStudent
            };                                    
        case FETCH_INFOS_STUDENT_PROFIL: 
            return {
              ...state, 
              teacher: action.infosStudent
            };
        case MODIFICATION_STUDENT_PROFIL:
            return {
              ...state,
              teacher: action.modifStudent
            };         
        case LOGOUT:
            return {
                ...state,
                isLogged: false,
            }
        default:
            return state;
    }
  };
  
  export default teacher;
  