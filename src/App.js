
//Librerias
import React from 'react';
import {Routes, Route} from 'react-router-dom'
import './assets/css/main.css';
import Index from './components/Index';

//Componentes
import LogIn from './components/LogIn';
import Products from './components/Products';
import Section from './components/Section';
import Topbar from './components/TopBar';
import UserId from './components/UserId';
import Users from './components/Users';

// import logo from './logo.svg';


export default function App() {
  return (
    <>
      <Topbar />
      <Routes >
        <Route path="/" element={<LogIn />} />
        <Route path="index" element={<Section />}>
          <Route path="/index" element={<Index />} />
          <Route path="users" element={<Users />} />
          <Route path="users/id" element={<UserId />} />
          <Route path="products" element={<Products />} />
        </ Route>
      </Routes> 
    </>
  );
} 

