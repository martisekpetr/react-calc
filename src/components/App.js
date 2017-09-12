import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Calculator from './Calculator';

class App extends Component {
    render() {
        return (
            <div>
                <Calculator
                    display={this.props.display}
                    appendToDisplay={this.props.appendToDisplay}
                    performOperation={this.props.performOperation}
                    getResult={this.props.getResult}
                />
            </div>
        );
    }
}

App.propTypes = {
    display: PropTypes.number,
    appendToDisplay: PropTypes.func.isRequired,
    performOperation: PropTypes.func.isRequired,
    getResult: PropTypes.func.isRequired
};

App.defaultProps = {
    display: 0
};

export default App;
