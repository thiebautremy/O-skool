// ACTIONS TYPE 

// SUBSCRIBE 
export const HANDLE_CHANGE_SUBSCRIBE = 'HANDLE_CHANGE_SUBSCRIBE'; //ok 
export const HANDLE_CHANGE_AUTH = 'HANDLE_CHANGE_AUTH'
export const SUBSCRIBE_SUBMIT = 'SUBSCRIBE_SUBMIT'; // ok
export const SUBSCRIBE_SAVE = 'SUBSCRIBE_SAVE'; //ok 
export const IS_SUCCESS = 'IS_SUCCESS';
export const CHANGE_USERNAME = 'CHANGE_USERNAME'

//logout 
export const LOGOUT = 'LOGOUT';
export const LOGIN = 'LOGIN';

//login
export const SAVE_PARENT_INFOS = 'SAVE_PARENT_INFOS';
export const SAVE_TEACHER_INFOS = 'SAVE_TEACHER_INFOS';


export const HANDLE_SUBMIT = 'HANDLE_SUBMIT';
// ACTIONS CREATOR

export const login = (value) => ({
  type: LOGIN,
  value
})
// changer un inputValue
export const handleChangeSubscribe = (value, name) => ({
    type: HANDLE_CHANGE_SUBSCRIBE,
    value,
    name,
  });

  export const handleChangeAuth = (value, name) => ({
    type: HANDLE_CHANGE_AUTH,
    value,
    name,
  });
// Changer username
export const changeUsername = (value) => ({
  type: 'CHANGE_USERNAME',
  value
})
// LOGIN 
export const handleSubmit = () => ({
    type: HANDLE_SUBMIT,
});

// SUBSCRIBE
//middleware
export const subscribeSave = (email, password, role) => ({
  type: SUBSCRIBE_SAVE,
  email,
  password, 
  role,
})
export const isSuccess = (value) => ({
  type: IS_SUCCESS,
  value
})
//container 
export const subscribeSubmit = () => ({ //yes
  type: SUBSCRIBE_SUBMIT,
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
