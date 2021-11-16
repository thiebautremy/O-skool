import React from 'react';
import {Icon} from 'semantic-ui-react';
import ordi_trombi from '../../assets/ordi_trombi.webp';
import ordi_parent from '../../assets/ordi_parent.webp';
import './style.scss';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';


const Home = ({handleIsSuccess, isSuccessSubscribe}) => {
  // console.log(handleGetTeacherTrombi)
  
return (
      <div className='home'>
      {!localStorage.getItem('isLogged') && <Redirect to="/" />}
        <main className="home__main">
        <div id="corner"></div>
          <section>
            <div className="home__main__section">
              <img src={ordi_trombi} alt="ordinateur" className="home__main__section__image"/>
              <div className="home__main__section__info">
                <h2 className="home__main__title">VOUS ETES PROFESSEUR</h2>
                  <div className="home__main__section__text">
                    <p><Icon name="check square"/>Retrouver les informations de tous vos élèves</p>
                    <p><Icon name="check square"/>Ajouter des évènements scolaires consultables par les parents d'élèves</p>
                    <p><Icon name="check square"/>Communiquer directement avec les parents</p>
                  </div>
              </div>
            </div>
          </section>
          <section>
            <div className="home__main__section">
              <div className="home__main__section__info">
                <h2 className="home__main__title">VOUS ETES PARENT</h2>
                  <div className="home__main__section__text">
                    <p><Icon name="check square"/>Ajouter les informations importantes concernant votre enfant</p>
                    <p><Icon name="check square"/>Retrouver les informations de l'enseignant de votre enfant et communiquer directement avec lui</p>
                    <p><Icon name="check square"/>Retrouver les sorties scolaires et les modalités de ces dernières dans votre espace personnel</p>
                  </div>
              </div>
              <img src={ordi_parent} alt="" className="home__main__section__image"/>
            </div>
          </section>
          
        </main>
      </div>
  );
}

const mapStateToProps = (state) => {
  return ({
          isLogged: state.auth.isLogged,
          isSuccessSubscribe: state.auth.isSuccessSubscribe
  
      })
  }
  const mapDispatchToProps = (dispatch) => ({
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);
