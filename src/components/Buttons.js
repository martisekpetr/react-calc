import React from 'react';
import PropTypes from 'prop-types';
import * as ActionTypes from '../constants/actionTypes.js';

import { connect } from 'react-redux';

const Buttons = ({ append, add, subtract, multiply, divide, getResult }) => {
  return (
    <div>
      <button onClick={() => append(1)}>1</button>
      <button onClick={() => append(2)}>2</button>
      <button onClick={() => append(3)}>3</button>
      <br />
      <button onClick={() => append(4)}>4</button>
      <button onClick={() => append(5)}>5</button>
      <button onClick={() => append(6)}>6</button>
      <br />
      <button onClick={() => append(7)}>7</button>
      <button onClick={() => append(9)}>8</button>
      <button onClick={() => append(9)}>9</button>
      <br />
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
      <button onClick={multiply}>*</button>
      <button onClick={divide}>/</button>
      <button onClick={getResult}>=</button>
    </div>
  );
};

Buttons.propTypes = {
  append: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
  subtract: PropTypes.func.isRequired,
  multiply: PropTypes.func.isRequired,
  divide: PropTypes.func.isRequired,
  getResult: PropTypes.func.isRequired
};


const mapDispatchToProps = dispatch => ({
  append: num => dispatch({ type: ActionTypes.APPEND, payload: num }),
  add: () => dispatch({ type: ActionTypes.ADD }),
  subtract: () => dispatch({ type: ActionTypes.SUBTRACT }),
  multiply: () => dispatch({ type: ActionTypes.MULTIPLY }),
  divide: () => dispatch({ type: ActionTypes.DIVIDE }),
  getResult: () => dispatch({ type: ActionTypes.GET_RESULT}),
});

export default connect(undefined, mapDispatchToProps)(Buttons);
