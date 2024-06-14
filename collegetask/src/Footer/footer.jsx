import React from 'react';
import { Link } from 'react-router-dom';
import Arrow from '../assets/arrow.png';

const Footer = () => {
  return (
    <div className='bg-indigo-900 p-6'>
      <div>
        <p className='font-bebas font-bold text-3xl text-white'>
          LOGO<span className='text-green-500'>HERE</span>
        </p>
        <p className='font-poppins font-semibold text-xl text-white'>
          Proofers offer a wide variety of tailor-made services
          <br />
          to meet your individual needs. Proofers offer a
          <br />
          number of core services which include proofreading
          <br />
          and copy-editing (thesis, dissertations, essays
          <br />
          reports), document formatting and plagiarism
        </p>
      </div>
      <div>
        <p className='text-white font-poppins text-2xl font-bold'>Quick Links</p>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/services'>Services</Link></li>
          <li><Link to='/pricing'>Pricing</Link></li>
          <li><Link to='/submitorder'>Submit order</Link></li>
        </ul>
      </div>
      <div>
        <p className='font-poppins font-bold text-3xl text-white'>Subscribe Newsletter</p>
        <div className='border rounded-lg flex'>
          <input type='email' placeholder='Your Email' className='font-poppins bg-white border border-1 flex-grow p-2' />
          <button className='bg-green-500 p-2'>
            <img src={Arrow} alt='arrow' className='h-6 w-6' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
