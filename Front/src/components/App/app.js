import React from 'react';
import './app.scss';
import Home from '../../containers/teacherProfil/teacherProfil';
import Login from '../../containers/Login/login';
import Subscribe from '../../containers/subscribe/subscribe';
import {Route} from 'react-router-dom';
import Footer from '../Footer/footer';
import Header from '../../containers/Headers/headers';
import NavBar from '../NavBar/NavBar';
import TeacherForm from '../../containers/TeacherForm/teacherForm';
import TeacherProfil from '../../containers/teacherProfil/teacherProfil';
import ParentForm from '../ParentForm/parentForm';
import ParentProfil from '../../containers/parentProfil/parentProfil';
import FormChildren from '../FormChildren/formChildren';
import StudentsList from '../StudentsList/studentsList';
import StudentDetail from '../StudentsList/studentDetail'
import BoardParent from '../../containers/boardParent/boardParent';
import LegalMentions from '../LegalMentions/legalmentions';
import Contact from '../Contact/contact';


import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
    
        <Route path="/" exact>
          <NavBar />
          <Home />
        </Route>

        <Route path="/login" exact>
          <NavBar />
          <Login />
        </Route>

        <Route path="/subscribe" exact>
          <NavBar />
          <Subscribe />
        </Route>

          {/* Route pour accèder au boardParent*/}
          {/* <Route path="/boardParent" exact>
            <Header />
            <BoardParent />
          </Route> */}
          <Route path="/boardParent" exact>
            <Header />
            <BoardParent />
          </Route>


        {/* Route pour accèder au formulaire d'inscription parent */}
        <Route path="/parentForm" exact>
          <Header />
          <ParentForm />
        </Route>

        {/* Route pour accèder au profil du parent */}
        <Route path="/parentProfil" exact>
          <Header />
          <ParentProfil />
        </Route>

        {/* Route pour accèder au formulaire d'inscription teacher */}
        <Route path="/teacherForm" exact>
          <Header />
          <TeacherForm />
        </Route>

        {/* Route pour accèder au profil du teacher  */}
        <Route path="/teacherProfil" exact>
          <Header />
          <TeacherProfil />
        </Route>

        {/* Route pour accèder au formulaire d'ajout d'enfant  */}
            <Route path="/formChildren" exact>
              <Header />
            <FormChildren />
          </Route>

        {/* Route pour accèder à la liste des éléves  */}
        <Route path="/studentsList" exact>
          <Header />
          <StudentsList />
        </Route>
        {/* <Route
            exact
            path="/studentDetail/edit/:slug"
            render={
              ({ match }) => {
                return (
                  <Page>
                    <StudentDetail slug={match.params.slug} />
                  </Page>
                );
              }
            }
          /> */}
        {/* Route pour accèder au profil d'un éléve'  */}
        <Route path="/studentDetail/edit/:id" exact>
          <Header />
          <StudentDetail />
        </Route>

        {/* Route pour accèder au mentions légales  */}
        <Route path="/legalMentions" exact>
        <NavBar />
          <LegalMentions />
        </Route>
        {/* Route pour accèder à contact  */}
        <Route path="/contact" exact>
          <NavBar />
            <Contact />
        </Route>

      <Footer />  
    </div>    
  );
}

export default App;
