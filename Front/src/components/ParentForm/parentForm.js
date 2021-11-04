import React from 'react';
import PropTypes from 'prop-types';
import {Dropdown} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import portrait from '../../assets/portrait_logo.png';
import Input from '../Input/input';
import axios from 'axios';
import './style.scss';


const ParentForm = ({
  firstname,
  lastName,
  number, 
  text,
  adress, 
  zipcode,
  city,
}) => {
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    axios.post('url...')
  //     .then(response.data.map((data) => { <Login key={id.data} {...data} /> )
  //     .then(<Login />)
  }
  const handleOnDeconnexion = () => {
    // handleDeconnexion();
  }
  
  return (
    <main className='parentForm'>
      <div className="parentForm">
      <Dropdown text='Choisir'>
        <Dropdown.Menu>
          <Dropdown.Item text='Profil Enfant' />

 ;         <Dropdown.Divider />
          <Link to="/boardParent"><Dropdown.Item text='Tableau de bord Enfant' /></Link>
          <Dropdown.Divider />
          <Dropdown.Item 
            text='Se déconnecter'
            onClick={handleOnDeconnexion}
          />
        </Dropdown.Menu>
      </Dropdown>
        <h2 className="parentForm__parentForm__title">S'inscrire</h2>
        <form 
          className="parentForm__parentForm__form"
          onSubmit={handleOnSubmit}
          >
          <Input 
            type={text}
            value={firstname}
            placeholder="Prénom"
            className="parentForm__parentForm__form__input"
            name={firstname}
            onChange={handleOnChange} 
          />
           <Input 
            type={text}
            value={lastName}
            placeholder="Nom"
            className="parentForm__parentForm__form__input"
            name={lastName}
            onChange={handleOnChange} 
          />
          <Input 
            type={number}
            value={number}
            placeholder="Numéro de téléphone"
            className="parentForm__parentForm__form__input"
            name={number}
            onChange={handleOnChange} 
          />
          <Input 
            type={text}
            value={adress}
            placeholder="Adresse postale"
            className="parentForm__parentForm__form__input"
            name={adress}
            onChange={handleOnChange} 
          />
          <Input 
            type={number}
            value={zipcode}
            placeholder="Code postal"
            className="parentForm__parentForm__form__input"
            name={zipcode}
            onChange={handleOnChange} 
          />
          <Input 
            type={text}
            value={city}
            placeholder="Ville"
            className="parentForm__parentForm__form__input"
            name={city}
            onChange={handleOnChange} 
          />
          <label htmlFor="pictureTeacher">
          <img src={portrait} alt="portrait_logo" />
          Télécharger votre photo</label>
          <input 
            type="file"
            className="parentForm__parentForm__form__file"
            name="pictureStudent"
            id="pictureStudent"
          />
          <button
            type="submit"
            className="parentForm__parentForm__form__btn"
            >
            Soumettre mes informations
          </button>
      </form>
    </div>
  </main>    
  );
}
ParentForm.propTypes = {
  firstname: PropTypes.string,
  lastName: PropTypes.string,
  number: PropTypes.number,
  text: PropTypes.string,
  adress: PropTypes.string,
  zipcode: PropTypes.number,
  city: PropTypes.string,
};
export default ParentForm;
