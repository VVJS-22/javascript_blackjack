import React from 'react';
import { render } from 'react-dom';
import {App} from './app'; 
import { DataProvider } from './contexts/GameDB';
import { GlobalStyles } from './styles/globalStyle';

render(
  <React.StrictMode>
    <DataProvider>
      <GlobalStyles />
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
