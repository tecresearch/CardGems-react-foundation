import React, { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Product from './components/Product';

function App() {
  

  return (
    
    <div className="p-4">
        <NavBar/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Product/>}/>
        <Route path="/products/:productId" element={<Product />} />
        <Route path="*" element={<NotFound/>}/>
        
      </Routes>
        <Footer/>  
    </div>
  );
}

export default App;
