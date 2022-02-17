import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
import TuttiFruttiRouters from './routers';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TuttiFruttiRouters/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);