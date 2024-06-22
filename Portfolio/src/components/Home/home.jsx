import React from 'react';
import me from '../../assets/Mehak.jpeg';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto ">
      <div className=" rounded-lg shadow-lg mt-20">
        <img src={me} alt="My Photo" className="w-72 h-72 rounded-full object-cover shadow-md" />
      </div>
      <div className='flex flex-col items-center align-items mx-auto mt-5'>
        <p className="font-inter text-white text-6xl font-bold mx-auto text-center"><span className='bg-gradient-to-r from-pink-500 via-red-400 to-yellow-300 text-transparent bg-clip-text'>I'm Mehak Singla,</span>full stack <br/>developer based in India</p>
        <p className='font-inter text-white text-xl font-medium mt-10 text-center'>I'm a full stack developer with experience of 6 months <br/> in a start-up based company.</p>
      </div>
      <div className='flex space-x-4 mt-20'>
        <button className='bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 hover:from-pink-600 hover:via-orange-500 hover:to-yellow-400 rounded-3xl transform transition-transform duration-300 hover:scale-105'>
          <p className='text-white font-inter text-xl px-4 py-2 font-semibold'>
            Connect with Me
          </p>
        </button>
        <button className='border-white border-2 rounded-3xl transform transition-transform duration-300 hover:border-pink-600'>
          <p className='text-white font-inter text-xl px-8 py-2 font-semibold hover:bg-gradient-to-r from-pink-500 via-red-400 to-yellow-300  hover:text-transparent hover:bg-clip-text'>
            My Resume
          </p>
        </button>
      </div>
    </div>
  );
};

export default Home;
