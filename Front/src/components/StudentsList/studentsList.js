import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import {Card, Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Student from './student';
import './style.scss';
import { connect } from 'react-redux';
import { fetchInfosStudentsTrombi } from '../../actions/app'

const StudentsList = ({
  handleDeconnexion,
  fetchStudentsTrombi,
  students,
  isLogged
}) => {
  const handleOnDeconnexion = () => {
    handleDeconnexion();
  }
  useEffect(fetchStudentsTrombi, [])

return(
  
  <div className="studentsList">
      <header className="studentsList__header">
        <h1>Trombinoscope de la classe </h1>
        {/* <Dropdown text='Choisir' className="teacherProfil__dropdown">
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
      </Dropdown> */}
      
        <Link to="/formChildren">
          <Button> Ajouter un éléve</Button>
        </Link>
      
      
      </header>
      <section className="studentsList__list">
        {students && 
        <Card.Group stackable centered
        className="studentsList__list__cards">
          {students.map((stud) =>(
                  <Student
                    student={stud}
                    key={stud.id}
                  />
          ))}
        </Card.Group>}
      </section>
      {/* {!isLogged && <Redirect to="/" />} */}
    </div>
)};

StudentsList.propTypes = {
  student: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ),
};

const mapStateToProps = (state) => {
  return ({
          isLogged: state.auth.isLogged,
          students: state.students.students, 
  
      })
  }
  const mapDispatchToProps = (dispatch) => ({
      handleDeconnexion: () => {
          // dispatch(logOut());
        },
      fetchStudentsTrombi: () => {
          // je vais chercher et non enregistrer dans le store. 
          dispatch(fetchInfosStudentsTrombi())
      }
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);
