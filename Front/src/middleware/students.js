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
    const ROOT_URL = 'https://127.0.0.1:8000/';
    switch (action.type) {
        case FETCH_INFOS_STUDENTS_TROMBI: {
            axios.get(`${ROOT_URL}api/studentsList`, {
              headers: {
                "Accept": "application/json",
                'Access-Control-Allow-Origin': "*"
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
            console.log(action.id)
            axios.get(`${ROOT_URL}api/studentsList/${action.id}`,{
              headers: {
                // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
                "Accept": "application/json",
                'Access-Control-Allow-Origin': "*"
              },
              data: {
                student_id: action.id
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
              headers: {
                'Access-Control-Allow-Origin': "*",
                "Accept": "application/json"
              },
              data: {
                first_name: action.firstName,
                last_name: action.lastName,
                zip_code: action.zipCode,
                adress: action.adress,
                city: action.city,
                email: action.email,
                phone: action.phone,
                health: action.health,
                hobbies: action.hobbies,
                class: action.classAbr,
                random: action.random,
                birthday: action.birthday
              }
            })
              .then(response => {
                console.log(response.status)
                if(response.status === 200){
                  store.dispatch(isSuccess(true));
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
