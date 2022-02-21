import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
import SimpsonsRouters from './routers';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SimpsonsRouters/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);