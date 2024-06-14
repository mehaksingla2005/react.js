import React from 'react';
import backgroundImage from '../assets/middle.png'; // Adjust the path as necessary

const Middle = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '50vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        padding: '2rem',
      }}
    >
      <p className='font-poppins font-bold text-2xl md:text-4xl my-4 mt-16'>
        We Provide Quality service at an affordable price!
      </p>
      <p className='font-poppins font-semibold text-xl md:text-2xl mb-8'>
        Starting at: £6.99 per 100 words & Full money back guarantee!
      </p>
      <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-16'>
        <button className='font-poppins font-semibold text-lg md:text-xl p-2 text-green-500 bg-white border rounded-md hover:bg-green-500 hover:text-white'>
          Calculate Price
        </button>
        <button className='font-poppins font-semibold text-lg md:text-xl p-2 text-green-500 bg-white border rounded-md hover:bg-green-500 hover:text-white'>
          Free Samples
        </button>
      </div>
    </div>
  );
};

export default Middle;
