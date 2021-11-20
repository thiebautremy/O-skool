import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleChangeSubscribe, subscribeSubmit, changeUsername} from '../../actions/auth';
import ModalMessage from '../Modal/modal'
// import Input from '../Input/input';

import './style.scss';

const Subscribe = ({
  email,
  password,
  userName,
  role,
  success, 
  handleChange,
  handleChangeUsername,
  submitRegister,
  isSuccessSubscribe,
  errorMessageSubscribe,
  modaleVisibilitySubscribe
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
        {modaleVisibilitySubscribe && 
          <ModalMessage 
            title={''}
            message= {errorMessageSubscribe}
            confirmBtn= {false}
            handleYes={''}
            />
        }
          <div className="subscribe">
            <h2 className="subscribe__subscribe__title">S'inscrire</h2>
            <form 
              className="subscribe__subscribe__form"
              onSubmit={(evt) => handleOnSubmit(evt)}
              >
              <label>Nom d'utilisateur</label>
                <input 
                  type='userName'
                  value={userName}
                  placeholder="Entrer votre nom d'utilisateur"
                  className="subscribe__subscribe__form__input"
                  name={userName}
                  onChange={(e) => handleChangeUsername(e.target.value)} 
                />
              <label>Email</label>
                <input 
                  type='email'
                  value={email}
                  placeholder="Entrer votre e-mail"
                  className="subscribe__subscribe__form__input"
                  name={email}
                  onChange={handleOnChange} 
                />
              <label>Mot de passe</label>
                <input 
                  type='password'
                  value={password}
                  placeholder="Mot de passe"
                  className="subscribe__subscribe__form__input"
                  name={password}
                  onChange={handleOnChange} 
                />
              <button
                type="submit"
                className="subscribe__subscribe__form__btn"
                >
                S'inscrire
              </button>
              {(success && role === "Parent" && <Redirect to="/parentForm" />)}
            </form> 
          </div>
          {isSuccessSubscribe && <Redirect to="/login" />}
        </main>
  );
}
Subscribe.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  submitRegister: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userName: state.subscribe.user_name,
  email: state.subscribe.email,
  password: state.subscribe.password,
  isSuccessSubscribe: state.subscribe.isSuccessSubscribe,
  errorMessageSubscribe: state.subscribe.errorMessageSubscribe,
  modaleVisibilitySubscribe: state.subscribe.modaleVisibilitySubscribe
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (value, name) => {
    dispatch(handleChangeSubscribe(value, name))
  },
  submitRegister: () => {
    dispatch(subscribeSubmit());
  },
  handleChangeUsername: (value) => {
    dispatch(changeUsername(value))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Subscribe);
