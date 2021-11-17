import React from 'react';
import {Link} from 'react-router-dom';
import { Image, Menu } from 'semantic-ui-react';
import './style.scss';
import oskool from '../../assets/Logo.webp';
import { connect } from 'react-redux';
import { logOut } from '../../actions/auth';

const Header = ({userName, handleLogOut}) => (
    <header className="header">
      <Image src={oskool} className="header__image" alt="logo"/>
      <div className="header__nav">
        <h1 className="header__title">Bonjour <strong>{userName}</strong></h1>
        <Link to="/studentsList">
            <Menu.Item
                content="Liste des étudiants"
          />
        </Link>
        <Link to="#">
            <Menu.Item
                content="Déconnexion"
                // active={activeItem === 'messages'}
                onClick={handleLogOut}
          />
        </Link>
      </div>
    </header>
);

const mapStateToProps = (state) => ({
  userName: state.auth.userName
});

const mapDispatchToProps = (dispatch) => ({
  handleLogOut: () => {
    dispatch(logOut())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
