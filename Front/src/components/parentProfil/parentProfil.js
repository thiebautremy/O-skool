import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import edit_profil from '../../assets/edit_profil.png';
import add from '../../assets/add_profil.png';
import LittleTeacherProfil from '../LittleTeacherProfil/littleTeacherProfil';

import './style.scss';

const ParentProfil = ({
  firstNameParent,
  lastNameParent,
  email,
  adressParent,
  cityParent,
  zipcodeParent,
  children,
  handleDeconnexion,
  isLogged,
}) => {
  const handleOnDeconnexion = () => {
    handleDeconnexion();
  }
  return (
    <div className="parentProfil">
      <Dropdown text='Choisir'>
        <Dropdown.Menu>
          <Link to="/boardParent">
            <Dropdown.Item text='Tableau de bord' />
          </Link>
          <Dropdown.Divider />
          <Dropdown.Item
            text='Se déconnecter'
            onClick={handleOnDeconnexion}
          />
        </Dropdown.Menu>
      </Dropdown>
      <article className="parentProfil__info">
        <h2>Parent</h2>
        <p><strong>Nom:</strong> <span>{firstNameParent}</span></p>
        <p><strong>Prenom:</strong> <span>{lastNameParent}</span></p>
        <p><strong>Email:</strong> <span>{email}</span></p>
        <p><strong>Adresse:</strong> <span>{adressParent}</span></p>
        <p><strong>Ville:</strong> <span>{cityParent}</span></p>
        <p><strong>Code postal:</strong> <span>{zipcodeParent}</span></p>
        <Link to='/parentForm'>
          <label htmlFor="profilParent">
            <img src={edit_profil} alt="editer profil" />
          </label>
        </Link>
      </article>
      <div className="parentProfil__addChild">
        <Link to='/formChildren'
          className="parentProfil__addChild__add">
          <img
            src={add}
            alt="addChildren"
            className="parentProfil__addChild__add__img"
          />
          <div className="parentProfil__addChild__add__subtitle">
            <h2>Ajouter un enfant</h2>
          </div>
        </Link>
      
      <div className="childrenProfil__info">
        {children.map((child) => (
          <article className="parentProfil__info"
           key={`${child.firstname}${child.lastname}`}>
            <h2>Enfant:  </h2>
            <p><strong>Prénom: </strong><span>{child.firstname}</span></p>
            <p><strong>Nom:</strong> <span>{child.lastname}</span></p>
            <p><strong>Santé:</strong> <span>{child.health}</span></p>
            <p><strong>Loisirs:</strong> <span>{child.hobbies}</span></p>
            <Link to='/formChildren'>
              <label htmlFor="profilStudent">
                <img src={edit_profil} alt="editer profil" />
              </label>
            </Link>
          </article>
        ))
        }
      </div>
      </div>
      <LittleTeacherProfil />
      {!isLogged && <Redirect to="/" />}
    </div>
  );
}
ParentProfil.propTypes = {
  firstNameParent: PropTypes.string.isRequired,
  lastNameParent: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  adressParent: PropTypes.string.isRequired,
  cityParent: PropTypes.string.isRequired,
  zipcodeParent: PropTypes.any.isRequired,
  children: PropTypes.array.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default ParentProfil;
