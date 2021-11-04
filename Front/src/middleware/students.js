import axios from 'axios';
import {  
    FETCH_INFOS_STUDENTS_TROMBI, 
    saveInfosStudentsTrombi,
    FETCH_INFOS_STUDENTS_DETAIL,
    saveInfosStudentsDetail,
    ADD_CHILDREN,
    isSuccess
   } from '../actions/app';

const teacher = (store) => (next) => (action) => {
    // const state =store.getState();
    const ROOT_URL = 'https://localhost:8000/';
    switch (action.type) {
        case FETCH_INFOS_STUDENTS_TROMBI: {
            axios.get(`${ROOT_URL}api/studentsList`,{
              headers: {
                'Access-Control-Allow-Origin': "*",
                "Accept": "application/json"
                
              }
            })
            .then((response) => {
                console.log('response', response);
                store.dispatch(saveInfosStudentsTrombi(response.data))
                // console.log('state middleware', state);
            })
            .catch((error) => console.log(error))
            // })  
            break;
          }
          case FETCH_INFOS_STUDENTS_DETAIL: {  
            axios.get(`${ROOT_URL}api/studentsList/${action.id}`,{
              headers: {
                // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
                "Accept": "application/json",
                'Access-Control-Allow-Origin': "*"
              }
            })
            .then((response) => {
                console.log('response', response);
                store.dispatch(saveInfosStudentsDetail(response.data))
                // console.log('state middleware', state);
            })
            .catch((error) => console.log(error))
            // })  
            break;
          }
          case ADD_CHILDREN: {
            console.log(`firstName: ${action.firstName}`)
            axios.post(`${ROOT_URL}api/student/add`, {
                first_name: action.firstName,
                last_name: action.lastName,
                zip_code: action.zipCode,
                city: action.city,
                email: action.email,
                phone: action.phone,
                health: action.health,
                hobbies: action.hobbies,
                class: action.classAbr,
                random: action.random,
                birthday: action.birthday
              }, {
              headers: {
                'Accept': "*",
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
        default:
            next(action);
    }
};

export default teacher;
