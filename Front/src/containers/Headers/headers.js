import { connect } from 'react-redux';
import Header from '../../components/Header/header';
// import {} from '../../actions/auth';

const mapStateToProps = (state) => ({
    // firstNameTeacher: state.teacher.firstName,
    // firstNameParent: state.parent.firstName,
    // isTeacher: state.auth.isTeacher,
  });

// const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps)(Header);
