import axios from 'axios';
import { 
  SUBSCRIBE_SUBMIT,
} from '../actions/auth';

const subscribe = (store) => (next) => (action) => {
  const state = store.getState()
  // const ROOT_URL = 'http://54.208.78.36/';
  const ROOT_URL = 'http://127.0.0.1:8000/';
  switch(action.type) {
    case SUBSCRIBE_SUBMIT : {
      console.log('test first subscribe')
      console.log(state.subscribe.user_name)
      console.log(state.subscribe.email)
      console.log(state.subscribe.password)
      
      axios.post(`${ROOT_URL}api/user/add`, {
        headers: {
          'Access-Control-Allow-Origin': "*",
          "Accept": "application/json",
          "Origin": '*'
        },
        data: {
          user_name: state.subscribe.user_name,
          email: state.subscribe.email,
          password: state.subscribe.password,
        }
      }).then(response => {
        console.log(response.status)
        console.log('state middleware 1');
        // store.dispatch(subscribeSave(state.subscribe.email, state.subscribe.email, state.subscribe.role))
      })
      .catch((error) => console.log(error)) 
      break;
    }
    default: next(action)
  } 
}
export default subscribe;
