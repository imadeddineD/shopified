import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme.js';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './state/index.js'

const store = configureStore({
  reducer : {cart : cartReducer}
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <App /> 
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);


