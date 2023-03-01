import {STUDENT_NAME,STUDENT_RTGS,STUDENT_STD,STUDENT_UPDATE} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  std: '',
  rtgsno: '',
  
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case STUDENT_NAME:
      return{...state,name:action.payload};
    case STUDENT_STD:
      return{...state,std:action.payload};
    case STUDENT_RTGS:
      return{...state,rtgsno:action.payload}

    case STUDENT_UPDATE:
      //action.payload==={prop:'name',value:'jack'}
      return {...state, [action.payload.prop]: action.payload.value}
    default:
      return state;
  }
};
