import { connect } from 'react-redux';
import ParentProfil from '../../components/parentProfil/parentProfil';
import { logOut } from '../../actions/auth';

const mapStateToProps = (state) => ({
    isLogged: state.auth.isLogged,
    firstNameParent: state.parent.firstName, 
    lastNameParent: state.parent.lastName,
    email: state.parent.email,
    adressParent: state.parent.adress,
    cityParent: state.parent.city,
    zipcodeParent: state.parent.zipcode,
    children: state.parent.children,
  });

const mapDispatchToProps = (dispatch) => ({
  handleDeconnexion: () => {
    dispatch(logOut());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ParentProfil);
