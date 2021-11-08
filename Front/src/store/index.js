// import { createStore, compose, applyMiddleware } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools  } from 'redux-devtools-extension';
// import reducers
import rootReducer from '../reducers';

import auth from '../middleware/auth';
import users from '../middleware/users';
import students from '../middleware/students';
import subscribe from '../middleware/subscribe';

const store = createStore(rootReducer, composeWithDevTools (
  applyMiddleware(auth, students, subscribe, users)
))

// == Export
export default store;
