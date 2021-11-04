import { connect } from 'react-redux';
import TeacherForm from '../../components/TeacherForm/teacherForm';
import { handleChange, subscribeSubmit } from '../../actions/auth'

const mapStateToProps = (state) => ({
    firstname: state.subscribe.firstname,
    lastname: state.subscribe.lastname,
    mobile_phone: state.subscribe.mobile_phone,
  });

const mapDispatchToProps = (dispatch) => ({
  handleChange: (value, name) => {
    dispatch(handleChange(value, name))
  },
  submitRegister: () => {
    dispatch(subscribeSubmit());
  },
})

  export default connect(mapStateToProps, mapDispatchToProps)(TeacherForm);
 