import {
  STUDENT_UPDATION,
  STUDENT_CREATION,
  STUDENTS_FETCH_SUCCESS,
} from './types';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

export const studentUpdation = ({prop, value}) => {
  return {
    type: STUDENT_UPDATION,
    payload: {prop, value},
  };
};

export const studentCreation = ({
  name,
  phone,
  std,
  bankorcash,
  bankname,
  presentdays,
  date,
}) => {
  const {currentUser} = firebase.auth();
  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/students`)
      .push({name, phone, std, bankorcash, bankname, presentdays, date})
      .then(() => {
        dispatch({type: STUDENT_CREATION});
        Actions.pop();
      });
  };
};

export const studentsFetch = () => {
  const {currentUser} = firebase.auth();
  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/students`)
      .on('value', (snapshot) => {
        dispatch({type: STUDENTS_FETCH_SUCCESS, payload: snapshot.val()});
      });
  };
};
