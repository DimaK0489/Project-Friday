import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App/App';
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";
import store from './App/Store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <App/>
            </HashRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'));


