import axios from 'axios';
import { 
  SUBSCRIBE_SUBMIT,
  isSuccess
} from '../actions/auth';

const subscribe = (store) => (next) => (action) => {
  const state = store.getState()
  const ROOT_URL = 'https://127.0.0.1:8000/';
  switch(action.type) {
    case SUBSCRIBE_SUBMIT : {      
      axios.post(`${ROOT_URL}api/user/add`, {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'access-control-allow-origin': 'https://127.0.0.1:8000',
          'access-control-allow-credentials': 'true',
          'origin': '*'
        },
        data: {
          user_name: state.subscribe.user_name,
          email: state.subscribe.email,
          password: state.subscribe.password,
        }
      }).then(response => {
        console.log(response.status)
        console.log('state middleware 1');
        store.dispatch(isSuccess(true))
        // store.dispatch(subscribeSave(state.subscribe.email, state.subscribe.email, state.subscribe.role))
      })
      .catch((error) => console.log(error)) 
      break;
    }
    default: next(action)
  } 
}
export default subscribe;
