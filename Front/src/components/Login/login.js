import './style.scss';
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { isSuccess, handleChangeAuth, handleSubmit} from '../../actions/auth'
import { connect } from 'react-redux';
import ModalMessage from '../Modal/modal'
import { Redirect } from 'react-router-dom';

const Login = ({
  email,
  password,
  handleChange,
  handleOnSubmit,
  handleIsSuccess,
  isSuccessSubscribe,
  isLogged,
  errorModal,
  messageErrorModal
}) => {
  
  const handleOnClick = (event) => {
    event.preventDefault();
    if(emailIsValid){
      handleOnSubmit();
    }
  };
  const handleOnChange = (event) => {
    const value = event.target.value;
    const name = event.target.type;
    handleChange(value, name);
    if(name === 'email') {
      const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if(event.target.value.match(regexEmail))
            {
              setEmailIsValid(true)
            }
            else
            {
              setEmailIsValid(false)
            }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      handleIsSuccess(false)
    }, 5000)
  })
  const [emailIsValid, setEmailIsValid] = useState(false)
  return (
      <main className='login'>
      {isLogged && <Redirect to="/" />}
      {errorModal && 
          <ModalMessage 
            title={''}
            message= {messageErrorModal}
            confirmBtn= {false}
            handleYes={''}
            />
        }
        <div className="login__login">
          <h2 className="login__login__title">Se connecter</h2>
            {isSuccessSubscribe &&
              <ModalMessage 
                title={''}
                message={'Compte crée avec succès, vous pouvez maintenant vous connecter'}
                confirmBtn= {false}
                handleYes={''}
                />
            }
          <form 
            className="login__login__form"
            onSubmit={(evt) => handleOnClick(evt)}
            >
            <input
              type='email'
              value={email}
              placeholder="Email"
              className="login__login__form__input"
              onChange={handleOnChange}
              title={"L'email doit être de type email@email.com"}
              style={emailIsValid ? {backgroundColor: '#198754'} : {backgroundColor: '#DC3545'}}
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
      </main>
  );
};
  
    
Login.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired
};


const mapStateToProps = (state) => {
  return ({
          isLogged: state.auth.isLogged,
          isSuccessSubscribe: state.subscribe.isSuccessSubscribe,
          errorModal: state.auth.errorModal,
          messageErrorModal: state.auth.messageErrorModal
      })
  }
  const mapDispatchToProps = (dispatch) => ({
      handleIsSuccess: (value) => {
        dispatch(isSuccess(value))
      },
      handleChange: (value, name) => {
        dispatch(handleChangeAuth(value, name))
      },
      handleOnSubmit: () => {
        dispatch(handleSubmit())
      }
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);
