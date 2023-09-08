import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './Pages/About';
import Services from './Pages/Service';
import ContactPage from './Pages/Contact';
import Home from './Pages/Home';
import Heafooter from './Componentes/Heafooter';



function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
      </Routes>
        <Heafooter /> 
        <Routes>
         
          <Route path='about' element={<AboutPage />} />
          <Route path='services' element={<Services />} />
          <Route path='contact' element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
    );
};

export default App



