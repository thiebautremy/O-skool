import React from 'react';
import { Card, Image} from 'semantic-ui-react';
import './style.scss';
import elvis from '../../assets/elvis.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Student = (
  props
) => {
  // const birthdayFormated = moment(birthday).format('DD/MM/YYYY');
  return (
    
      <Card className="studentsList__list__card"> 
        <Link 
          to={{
              pathname: `/studentDetail/edit/${props.student.id}`
          }}
        >
            <Image src={elvis} className="studentsList__list__card__picture" size="small"
              inline
            />
            <Card.Content>
              <Card.Header className="studentsList__list__card__header">
                {props.student.first_name.toUpperCase()} {props.student.last_name.toUpperCase()}
              </Card.Header>
              <Card.Meta>
              </Card.Meta>
            </Card.Content>
            </Link>
      </Card>
      
  );
}

const mapStateToProps = (state) => {
  return ({
          isLogged: state.auth.isLogged
      })
  }
  const mapDispatchToProps = (dispatch) => ({
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Student);
