import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

import './style.scss';

const Login = ({
  email,
  password,
  isTeacher,
  isParent,
  handleChange,
  handleOnSubmit,
}) => {
  const handleOnClick = (event) => {
    event.preventDefault();
    handleOnSubmit();
  };
  const handleOnChange = (event) => {
    const value = event.target.value;
    const name = event.target.type;
    handleChange(value, name);
  }
  return (
      <main className='login'>
        <div className="login__login">
          <h2 className="login__login__title">Se connecter</h2>
          <form 
            className="login__login__form"
            onSubmit={handleOnClick}
            >
            <input
              type='email'
              value={email}
              placeholder="Email"
              className="login__login__form__input"
              onChange={handleOnChange}
              />
            <input
              type="password"
              value={password}
              placeholder="Password"
              className="login__login__form__input"
              onChange={handleOnChange}
            />
            <button
              type="submit" 
              className="login__login__form__btn"
              >
                Se connecter
            </button>
          </form>
        </div>
        {isTeacher && <Redirect to ="/teacherProfil"/>}
        {isParent && <Redirect to ="/parentProfil"/>}
      </main>
  );
};
  
    
Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  isParent: PropTypes.bool,
  isTeacher: PropTypes.bool,
};


export default Login;
