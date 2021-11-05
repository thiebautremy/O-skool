// ACTIONS TYPE 

// ------------

// fetchInfos Profils  
export const FETCH_INFOS_STUDENT_PROFIL = 'FETCH_INFOS_STUDENT_PROFIL';
export const FETCH_INFOS_TEACHER_PROFIL = 'FETCH_INFOS_TEACHER_PROFIL';
// modification profils
export const MODIFICATION_CHILDREN_PROFIL = 'MODIFICATION_CHILDREN_PROFIL';
export const MODIFICATION_STUDENT_PROFIL = 'MODIFICATION_STUDENT_PROFIL';
export const MODIFICATION_TEACHER_PROFIL = 'MODIFICATION_TEACHER_PROFIL';

export const DELETE_CHILDREN = 'DELETE_CHILDREN'; 
// formChildren
export const ADD_CHILDREN = 'ADD_CHILDREN';
export const IS_SUCCESS = 'IS_SUCCESS';


// fetch Infos Trombinoscope
export const FETCH_INFOS_STUDENTS_TROMBI = 'FETCH_INFOS_STUDENTS_TROMBI'; 
export const FETCH_INFOS_STUDENTS_DETAIL = 'FETCH_INFOS_STUDENTS_DETAIL'; 
export const DELETE_STUDENT = 'DELETE_STUDENT';
export const SAVE_INFOS_STUDENTS_TROMBI = 'SAVE_INFOS_STUDENTS_TROMBI';
export const SAVE_INFOS_STUDENTS_DETAIL = 'SAVE_INFOS_STUDENTS_DETAIL';



// ACTIONS CREATOR


export const fetchInfosTeacherProfil = (value) => ({
  type: FETCH_INFOS_TEACHER_PROFIL,
  teachers: value
});

export const fetchInfosStudentProfil = (children) => ({
  type: FETCH_INFOS_STUDENT_PROFIL,
  children,
});

// formChildren
export const addChildren = (firstName, lastName, adress,zipCode, city, email, phone, health, hobbies, classAbr, random) => ({
    type: ADD_CHILDREN,
    firstName, 
    lastName, 
    adress,
    zipCode, 
    city, 
    email, 
    phone, 
    health, 
    hobbies, 
    classAbr, 
    random
});

export const isSuccess = (value) => ({
  type: IS_SUCCESS,
  value
})

// modification profils

export const ModificationChildrenProfil = (childrenInfosValue) => ({
  type: MODIFICATION_CHILDREN_PROFIL,
  childrenInfosValue,
});

export const ModificationTeacherProfil = (modifTeacherProfil) => ({
  type: MODIFICATION_TEACHER_PROFIL,
  modifTeacherProfil,
});

// board teacher
export const ModificationStudentProfil = (modifStudentProfil) => ({
  type: MODIFICATION_STUDENT_PROFIL,
  modifStudentProfil,
});


export const deleteChildren = (id) => ({
  type: DELETE_CHILDREN,
  id,
});

// fetch Infos Trombinoscope
export const saveInfosStudentsTrombi = (value) => ({
  type: SAVE_INFOS_STUDENTS_TROMBI,
  value
});
export const saveInfosStudentsDetail = (value) => ({
  type: SAVE_INFOS_STUDENTS_DETAIL,
  value
});
export const fetchInfosStudentsTrombi = () => ({
  type: FETCH_INFOS_STUDENTS_TROMBI,
});

export const fetchInfosStudentsDetail = (id) => ({
  type: FETCH_INFOS_STUDENTS_DETAIL,
  id
});

export const deleteStudent = (deleteStudent) => ({
  type: DELETE_STUDENT,
  deleteStudent,
});

