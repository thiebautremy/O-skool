import axios from 'axios';
import {
  HANDLE_SUBMIT,
  checkIsLoggedTeacher,
} from '../actions/auth';
import {fetchInfosStudentProfil, fetchInfosTeacherProfil } from '../actions/app';

const auth = (store) => (next) => (action) => {
  const state = store.getState();
  // const ROOT_URL = 'http://54.208.78.36/api';
  const ROOT_URL = 'http://127.0.0.1:8000';
  switch(action.type) {
    // ---- Gestion de la soumission du formulaire de connexion ---- \\
    case HANDLE_SUBMIT : {

      // ---- 1ère requête qui génère le token ---- \\
      axios.post(`${ROOT_URL}/login_check`, {  
        username: state.auth.email.trim(),
        password: state.auth.password.trim(),
      })
      .then(response => {
        localStorage.setItem('token', response.data.token);    

        // ---- 2ième requête qui récupère le rôle  ---- \\
        axios.get(`${ROOT_URL}/user/list`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(response => {
          const findUser = response.data.find(obj =>
            obj.email === state.auth.email);
            const id = findUser.id;
            if(findUser.teacher != null){
              store.dispatch(fetchInfosTeacherProfil(findUser.teacher));
              store.dispatch(checkIsLoggedTeacher(id));
            };
            if(findUser.parent != null){
              const children = findUser.parent.students;
              store.dispatch(fetchInfosStudentProfil(children));
            };
          })
      })
      .catch((error) => console.log(error)) 
      break;
    }
    default: next(action);
  }
}
export default auth;
