import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redusers/combineReduser';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { autoLogin } from './actions/userAction'
 
if ( localStorage.JwtToken) store.dispatch( autoLogin())


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
        , document.getElementById('root'));


serviceWorker.unregister();
