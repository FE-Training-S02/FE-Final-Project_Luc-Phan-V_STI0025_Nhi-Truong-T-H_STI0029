import 'core-js/stable'; // For IE
import 'regenerator-runtime/runtime'; // For IE

import React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
//import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';

import { Footer, Header } from '@shared/components/layout/index';
import { RouterOutlet } from '@core/modules/custom-router-dom';
import appRoutes from './app.routes';
//import appMiddleware from './app.middleware';
import appReducer from './app.reducers';


//const middleware = createSagaMiddleware();
const store = createStore(
  appReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <RouterOutlet routes={appRoutes} />
      <Footer />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
