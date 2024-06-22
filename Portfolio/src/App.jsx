
// App.jsx 
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/home.jsx"; 
import About from "./components/About/about.jsx";
import Services from "./components/Services/services.jsx"
import Portfolio from "./components/Portfolio/portfolio.jsx" 
import Contact from "./components/Contact/contact.jsx"; 
import Navbar from "./components/Navbar/Navbar.jsx";
import './index.css';
const App=()=> { 
  return ( 
      <> 
      <BrowserRouter>
      <Navbar />
          
              <Routes> 
                  <Route path="/" element={<Home />} /> 
                  <Route path="/about" element={<About />} /> 
                  <Route path="/services" element={<Services/>} /> 
                  <Route path="/portfolio" element={<Portfolio />} /> 
                  <Route path="/contact" element={<Contact />} /> 
              </Routes> 
              </BrowserRouter>
      </> 
  ); 
} 
export default App;



      
       
