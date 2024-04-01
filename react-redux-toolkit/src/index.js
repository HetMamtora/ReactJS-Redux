import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './app/store'
import { Provider } from 'react-redux'  //ONE TYPE OF HIGHER ORDER COMPONENT
import { Counter } from './features/counter/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
    <Counter />
  </Provider>,
);