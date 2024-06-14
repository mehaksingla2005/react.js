import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home1 from './Home/home1.jsx';
import Home from './Home/home.jsx';
import Services from "./Services/services.jsx";
import Process from "./Process/process.jsx";
import Process1 from "./Process/process1.jsx";
import Middle from "./Middle/middle.jsx";
import Footer from "./Footer/footer.jsx";
import Navbar from "./Navbar/navbar.jsx";
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={
          <>
          <Home1 />
          <Home />
          <Services/>
          <Middle />
          <Process/>
          <Process1/>
          <Footer />
          </>
        }/>
        <Route path="/Home" element={
          <>
          <Home1 />
          <Home />
          
          </>
        }/>
        <Route path="/services" element={
          <>
          <Services/>
          <Middle /></>
          
        }/>
        <Route path="/pricing" element={
         <><Process/>
         <Process1/></>
        }/>
        <Route path="/submitOrder" element={
          <Footer/>
        }/>
        {/* <Route path="/services" render={() => (
          <div>
            <Services />
          </div>
        )} />
        <Route path="/pricing" render={() => (
          <div>
            <Process />
          </div>
        )} />
        <Route path="/submitorder" render={() => (
          <div>
            <Footer />
          </div>
        )} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;