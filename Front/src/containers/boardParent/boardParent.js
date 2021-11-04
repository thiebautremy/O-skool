import { connect } from 'react-redux';
import boardParent from '../../components/BoardParent/boardParent';
import { logOut } from '../../actions/auth';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  handleDeconnexion: () => {
    dispatch(logOut());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(boardParent);
