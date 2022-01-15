
import ReactDOM from 'react-dom';
import React from 'react';
import Register from './pages/Register/register';
import axios from 'axios';
import { GlobalStyle } from './styles/global'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'

axios.defaults.baseURL = 'http://localhost:3333';
axios.defaults.headers.post['Content-Type'] = 'application/json';


ReactDOM.render(
  <React.StrictMode>
     <GlobalStyle />
     <Navbar/>
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Register/>}/>
      </Routes>
        
    </BrowserRouter>
    <Footer/>
    </React.StrictMode>,
  document.getElementById('root')
);