import {
  SUBSCRIBE_SAVE, 
  CHANGE_CHECKBOX,
  HANDLE_CHANGE,
  SUBSCRIBE_SAVE_TEACHER,
} from '../actions/auth';

export const initialState = {
  // subscribe 
     email: "",
     password: "",
     role: "Parent", // (role === true ? parent : teacher)
     success: false, 
  //  subscribe teacherForm
     firstname: "",
     lastname: "",
     mobile_phone: "", 
  }
const subscribe = (state = initialState, action = {} ) => {
  switch(action.type) {
    case CHANGE_CHECKBOX: 
      return {
        ...state,
        [action.target]: action.isChecked 
      }
    case HANDLE_CHANGE: 
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
    case SUBSCRIBE_SAVE_TEACHER: 
      return {
        ...state, 
        firstname: action.firstname,
        lastname: action.lastname,
        mobile_phone: action.mobile_phone,
      }
    default: 
      return state;
  }
}

export default subscribe;
