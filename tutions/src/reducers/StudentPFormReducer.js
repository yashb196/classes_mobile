import {STUDENT_UPDATION, STUDENT_CREATION} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  std: '',
  bankorcash: '',
  rtgsno: '',
  bankname: '',
  day: '',
  month: '',
  year: '',
  presentdays: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STUDENT_UPDATION:
      return {...state, [action.payload.prop]: action.payload.value};
    case STUDENT_CREATION:
      return INITIAL_STATE;
    default:
      return state;
  }
};
