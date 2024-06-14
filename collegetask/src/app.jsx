import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home1 from './Home/home1.jsx';
import Home from './Home/home.jsx';
import Services from "./Services/services.jsx";
import Process from "./Process/process.jsx";
import Middle from "./Middle/middle.jsx";
import Footer from "./Footer/footer.jsx";
import Navbar from "./Navbar/navbar.jsx";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={
          <>
          <Home1 />
          <Home />
          <Middle />
          <Footer />
          </>
        }/>
        <Route path="/services" element={
          <Services/>
        }/>
        <Route path="/pricing" element={
         <Process/>
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
