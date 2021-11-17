import React, {useEffect} from 'react';
import { Card, Image, Icon, Menu } from 'semantic-ui-react';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';
import elvis from '../../assets/elvis.png';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchInfosStudentsDetail } from '../../actions/app'


const StudentDetail = (
props
) => {
const { id } = useParams();
useEffect(() =>{
  if(id !== 'undefined'){

    props.fetchStudentDetail(id)
  }
}, [id])
console.log(props)
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
          inline
        />
          <Card.Content>
            {props.student.first_name &&
              <Card.Header className="studentsList__list__card__header">
                  {props.student.first_name.toUpperCase()} {props.student.last_name.toUpperCase()}
                <Icon 
                  name="trash alternate"
                  onClick={() => console.log('click sur delete')}
                  />
              </Card.Header>}
                  <Card.Meta>
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
                      <p className ="card_class">{props.student.class && props.student.class}</p>
                    </Card.Description>
                    <Card.Description>
                      <Icon name='info'/>
                      <p>{props.student.random === "" ? 'Rien à signaler': props.student.random}</p>
                    </Card.Description>
                  </Card.Meta>
                </Card.Content>
          </Card>
        }
        {!props.isLogged && <Redirect to="/" />}
    </div>
);
}

const mapStateToProps = (state) => {
return ({
        isLogged: state.auth.isLogged,
        student: state.students.student
    })
}
const mapDispatchToProps = (dispatch) => ({
    handleDeconnexion: () => {
      },
    fetchStudentDetail: (value) => { 
        dispatch(fetchInfosStudentsDetail(value))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(StudentDetail);
