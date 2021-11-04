import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Avatar from '../../assets/michael.png';

const Children = ({
  firstName
}) => {
  return (
    <div className="boardParent__boardParent__board__childrenList">
      <Link to={`/boardStudent/${firstName}`}
        className="boardParent__boardParent__board__childrenList__child"
      >
        <img
          src={Avatar} 
          alt="second child" 
          className="boardParent__boardParent__board__childrenList__child__img"  
        />
        <div className="boardParent__boardParent__board__childrenList__child__subtitle">
          <h3>{firstName}</h3>
        </div>
      </Link>
    </div>
  )
}
Children.propTypes = {
  firstName: PropTypes.string.isRequired,
};

export default Children;
