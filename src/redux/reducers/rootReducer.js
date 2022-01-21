// ** Redux Imports
import { combineReducers } from 'redux';

// ** Reducers Imports
// import users from '@src/views/user/store/reducer';
import auth from './auth';
import navbar from './navbar';
import layout from './layout';
import users from './user';
import stores from './store';
import media from './media';

const rootReducer = combineReducers({
  auth,
  navbar,
  layout,
  users,
  stores,
  media,
});

export default rootReducer;
