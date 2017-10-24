import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

window.axios = axios;

const store = createStore (reducers, {}, applyMiddleware (reduxThunk, logger));

ReactDOM.render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById ('root')
);
registerServiceWorker ();
