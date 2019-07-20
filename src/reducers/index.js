import { combineReducers } from 'redux';
import authReducer from './authReducer';
import contactReducer from './contactReducer';
import errorReducer from './errorReducer';


export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  contact: contactReducer
});
