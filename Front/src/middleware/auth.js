import axios from 'axios';
import {
  HANDLE_SUBMIT,
  login
} from '../actions/auth';
import {fetchInfosStudentProfil, fetchInfosTeacherProfil } from '../actions/app';

const auth = (store) => (next) => (action) => {
  const state = store.getState();
  // const ROOT_URL = 'http://54.208.78.36/api';
  const ROOT_URL = 'https://127.0.0.1:8000/';
  switch(action.type) {
    // ---- Gestion de la soumission du formulaire de connexion ---- \\
    case HANDLE_SUBMIT : {

      // ---- 1ère requête qui génère le token ---- \\
      axios.post(`${ROOT_URL}api/user/login_check`, {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'access-control-allow-origin': 'https://127.0.0.1:8000',
          'access-control-allow-credentials': 'true',
          'origin': '*'
        },
        data: {
          email: state.auth.email,
          password: state.auth.password,
        }
      }).then(response => {
        console.log(response.data.response)
        if(response.data.response === 'password valid') {
          console.log(response.data.user[0].user_name)
          store.dispatch(login(response.data.user[0].user_name))
          localStorage.setItem('isLogged', true);
          localStorage.setItem('userName', response.data.user[0].user_name);
        }else {

        }
        // localStorage.setItem('token', response.data.token);    

      })
      .catch((error) => {
      if(error == 'Request failed with status code 500'){
        //TODO faire message d'erreur
        console.log("faire message d'erreur")
        }
      }) 
      break;
    }
    default: next(action);
  }
}
export default auth;
