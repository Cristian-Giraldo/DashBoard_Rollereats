
//Librerias
import React from 'react';
import {Routes, Route} from 'react-router-dom'
import './assets/css/main.css';

//Componentes
import LogIn from './components/LogIn';
import Products from './components/Products';
import Section from './components/Section';
import Topbar from './components/TopBar';
import Users from './components/Users';
// import logo from './logo.svg';


export default function App() {
  return (
    <>
      <Topbar />
      <Routes >
        <Route path="/" element={<LogIn />} />
        <Route path="section" element={<Section />}>
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
        </ Route>
      </Routes> 
    </>
  );
} 

