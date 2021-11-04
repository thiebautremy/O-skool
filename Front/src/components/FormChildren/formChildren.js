import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Dropdown, Input, Menu, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addChildren } from '../../actions/app';
import { logOut } from '../../actions/auth';

import './style.scss';

const FormChildren = ({
    handleOnSubmit, 
    handleDeconnexion, 
    isLogged,
    isSuccess,
}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [adress, setAdress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [health, setHealth] = useState('');
    const [hobbies, setHobbies] = useState('');
    const [classAbr, setClassAbr] = useState('');
    const [random, setRandom] = useState('');
    const [birthday, setBirthday] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        handleOnSubmit(firstName, lastName, adress, zipCode, city, email, phone, health, hobbies, classAbr, random, birthday);
    };
    const handleOnDeconnexion = () => {
         handleDeconnexion();
    }
    return (
        <main className='formChildren'>
        <Link to="/studentsList">
            <Menu.Item>
                <Icon name='angle left' /> 
                Retour à la liste des élèves
            </Menu.Item>
        </Link>
            {/* <Dropdown text='Choisir' className="Dropdown">
                <Dropdown.Menu>
                    <Link to="/parentProfil"><Dropdown.Item text='Profil Parent' /></Link>
                    <Dropdown.Divider />
                    <Dropdown.Item
                        text='Se déconnecter'
                        onClick={handleOnDeconnexion}
                    />
                </Dropdown.Menu>
            </Dropdown> */}
            <h2 className="formChildren__formChildren__title">Ajouter un enfant
                </h2>
            <div className="formChildren__formChildren">
                <div>
                    <form
                        className="formChildren__formChildren__form"
                        onSubmit={handleSubmit}
                    >
                        <fieldset className="fieldset_civilite">
                        <legend>Civilité</legend>
                            <Input
                                icon='user'
                                iconPosition='left'
                                type='text'
                                value={firstName}
                                placeholder="Prénom"
                                className="formChildren__formChildren__form__input"
                                name={firstName}
                                onChange={e => setFirstName(e.target.value)}
                            />
                            <Input
                                icon='user'
                                iconPosition='left'
                                type='text'
                                value={lastName}
                                placeholder="Nom"
                                className="formChildren__formChildren__form__input"
                                name={lastName}
                                onChange={e => setLastName(e.target.value)}
                            />
                        </fieldset>
                        <fieldset className="fieldset_adress">
                        <legend>Adresse</legend>
                            <Input
                                icon='home'
                                iconPosition='left'
                                type='text'
                                value={adress}
                                placeholder="Rue et numéro de rue"
                                className="formChildren__formChildren__form__input"
                                name={adress}
                                onChange={e => setAdress(e.target.value)}
                            />
                            <Input
                                icon='home'
                                iconPosition='left'
                                type='number'
                                value={zipCode}
                                placeholder="Code postal"
                                className="formChildren__formChildren__form__input"
                                name={zipCode}
                                onChange={e => setZipCode(e.target.value)}
                            />
                            <Input
                                icon='home'
                                iconPosition='left'
                                type='text'
                                value={city}
                                placeholder="Ville"
                                className="formChildren__formChildren__form__input"
                                name={city}
                                onChange={e => setCity(e.target.value)}
                            />
                        </fieldset>
                        <fieldset className="fieldset_contact">
                        <legend>Contact</legend>
                            <Input
                                icon='phone'
                                iconPosition='left'
                                type='tel'
                                value={phone}
                                placeholder="Téléphone"
                                className="formChildren__formChildren__form__input"
                                name={phone}
                                onChange={e => setPhone(e.target.value)}
                            />
                            <Input
                                icon='mail'
                                iconPosition='left'
                                type='email'
                                value={email}
                                placeholder="Email"
                                className="formChildren__formChildren__form__input"
                                name={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </fieldset>
                        <fieldset className="fieldset_divers">
                        <legend>Informations diverses</legend>
                            <Input
                                icon='medkit'
                                iconPosition='left'
                                type='text'
                                value={health}
                                placeholder="Problèmes de santé"
                                className="formChildren__formChildren__form__input"
                                name={health}
                                onChange={e => setHealth(e.target.value)}
                            />
                            <Input
                                icon='football ball'
                                iconPosition='left'
                                type='text'
                                value={hobbies}
                                placeholder="Loisirs"
                                className="formChildren__formChildren__form__input"
                                name={hobbies}
                                onChange={e => setHobbies(e.target.value)}
                            />
                            <Input
                                icon='sitemap'
                                iconPosition='left'
                                type='text'
                                value={classAbr}
                                placeholder="Classe"
                                className="formChildren__formChildren__form__input"
                                name={classAbr}
                                onChange={e => setClassAbr(e.target.value)}
                            />
                            <Input
                                icon='info'
                                iconPosition='left'
                                type='text'
                                value={random}
                                placeholder="Divers"
                                className="formChildren__formChildren__form__input"
                                name={random}
                                onChange={e => setRandom(e.target.value)}
                            />
                            <Input
                                icon='birthday cake'
                                iconPosition='left'
                                type='date'
                                value={birthday}
                                placeholder="Date de naissance"
                                className="formChildren__formChildren__form__input"
                                name={birthday}
                                onChange={e => setBirthday(e.target.value)}
                            />
                        </fieldset>
                        <button
                            type="submit"
                            className="formChildren__formChildren__form__btn"
                        >
                            Ajouter
                            </button>
                    </form>
                </div>
            </div>
            {/* {!isLogged && <Redirect to="/" />}            
            {isSuccess && <Redirect to="/parentProfil" />} */}
        </main>
    )
};

FormChildren.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired,
    handleDeconnexion: PropTypes.func.isRequired,
    isLogged: PropTypes.bool.isRequired,
    isSuccess: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
    // isSuccess: state.parent.isSuccess,
    // isLogged: state.auth.isLogged,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    handleOnSubmit: (firstName, lastName, adress,zipCode, city, email, phone, health, hobbies, classAbr, random, birthday) => {
      dispatch(addChildren(firstName, lastName, adress,zipCode, city, email, phone, health, hobbies, classAbr, random, birthday));
    },
    handleDeconnexion: () => {
      dispatch(logOut());
    }
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(FormChildren);
