import 'core-js/stable'; // For IE
import 'regenerator-runtime/runtime'; // For IE

import React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
//import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import { RouterOutlet } from '@core/modules/custom-router-dom';
import appRoutes from './app.routes';
//import appMiddleware from './app.middleware';
import appReducer from './app.reducers';
import { LoadingProvider } from '@app/shared/providers/LoadingProvider';
import { DialogProvider } from './shared/providers/DialogProvider';


//const middleware = createSagaMiddleware();
const store = createStore(
  appReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <LoadingProvider>
    <DialogProvider>
      <Provider store={store}>
        <BrowserRouter>
          <RouterOutlet routes={appRoutes} />
        </BrowserRouter>
      </Provider>
    </DialogProvider>
  </LoadingProvider>,
  document.getElementById('root')
);
