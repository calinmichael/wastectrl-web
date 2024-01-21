import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Mission from './components/pages/Mission';
import Contact from './components/pages/Contact';
import Shop from './components/pages/Shop';
import React, { useRef, useEffect } from "react";
import About from './components/pages/About';



function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
    <Route path='/' exact element={ <Home />}></Route>  
    <Route path='/mission' exact element={ <Mission />}></Route>
    <Route path='/contact' exact element={ <Contact />}></Route>
    <Route path='/shop' exact element={ <Shop />}></Route>
    <Route path='/about' exact element={ <About />}></Route>

    </Routes>
    </Router>
     

    </>
  );
}

export default App;

