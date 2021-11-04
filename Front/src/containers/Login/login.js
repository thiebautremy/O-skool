import { connect } from 'react-redux';
import Login from '../../components/Login/login';
import { handleChange, handleSubmit } from '../../actions/auth';

const mapStateToProps = (state) => ({
    email: state.auth.email,
    password: state.auth.password,
    isTeacher: state.auth.isTeacher,
    isParent: state.auth.isParent,
  });

const mapDispatchToProps = (dispatch) => ({
  handleChange: (value, name) => {
    dispatch(handleChange(value, name))
  },
  handleOnSubmit: () => {
    dispatch(handleSubmit());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
