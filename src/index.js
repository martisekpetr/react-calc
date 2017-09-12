import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
// import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import rootReducer from './reducers/rootReducer';

 const store = createStore(
  rootReducer,
  window.devToolsExtension ? window.devToolsExtension() : v => v
);

// TODO: Use Provider component (it has "store" prop)

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
