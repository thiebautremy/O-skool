import { combineReducers } from 'redux';
import students from './students';
import teacher from './teacher';
import subscribe from './subscribe';
import auth from './auth';

export default combineReducers({
  auth,
  students,
  teacher,
  subscribe,
});
