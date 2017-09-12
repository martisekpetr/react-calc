import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Calculator from './Calculator';

const App = ({display, dispatch}) => {
    return (
        <div>
            <Calculator
                display={display}
                dispatch={dispatch}
            />
        </div>
    );
};


App.propTypes = {
    display: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
};

export default App;
