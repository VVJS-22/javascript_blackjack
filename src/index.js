import React from 'react';
import { render } from 'react-dom';
import {App} from './app'; 
import { GlobalStyles } from './styles/globalStyle';

render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
