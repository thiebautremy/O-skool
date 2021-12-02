import axios from 'axios';
import {  
    FETCH_INFOS_STUDENTS_TROMBI, 
    saveInfosStudentsTrombi,
    FETCH_INFOS_STUDENTS_DETAIL,
    saveInfosStudentsDetail,
    ADD_CHILDREN,
    isSuccess,
    changeErrorMessage,
    changeErrorMessageVisibility,
    DELETE_CHILDREN,
    changeSuccesDelete
   } from '../actions/app';

const students = (store) => (next) => (action) => {
    // const state =store.getState();
    const ROOT_URL = 'https://127.0.0.1:8000/';
    switch (action.type) {
        case FETCH_INFOS_STUDENTS_TROMBI: {
            axios.get(`${ROOT_URL}api/studentsList`, {
            })
            .then((response) => {
                store.dispatch(saveInfosStudentsTrombi(response.data))
            })
            .catch((error) => console.log(error))
            // })  
            break;
          }
          case FETCH_INFOS_STUDENTS_DETAIL: {  
            axios.get(`${ROOT_URL}api/studentsList/${action.id}`,{
              data: {
                student_id: action.id
              }
            })
            .then((response) => {
                store.dispatch(saveInfosStudentsDetail(response.data))
            })
            .catch((error) => console.log(error))
            // })  
            break;
          }
          case ADD_CHILDREN: {
            axios.post(`${ROOT_URL}api/student/add`, {
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
                if(response.status === 200){
                  store.dispatch(isSuccess(true))
                  store.dispatch(changeErrorMessageVisibility(false))
                  store.dispatch(changeErrorMessage(''))
                } 
              })
              .catch((error) => {
                if(error === 'Error: Request failed with status code 500'){
                  store.dispatch(changeErrorMessageVisibility(true))
                  store.dispatch(changeErrorMessage("Seul les champs 'Problème de santé', 'Loisirs' et 'Divers' peuvent être nuls"))
                }
              })
            break
          }
          case DELETE_CHILDREN: {
            axios.get(`${ROOT_URL}api/studentsList/delete/${action.id}`,{
              data: {
                student_id: action.id
              }
            })
            .then((response) => {
                store.dispatch(changeSuccesDelete(true))
            })
            .catch((error) => console.log(error))
            break
          }
        default:
            next(action);
    }
};

export default students;
