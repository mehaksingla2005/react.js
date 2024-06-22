import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className='flex justify-evenly py-4'>
        <div className='font-inter font-bold text-3xl bg-gradient-to-r from-pink-500 via-red-400 to-yellow-300 text-transparent bg-clip-text '>MeHaK</div>
        <div className='flex justify-evenly p-2 gap-8'>
            <Link to="/"><p className='font-inter font-semibold text-xl '>Home</p></Link>
            <Link to="/about"><p  className='font-inter font-semibold text-xl'>About me</p></Link>
            <Link to="/services"><p  className='font-inter font-semibold text-xl'>Services</p></Link>
            <Link to="/portfolio"><p  className='font-inter font-semibold text-xl'>Portfolio</p></Link>
            <Link to="/contact"><p  className='font-inter font-semibold text-xl'>Contact</p></Link>
            </div>
            <div>
            <button className='bg-gradient-to-r from-pink-600 via-orange-400 to-yellow-300 hover:from-pink-600 hover:via-orange-500 hover:to-yellow-400 rounded-3xl transform transition-transform duration-300 hover:scale-105'>
          <p className='text-white font-inter text-medium px-4 py-2 font-semibold'>
            Connect with Me
          </p>
        </button>
        </div>
                </nav></>
  )
}

export default Navbar