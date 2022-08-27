import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'twin.macro'
import GlobalStyles from './styles/GlobalStyles';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>

      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>
);

