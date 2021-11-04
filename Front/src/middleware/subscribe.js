import axios from 'axios';
import { 
  SUBSCRIBE_SUBMIT, 
  SUBSCRIBE_SAVE_TEACHER, 
  subscribeSave, 
  subscribeSaveTeacher
} from '../actions/auth';

const subscribe = (store) => (next) => (action) => {
  const state = store.getState()
  // const ROOT_URL = 'http://54.208.78.36/';
  const ROOT_URL = 'http://127.0.0.1:8000/';
  switch(action.type) {
    case SUBSCRIBE_SUBMIT : {
      console.log('test first subscribe')
      
      axios.post(`${ROOT_URL}api/login/add`, {
        email: state.subscribe.email,
        password: state.subscribe.password,
      })  
      .then(response => {
        console.log(response.data)
        console.log('state middleware 1');
        store.dispatch(subscribeSave(state.subscribe.email, state.subscribe.email, state.subscribe.role))
      })
      .catch((error) => console.log(error)) 
      break;
    }
    case SUBSCRIBE_SAVE_TEACHER : {
      console.log('test subscribe teacher')
      axios.post(`${ROOT_URL}api/parent/add`, {
        firstname: state.subscribe.firstname,
        lastname: state.subscribe.lastname,
        mobile_phone: state.subscribe.mobile_phone,
      })
      .then(response => {
        console.log('subscribe teacher response', response.data)
        console.log('state middleware teacher');
        store.dispatch(subscribeSaveTeacher(state.subscribe.firstname, state.subscribe.lastname, state.subscribe.mobile_phone))
      })
      .catch((error) => console.log(error))
      break;
    }

    default: next(action)
  } 
}
export default subscribe;
