// // src/main.jsx
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// // import Navbar from './Navbar/navbar.jsx';
// import Home from './Home/home.jsx'
// import Home1 from './Home/home1.jsx'
// import Services from "./Services/services.jsx"
// import Middle from "./Middle/middle.jsx"
// import Process from "./Process/process.jsx"
// import Footer from "./Footer/footer.jsx"
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//    <Navbar/>
//     <Home1/>
//     <Home/>
//     <Services/>
//     <Middle/>
//     <Process/>
//     <Footer/>
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import Home from './Home/home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);