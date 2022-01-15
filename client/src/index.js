
import ReactDOM from 'react-dom';
import React from 'react';
import Register from './pages/Register/register';
import axios from 'axios';
import { GlobalStyle } from './styles/global'
axios.defaults.baseURL = 'http://localhost:3333';
axios.defaults.headers.post['Content-Type'] = 'application/json';


ReactDOM.render(
  <React.StrictMode>
    <>
      <GlobalStyle/>
      <Register/>
    </>
    
  </React.StrictMode>,
  document.getElementById('root')
);