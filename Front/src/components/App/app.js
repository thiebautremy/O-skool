import React from 'react';
import './app.scss';
import Home from '../Home/home';
import Login from '../Login/login';
import Subscribe from '../Subscribe/subscribe';
import {Route} from 'react-router-dom';
import Footer from '../Footer/footer';
import NavBar from '../NavBar/NavBar';
import FormChildren from '../FormChildren/formChildren';
import StudentsList from '../StudentsList/studentsList';
import StudentDetail from '../StudentsList/studentDetail'
import LegalMentions from '../LegalMentions/legalmentions';
import Contact from '../Contact/contact';
import Header from '../Header/header';
import { connect } from 'react-redux';


import 'semantic-ui-css/semantic.min.css'

function App(props) {
  console.log(props.isLogged)
  return (
    <div className="App">
        <Route path="/" exact>
          {props.isLogged ? <Header /> : <NavBar /> }
          <Home />
        </Route>

        <Route path="/login" exact>
        {props.isLogged ? <Header /> : <NavBar /> }
          <Login />
        </Route>

        <Route path="/subscribe" exact>
        {props.isLogged ? <Header /> : <NavBar /> }
          <Subscribe />
        </Route>

        {/* Route pour accèder au formulaire d'ajout d'enfant  */}
            <Route path="/formChildren" exact>
            {props.isLogged ? <Header /> : <NavBar /> }
            <FormChildren />
          </Route>

        {/* Route pour accèder à la liste des éléves  */}
        <Route path="/studentsList" exact>
        {props.isLogged ? <Header /> : <NavBar /> }
          <StudentsList />
        </Route>
        {/* Route pour accèder au profil d'un éléve'  */}
        <Route path="/studentDetail/edit/:id" exact>
        {props.isLogged ? <Header /> : <NavBar /> }
          <StudentDetail />
        </Route>

        {/* Route pour accèder au mentions légales  */}
        <Route path="/legalMentions" exact>
        {props.isLogged ? <Header /> : <NavBar /> }
          <LegalMentions />
        </Route>
        {/* Route pour accèder à contact  */}
        <Route path="/contact" exact>
          {props.isLogged ? <Header /> : <NavBar /> }
            <Contact />
        </Route>
      <Footer />  
    </div>    
  );
}

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
