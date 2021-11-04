import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
// import Input from '../Input/input';

import './style.scss';

const Subscribe = ({
  email,
  password,
  role,
  success, 
  handleChange, 
  submitRegister,
  handleChangeCheckBox
}) => {
  const handleOnChange = (event) => {
    const value = event.target.value;
    const name = event.target.type;
    handleChange(value, name);
  }
 const handleOnSubmit = (evt) => {
    evt.preventDefault();
    submitRegister()
  };
  return (
        <main className='subscribe'>
          <div className="subscribe">
            <h2 className="subscribe__subscribe__title">S'inscrire</h2>
            <form 
              className="subscribe__subscribe__form"
              onSubmit={handleOnSubmit}
              >
                <input 
                  type='email'
                  value={email}
                  placeholder="Entrer votre e-mail"
                  className="subscribe__subscribe__form__input"
                  name={email}
                  onChange={handleOnChange} 
                />
                 <input 
                  type='password'
                  value={password}
                  placeholder="Mot de passe"
                  className="subscribe__subscribe__form__input"
                  name={password}
                  onChange={handleOnChange} 
                />
              <div className="subscribe__subscribe__form__radio">
                <div className="subscribe__subscribe__form__radio__input">
                  <input 
                    type="radio" 
                    value="Parent"
                    name="role"
                    // target = name ; value = value 
                    onChange={(evt) => handleChangeCheckBox(evt.target.value, evt.target.name)}
                  />
                    Parent 
                </div> 
                <div className="subscribe__subscribe__form__radio__input">
                  <input 
                    type="radio" 
                    value="Teacher"
                    name="role"
                    onChange={(evt) => handleChangeCheckBox(evt.target.value, evt.target.name)}
                    />
                    Enseignant
                </div>
              </div>
              <button
                type="submit"
                className="subscribe__subscribe__form__btn"
                >
                S'inscrire
              </button>
              {(success && role === "Parent" && <Redirect to="/parentForm" />)}
              {(success && role === "Teacher" && <Redirect to="/teacherForm" />)}
            </form> 
          </div>
        </main>
  );
}
Subscribe.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  role: PropTypes.bool.isRequired, 
  handleChangeCheckBox: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  submitRegister: PropTypes.func.isRequired,
};

export default Subscribe;
