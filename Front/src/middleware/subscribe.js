import axios from 'axios';
import { 
  SUBSCRIBE_SUBMIT,
  isSuccess,
  changeModalVisibilitySubscribe,
  changeErrorMessageSubscribe
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
        console.log(response.data.status)
        if(response.data.status === 204){
          store.dispatch(changeErrorMessageSubscribe('Tous les champs doivent être remplis'))
          store.dispatch(changeModalVisibilitySubscribe(true))
        }
        if(response.data.status === 201){
          store.dispatch(isSuccess(true))
        }
      })
      .catch((error) => console.log(error)) 
      break;
    }
    default: next(action)
  } 
}
export default subscribe;
