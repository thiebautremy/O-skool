import React, { useEffect } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Card, Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Student from './student';
import './style.scss';
import { connect } from 'react-redux';
import { fetchInfosStudentsTrombi, isSuccess, changeSuccesDelete } from '../../actions/app'
import ModalMessage from '../Modal/modal'

const StudentsList = ({
  fetchStudentsTrombi,
  handleIsSuccess,
  students,
  isSuccess,
  isLogged,
  handleChangeSuccessDelete
}) => {
  useEffect(() => {
    fetchStudentsTrombi()
    handleChangeSuccessDelete(false)
    setTimeout(() => {
      handleIsSuccess(false)
    }, 5000)
  }, [])

return(
  
  <div className="studentsList">
      <header className="studentsList__header">
        <h1>Trombinoscope de la classe </h1>      
        <Link to="/formChildren">
          <Button> Ajouter un éléve</Button>
        </Link>
      </header>
      <section className="studentsList__list">
        {isSuccess && 
          <ModalMessage 
            title={''}
            message={'Elève ajouté à la liste'}
            confirmBtn= {false}
            handleYes={''}
            />
        }
        {students && 
          <Card.Group stackable centered
          className="studentsList__list__cards">
            {students.map((stud) =>(
                    <Student
                      student={stud}
                      key={stud.id}
                    />
            ))}
          </Card.Group>
        }
      </section>
      {!isLogged && <Redirect to="/" />}
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
          isSuccess: state.students.isSuccess
  
      })
  }
const mapDispatchToProps = (dispatch) => ({
      fetchStudentsTrombi: () => {
          dispatch(fetchInfosStudentsTrombi())
      },
      handleIsSuccess: (value) => {
        dispatch(isSuccess(value))
      },
      handleChangeSuccessDelete: (value) => {
        dispatch(changeSuccesDelete(value))
      }
  })
  
export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);
