import axios from 'axios';
import {  FETCH_INFOS_STUDENTS_TROMBI, 
    saveInfosStudentsTrombi } from '../actions/app';

const teacher = (store) => (next) => (action) => {
    // const state =store.getState();
    const ROOT_URL = 'http://127.0.0.1:8000/';
    switch (action.type) {
        case FETCH_INFOS_STUDENTS_TROMBI: {     
            axios.get(`${ROOT_URL}api/students`,{
              headers: {
                // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
                "accept": "application/json"
              }
            })
            .then((response) => {
                console.log('response', JSON.stringify(response));
                store.dispatch(saveInfosStudentsTrombi(response.data))
                // console.log('state middleware', state);
            })
            .catch((error) => console.log(error))
            // })  
            break;
          }
       
        default:
            next(action);
    }
};

export default teacher;
