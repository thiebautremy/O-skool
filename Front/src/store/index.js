// import { createStore, compose, applyMiddleware } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools  } from 'redux-devtools-extension';
// import reducers
import rootReducer from '../reducers';

import auth from '../middleware/auth';
import students from '../middleware/students';
import subscribe from '../middleware/subscribe';

const store = createStore(rootReducer, composeWithDevTools (
  applyMiddleware(auth, students, subscribe)
))

// == Export
export default store;
