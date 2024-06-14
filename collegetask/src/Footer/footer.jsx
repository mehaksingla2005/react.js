import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Arrow from '../assets/arrow.png';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleButtonClick = () => {
    // Perform any action with the email, such as sending it to a server
    console.log('Email submitted:', email);

    // Clear the email input field
    setEmail('');
  };

  return (
    <>
      <div className='bg-indigo-900 px-8 sm:px-16 lg:px-32 py-4'>
        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center py-12 space-y-8 lg:space-y-0'>
          <div>
            <p className='font-bebas font-bold text-4xl text-white mb-4'>
              LOGO<span className='text-green-500'>HERE</span>
            </p>
            <p className='font-poppins font-semibold text-lg lg:text-xl text-white'>
              Proofers offer a wide variety of tailor-made services
              <br className='hidden lg:inline' />
              to meet your individual needs. Proofers offer a
              <br className='hidden lg:inline' />
              number of core services which include proofreading
              <br className='hidden lg:inline' />
              and copy-editing (thesis, dissertations, essays
              <br className='hidden lg:inline' />
              reports), document formatting and plagiarism
            </p>
          </div>
          <div>
            <p className='text-white font-poppins text-2xl lg:text-3xl font-bold mb-4'>Quick Links</p>
            <ul className='space-y-2'>
              <li><Link to='/Home' className='text-white font-poppins text-lg lg:text-xl font-semibold'>Home</Link></li>
              <li><Link to='/services' className='text-white font-poppins text-lg lg:text-xl font-semibold'>Services</Link></li>
              <li><Link to='/pricing' className='text-white font-poppins text-lg lg:text-xl font-semibold'>Pricing</Link></li>
              <li><Link to='/submitorder' className='text-white font-poppins text-lg lg:text-xl font-semibold'>Submit order</Link></li>
            </ul>
          </div>
          <div>
            <p className='font-poppins font-bold text-2xl lg:text-3xl text-white mb-4'>Subscribe Newsletter</p>
            <div className='border rounded-lg flex'>
              <input
                type='email'
                placeholder='Your Email'
                value={email}
                onChange={handleEmailChange}
                className='font-poppins bg-white border border-1 flex-grow p-2'
              />
              <button onClick={handleButtonClick} className='bg-green-500 p-2'>
                <img src={Arrow} alt='arrow' className='h-6 w-6' />
              </button>
            </div>
          </div>
        </div>
        <div className='border border-1 border-white mt-8 lg:mt-20'></div>
        <div className='flex flex-col lg:flex-row justify-between items-center py-4'>
          <p className='font-Roboto font-normal text-white text-sm lg:text-xl mt-4 lg:mt-0'>
            Copyright: © 2022 | All Rights Reserved
          </p>
          <p className='font-Roboto font-normal text-white text-sm lg:text-xl mt-4 lg:mt-0'>
            Privacy Policy | Terms and Conditions
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
