import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import reportWebVitals from './reportWebVitals';
import {GlobalStyle} from './style.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);

reportWebVitals();
