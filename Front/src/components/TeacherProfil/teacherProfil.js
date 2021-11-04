import React from 'react';
import {Dropdown} from 'semantic-ui-react';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

import edit_profil from '../../assets/edit_profil.png';

import './style.scss';

const TeacherProfil = ({
  handleDeconnexion,
  isLogged,
  firstName,
  lastName,
  email,
  phone,
}) => {
const handleOnDeconnexion = () => {
  handleDeconnexion();
}

return(
  <div className="teacherProfil">
    <Dropdown text='Choisir' className="teacherProfil__dropdown">
        <Dropdown.Menu>
          <Link to="/teacherProfil"><Dropdown.Item text='Mon profil' /></Link>
          <Dropdown.Divider />
          <Link to="/studentsList"><Dropdown.Item text='Trombinoscope' /></Link>
          <Dropdown.Divider />
          <Dropdown.Item 
            text='Se déconnecter'
            onClick={handleOnDeconnexion}
          />
        </Dropdown.Menu>
      </Dropdown>
    <article className="teacherProfil__info">
      <p><strong>Nom:</strong> <span>{firstName}</span></p>
      <p><strong>Prenom:</strong> <span>{lastName}</span></p>
      <p><strong>Mail:</strong> <span>{email}</span></p>
      <p><strong>Téléphone:</strong> <span>{phone}</span></p>
      <div className="teacherProfil__info__btn">
        <Link to='/teacherForm'>
          <label htmlFor="teacherProfil">
              <img src={edit_profil} alt="editer profil" />
          </label>
        </Link>
      </div>
    </article>
    {!isLogged && <Redirect to ="/"/>}
  </div>
)};

TeacherProfil.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
  isLogged: PropTypes.bool.isRequired,
  handleDeconnexion: PropTypes.func.isRequired,
}

export default TeacherProfil;
