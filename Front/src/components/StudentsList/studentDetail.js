import React, {useEffect} from 'react';
import { Card, Image, Icon, Menu } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import './style.scss';
import elvis from '../../assets/elvis.png';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchInfosStudentsDetail } from '../../actions/app'

const StudentDetail = (
props
) => {
const birthdayFormated = moment(props.student.birthday).format('DD/MM/YYYY');
const { id } = useParams();
useEffect(() =>{
    props.fetchStudentDetail(id)  
}, [id])
return (
  <div className="studentDetail">
    <Link to="/studentsList" onClick={props.fetchStudentDetail()}>
      <Menu.Item>
        <Icon name='angle left' /> 
          Retour à la liste des élèves
      </Menu.Item>
    </Link>
    {props.student.id &&
      <Card className="studentsList__list__card">
        <Image 
          src={elvis} 
          className="studentsList__list__card__picture"
          size="small"
          inline
        />
          <Card.Content>
            {props.student.firstName &&
              <Card.Header className="studentsList__list__card__header">
                  {props.student.firstName.toUpperCase()} {props.student.lastName.toUpperCase()}
              </Card.Header>}
                  <Card.Meta>
                    <Card.Description>
                      <Icon name='birthday cake'/>
                        <p>{props.student.birthday && birthdayFormated}</p>
                    </Card.Description>
                    <Card.Description>
                      <Icon name='home'/>
                      <div className='description__adress'>
                        <p>{props.student.adress && props.student.adress}</p>
                        <p>{props.student.zipCode && props.student.zipCode} {props.student.city && props.student.city}</p>
                      </div>
                    </Card.Description>
                    <Card.Description>
                      <Icon name='mail'/>
                      <p>{props.student.email && props.student.email}</p>
                    </Card.Description>
                    <Card.Description>
                      <Icon name='phone'/>
                      <p>{props.student.phone && props.student.phone}</p>
                    </Card.Description>
                    <Card.Description>
                      <Icon name='medkit'/>
                      <p>{props.student.health === "" ? 'Rien à signaler' : props.student.health}</p>
                    </Card.Description>
                    <Card.Description>
                      <Icon name='football ball'/>
                      <p>{props.student.hobbies === "" ? 'Rien à signaler': props.student.hobbies}</p>
                    </Card.Description>
                    <Card.Description>
                      <Icon name='sitemap'/>
                      <p>{props.student.class && props.student.class}</p>
                    </Card.Description>
                    <Card.Description>
                      <Icon name='info'/>
                      <p>{props.student.random === "" ? 'Rien à signaler': props.student.random}</p>
                    </Card.Description>
                  </Card.Meta>
                </Card.Content>
          </Card>
        }
    </div>
);
}

const mapStateToProps = (state) => {
return ({
        isLogged: state.auth.isLogged,
        student: state.students.student, 

    })
}
const mapDispatchToProps = (dispatch) => ({
    handleDeconnexion: () => {
        // dispatch(logOut());
      },
    fetchStudentDetail: (value) => {
        // je vais chercher et non enregistrer dans le store. 
        dispatch(fetchInfosStudentsDetail(value))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(StudentDetail);
