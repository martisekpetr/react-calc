import * as ActionTypes from '../constants/actionTypes.js'

const initialState = {
    display: 0,
    memory: 0,
    operation: 0,
    isEditingDisplay : true,

};

const rootReducer = (state, action) => {
    switch(action.type){
        case ActionTypes.APPEND:
            return{
                ...state,
                display : state.isEditingDisplay
                    ? state.display * 10 + action.payload
                    : action.payload,
                isEditingDisplay : true,

            };

        case ActionTypes.ADD:
        case ActionTypes.SUBTRACT:
        case ActionTypes.MULTIPLY:
        case ActionTypes.DIVIDE:
            return {
                ...state,
                memory : state.display,
                operation : action.type,

                isEditingDisplay : false,
            };
        case ActionTypes.GETRESULT:
            let operand1 = state.memory;
            let operand2 = state.display;
            let result;
            switch (state.operation){
                case ActionTypes.ADD:
                    result = operand1 + operand2;
                    break;
                case ActionTypes.SUBTRACT:
                    result = operand1 - operand2;
                    break;
                case ActionTypes.MULTIPLY:
                    result = operand1 * operand2;
                    break;
                case ActionTypes.DIVIDE:
                    result = operand1 / operand2;
                    break;
                default:
                    result = NaN;
            }

            return {
                ...state,
                display: result,
                isEditingDisplay: false,
            };
        default:
            return initialState;
    }

};




export default rootReducer;
