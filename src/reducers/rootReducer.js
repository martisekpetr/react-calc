import * as ActionTypes from '../constants/actionTypes.js';

const initialState = {
  display: 0,
  memory: 0,
  operation: 0,
  isEditingDisplay: true
};

const rootReducer = (state=initialState, action) => {
  switch (action.type) {
    case ActionTypes.APPEND:
      return {
        ...state,
        display: state.isEditingDisplay ? state.display * 10 + action.payload : action.payload,
        memory: state.isEditingDisplay ? state.memory : state.display,
        isEditingDisplay: true
      };

    case ActionTypes.ADD:
    case ActionTypes.SUBTRACT:
    case ActionTypes.MULTIPLY:
    case ActionTypes.DIVIDE:
      return {
        ...state,
        // memory: state.display,
        operation: action.type,

        isEditingDisplay: false
      };

    case ActionTypes.RESULT_RECEIVED:
      return{
        ...state,
        display: +action.payload,
        isEditingDisplay: false,
      };

    default:
      return state;
  }
};

export default rootReducer;
