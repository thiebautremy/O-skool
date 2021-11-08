// ACTIONS TYPE 

// SUBSCRIBE 
export const HANDLE_CHANGE = 'HANDLE_CHANGE'; //ok 
export const SUBSCRIBE_SUBMIT = 'SUBSCRIBE_SUBMIT'; // ok
export const SUBSCRIBE_SAVE = 'SUBSCRIBE_SAVE'; //ok 
export const SUCESS = 'SUCESS';
export const CHANGE_USERNAME = 'CHANGE_USERNAME'

//logout 
export const LOGOUT = 'LOGOUT';

//login
export const SAVE_PARENT_INFOS = 'SAVE_PARENT_INFOS';
export const SAVE_TEACHER_INFOS = 'SAVE_TEACHER_INFOS';
export const CHECK_IS_LOGGED__PARENT = 'CHECK_IS_LOGGED__PARENT';
export const CHECK_IS_LOGGED__TEACHER = 'CHECK_IS_LOGGED__TEACHER';


export const HANDLE_SUBMIT = 'HANDLE_SUBMIT';
// ACTIONS CREATOR

// changer un inputValue
export const handleChange = (value, name) => ({
    type: HANDLE_CHANGE,
    value,
    name,
  });
// Changer username
export const changeUsername = (value) => ({
  type: 'CHANGE_USERNAME',
  value
})
// LOGIN 
export const handleSubmit = (email, password) => ({
    type: HANDLE_SUBMIT,
    email,
    password
});

// SUBSCRIBE
//middleware
export const subscribeSave = (email, password, role) => ({
  type: SUBSCRIBE_SAVE,
  email,
  password, 
  role,
})

//container 
export const subscribeSubmit = () => ({ //yes
  type: SUBSCRIBE_SUBMIT,
  })

export const successSubscribe = () => ({ //no
type: SUCESS,
})
// container
// export const subscribeSubmit = () => ({ //yes
//   type: SUBSCRIBE_SUBMIT,
//   })

// ---- DECONNECTER LA SESSION ---- \\
export const logOut= () => ({
    type: LOGOUT,
});

export const saveParentInfos = (firstname, lastName, number, text, adress, zipcode, city) => ({
    type: SAVE_PARENT_INFOS,
    firstname,
    lastName,
    number, 
    text,
    adress, 
    zipcode,
    city
  });
  
export const saveTeacherInfos = (findUser) => ({  
    type: SAVE_TEACHER_INFOS,
    firstName: findUser.firstname,
    lastName: findUser.lastname,
    mobile_phone: findUser.mobile_phone,
  });
// ---- GESTION CONNEXION EN TANT QUE PARENT ---- \\
export const checkIsLoggedParent = (id) => ({
  type: CHECK_IS_LOGGED__PARENT,
  id,
});

// ---- GESTION CONNEXION EN TANT QUE TEACHER ---- \\
export const checkIsLoggedTeacher = (id) => ({
    type: CHECK_IS_LOGGED__TEACHER,
    id,
  });
