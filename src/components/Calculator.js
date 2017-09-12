import React from 'react';
import PropTypes from 'prop-types';
import * as ActionTypes from '../constants/actionTypes.js'
import {GETRESULT} from "../constants/actionTypes";

const Calculator = ({display, dispatch}) => {
    return (
        <div>
            <h3>{display}</h3>
            <button onClick={() => dispatch({type: ActionTypes.APPEND, payload: 1})}>1</button>
            <button onClick={() => dispatch({type: ActionTypes.APPEND, payload: 2})}>2</button>
            <button onClick={() => dispatch({type: ActionTypes.APPEND, payload: 3})}>3</button>
            <br />
            <button onClick={() => dispatch({type: ActionTypes.APPEND, payload: 4})}>4</button>
            <button onClick={() => dispatch({type: ActionTypes.APPEND, payload: 5})}>5</button>
            <button onClick={() => dispatch({type: ActionTypes.APPEND, payload: 6})}>6</button>
            <br />
            <button onClick={() => dispatch({type: ActionTypes.APPEND, payload: 7})}>7</button>
            <button onClick={() => dispatch({type: ActionTypes.APPEND, payload: 8})}>8</button>
            <button onClick={() => dispatch({type: ActionTypes.APPEND, payload: 9})}>9</button>
            <br />
            <button onClick={() => dispatch({type: ActionTypes.ADD})}>+</button>
            <button onClick={() => dispatch({type: ActionTypes.SUBTRACT})}>-</button>
            <button onClick={() => dispatch({type: ActionTypes.MULTIPLY})}>*</button>
            <button onClick={() => dispatch({type: ActionTypes.DIVIDE})}>/</button>
            <button onClick={() => dispatch({type: GETRESULT})}>=</button>
        </div>
    );
};

Calculator.propTypes = {
    display : PropTypes.number.isRequired,
    dispatch : PropTypes.func.isRequired,
};

export default Calculator;
