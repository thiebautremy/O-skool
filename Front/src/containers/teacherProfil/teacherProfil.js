import { connect } from 'react-redux';
import Home from '../../components/Home/home';
import { logOut } from '../../actions/auth';
import { } from '../../actions/app';

const mapStateToProps = (state) => {
return ({
    isLogged: state.auth.isLogged,
    email: state.teacher.email,
    firstName: state.teacher.firstName,
    lastName: state.teacher.lastName,
    phone: state.teacher.phone,
  });
}
const mapDispatchToProps = (dispatch) => ({
  handleDeconnexion: () => {
    dispatch(logOut());
  }
  
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);
