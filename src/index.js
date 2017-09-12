import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import rootReducer from './reducers/rootReducer';

 const store = createStore(
  rootReducer,
  window.devToolsExtension ? window.devToolsExtension() : v => v
);

// Use:
// store.getState() to get the state
// store.dispatch to dispatch an action


const render = () =>{
    ReactDOM.render(
        <App
            display  = {store.getState().display}
            dispatch = {store.dispatch}
        />,
        document.getElementById('root'));
};

store.subscribe(render);

render();


registerServiceWorker();
