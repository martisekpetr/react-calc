import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const state = {
    display : 0,
    memory: 0,
    operation: 0,
    isEditingDisplay : true,
};

const appendToDisplay = (num) => {
    if (state.isEditingDisplay){
        state.display = state.display * 10 + num;
    }
    else {
        state.display = num;
        state.isEditingDisplay = true;
    }
    render(state)
};

const performOperation = (operation) => {
    state.memory = state.display;
    state.operation = operation;
    state.isEditingDisplay =false;
    render(state)
};


const getResult = () => {
    let operand1 = state.memory;
    let operand2 = state.display;
    let result;
    switch (state.operation){
        case 'add':
            result = operand1 + operand2;
            break;
        case 'subtract':
            result = operand1 - operand2;
            break;
        case 'multiply':
            result = operand1 * operand2;
            break;
        case 'divide':
            result = operand1 / operand2;
            break;
        default:
            result = NaN;
    }
    state.display = result;
    state.isEditingDisplay = false;
    render(state)

};


const render = (appState) =>{
    ReactDOM.render(
        <App
            display = {appState.display}
            appendToDisplay = {appendToDisplay}
            performOperation = {performOperation}
            getResult = {getResult}
        />,
        document.getElementById('root'));
};


render(state);


registerServiceWorker();
