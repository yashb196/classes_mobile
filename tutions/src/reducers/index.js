/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import StudentFormReducer from './StudentFormReducer';
import StudentPFormReducer from './StudentPFormReducer';
import StudentReducer from './StudentReducer';
export default combineReducers({
  auth: AuthReducer,
  student:StudentFormReducer,
  studentForm:StudentPFormReducer,
  students:StudentReducer,
});
