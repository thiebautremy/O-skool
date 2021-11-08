import axios from 'axios';
import { ADD_CHILDREN, isSuccess } from '../actions/app';

const users = (store) => (next) => (action) => {
  const ROOT_URL = 'http://127.0.0.1:8000/';
  switch (action.type) {
    case ADD_CHILDREN: {
      console.log(`firstName: ${action.firstName}`)
      console.log(action.lastName)
      console.log(action.birthday)
      console.log(action.health)
      console.log(action.hobbies)
      axios.post(`${ROOT_URL}api/student/add`, {
          firstname: action.firstName,
          lastname: action.lastName,
          birthday: action.birthday,
          health: action.health,
          hobbies: action.hobbies,
        }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then(response => {
          console.log(response)
          if(response.status === 201){
            store.dispatch(isSuccess());
          } 
        })
        .catch((error) => console.log(error))
      break
    }
    default: next(action);
  }
}
export default users;
