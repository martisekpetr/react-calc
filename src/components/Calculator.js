import React from 'react';
import PropTypes from 'prop-types';

const Calculator = ({ display, appendToDisplay, performOperation, getResult }) => {
    return (
        <div>
            <h3>{display}</h3>
            <button onClick={() => appendToDisplay(1)}>1</button>
            <button onClick={() => appendToDisplay(2)}>2</button>
            <button onClick={() => appendToDisplay(3)}>3</button>
            <br />
            <button onClick={() => appendToDisplay(4)}>4</button>
            <button onClick={() => appendToDisplay(5)}>5</button>
            <button onClick={() => appendToDisplay(6)}>6</button>
            <br />
            <button onClick={() => appendToDisplay(7)}>7</button>
            <button onClick={() => appendToDisplay(8)}>8</button>
            <button onClick={() => appendToDisplay(9)}>9</button>
            <br />
            <button onClick={() => performOperation('add')}>+</button>
            <button onClick={() => performOperation('subtract')}>-</button>
            <button onClick={() => performOperation('multiply')}>*</button>
            <button onClick={() => performOperation('divide')}>/</button>
            <button onClick={getResult}>=</button>
        </div>
    );
};

Calculator.propTypes = {
    display: PropTypes.number,
    appendToDisplay: PropTypes.func.isRequired,
    performOperation: PropTypes.func.isRequired,
    getResult: PropTypes.func.isRequired
};

Calculator.defaultProps = {
    display: 0
};

export default Calculator;
