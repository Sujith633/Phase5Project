import React from 'react';
import Main from './Components/Main';
import './Components/style.css'
import Navbar from './Components/Navbar';
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Components/About';
import PokemonApp from './Components/PokemonApp';

function App() {
  return (
    <>
       
       
      <Router>
       <Navbar/>
        
        <Routes>
        <Route path="/" element={<PokemonApp/>} />
        <Route path="/home" element={<Main/>} />
        <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
