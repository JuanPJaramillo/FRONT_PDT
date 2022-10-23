import React from 'react';
import { store } from './PDT/Store/Store'
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import Rutas from './Routers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Rutas />
  </Provider >
);
