import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import portrait from '../../assets/portrait_logo.png'
// import Input from '../Input/input';

const TeacherForm = ({
  firstname,
  lastname,
  mobile_phone,
  handleChange,
  submitRegister
}) => {
  console.log('handleChange', handleChange)

  const handleOnChange = (event) => {
    console.log(event.target.value)
    const value = event.target.value;
    const name = event.target.type;
    handleChange(value, name);
  }

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    submitRegister();
  };

  return (
    <main className='teacherForm'>
      <div className="teacherForm">
        <h2 className="teacherForm__teacherForm__title">S'inscrire</h2>
        <form 
          className="teacherForm__teacherForm__form"
          onSubmit={handleOnSubmit}
          >
            <input 
              type='text'
              value={firstname}
              placeholder="Prénom"
              className="teacherForm__teacherForm__form__input"
              name={firstname}
              onChange={handleOnChange} 
              
            />
             <input 
              type='text'
              value={lastname}
              placeholder="Nom"
              className="teacherForm__teacherForm__form__input"
              name={lastname}
              onChange={handleOnChange} 
            />
            <input 
              type='tel'
              value={mobile_phone}
              placeholder="Numéro de téléphone"
              className="teacherForm__teacherForm__form__input"
              name={mobile_phone}
              onChange={handleOnChange} 
            />
            <label htmlFor="pictureTeacher">
            <img src={portrait} alt="portrait_logo" />
            Télécharger votre photo</label>
            <input 
              type="file"
              className="teacherForm__teacherForm__form__file"
              name="pictureTeacher"
              id="pictureTeacher"
            />
          <button
            type="submit"
            className="teacherForm__teacherForm__form__btn"

            >
            Soumettre mes informations
          </button>
        </form>
      </div>
    </main>
  )
};

TeacherForm.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  mobile_phone: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  submitRegister: PropTypes.func.isRequired,
};

export default TeacherForm;
