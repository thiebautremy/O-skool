import { connect } from 'react-redux';
import Subscribe from '../../components/Subscribe/subscribe';
import { handleChange, subscribeSubmit, changeCheckBox } from '../../actions/auth';

const mapStateToProps = (state) => ({
    email: state.subscribe.email,
    password: state.subscribe.password,
    role: state.subscribe.role,
    success: state.subscribe.success,
  });

const mapDispatchToProps = (dispatch) => ({
  handleChange: (value, name) => {
    dispatch(handleChange(value, name))
  },
  submitRegister: () => {
    dispatch(subscribeSubmit());
  },
  handleChangeCheckBox: (isChecked, target) => {
    dispatch(changeCheckBox(isChecked, target))
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Subscribe);
