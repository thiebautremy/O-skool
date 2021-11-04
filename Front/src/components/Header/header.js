import React from 'react';
import { Image } from 'semantic-ui-react';
import './style.scss';
import oskool from '../../assets/Logo.webp';

const Header = ({firstNameTeacher, firstNameParent, isTeacher}) => (
    <header className="header">
      <Image src={oskool} className="header__image" alt="logo"/>
      <div>
        <h1 className="header__title">Bonjour {isTeacher ? firstNameTeacher: firstNameParent}</h1>
      </div>
    </header>
);

export default Header;
