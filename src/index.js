import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// REDUX
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { reducer } from './redux/reducers';

const store = createStore(reducer);
const log = createLogger();
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();

////////////////////////////////////////////////////
//  https://daveceddia.com/how-does-redux-work/   //
////////////////////////////////////////////////////