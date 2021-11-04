import React from 'react';
import {Link} from 'react-router-dom';
import { Image, Menu } from 'semantic-ui-react';
import oskool from '../../assets/Logo.webp';
import './style.scss';

const NavBar = () => (
  
  <div className='NavBar'>
    <header className="NavBar__header">
      <Image src={oskool} className="NavBar__header__image" />
        <Menu secondary className="nav">
        <Link to="/">
          <Menu.Item
              name='Accueil'
              // active={activeItem === 'accueil'}
              // onClick={this.handleItemClick}
            />
        </Link>
        <Link to="/login">
            <Menu.Item
                  name='Se connecter'
                  // active={activeItem === 'messages'}
                  // onClick={this.handleItemClick}
            />
        </Link>
        <Link to="/subscribe">
            <Menu.Item
                  content="S'inscrire"
                  // active={activeItem === 'messages'}
                  // onClick={this.handleItemClick}
            />
        </Link>
      </Menu>
    </header>
  </div>
);
export default NavBar;
