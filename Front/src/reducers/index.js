import { combineReducers } from 'redux';
import students from './students';
import auth from './auth';
import subscribe from './subscribe';

export default combineReducers({
  auth,
  students,
  subscribe
});
