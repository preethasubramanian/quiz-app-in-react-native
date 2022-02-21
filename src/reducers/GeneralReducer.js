import {GeneralAction} from '../actions';

const initialState = {
  score: 0,
  token: '',
  question:'',
};
 




const GeneralReducer = (state = initialState, action) => {
  switch (action.type) {
     case GeneralAction.types.SET_TOKEN:
      return {...state, token: action.payload};
      case GeneralAction.types.SET_QUIZ_SCORE:
        return {...state, score: action.payload};
        case GeneralAction.types.SET_API_RESPONCE:
          return {...state, question: action.payload};
   
 
 
        default:
      return state;
  }
};

export default GeneralReducer;