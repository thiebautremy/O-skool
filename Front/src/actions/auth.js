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

//AUTH
export const CHANGE_ERROR_MODAL = 'CHANGE_ERROR_MODAL';
export const CHANGE_MESSAGE_ERROR_MODAL = 'CHANGE_MESSAGE_ERROR_MODAL';

export const HANDLE_SUBMIT = 'HANDLE_SUBMIT';
//Subscribe
export const CHANGE_ERROR_MESSAGE_SUBSCRIBE = 'CHANGE_ERROR_MESSAGE_SUBSCRIBE'
export const CHANGE_MODAL_VISIBILITY_SUBSCRIBE = 'CHANGE_MODAL_VISIBILITY_SUBSCRIBE'
// ACTIONS CREATOR

export const changeModalVisibilitySubscribe = (value)=> ({
  type: CHANGE_MODAL_VISIBILITY_SUBSCRIBE,
  value
})
export const changeErrorMessageSubscribe = (value)=> ({
  type: CHANGE_ERROR_MESSAGE_SUBSCRIBE,
  value
})
export const changeMessageErrorModal = (value) => ({
  type: CHANGE_MESSAGE_ERROR_MODAL,
  value
})
export const changeErrorModal = (value) => ({
  type: CHANGE_ERROR_MODAL,
  value
})
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
