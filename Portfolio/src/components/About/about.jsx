import React from 'react';
import me from '../../assets/Mehak.jpeg';

const About = () => {
  return (
    <div className='flex flex-col justify-evenly items-center mx-auto mt-20 px-4 sm:px-6 lg:px-8'>
      <div className='flex items-center justify-center'>
        <p className="font-inter font-bold text-4xl sm:text-5xl lg:text-6xl text-center">
          About me
        </p>
      </div>
      <div className='flex flex-col justify-evenly my-auto lg:flex-row mt-20'>
        <img
          src={me}
          alt="My Photo"
                    className="w-full lg:w-80 h-auto object-cover rounded-lg shadow-md mb-10 lg:mb-0 lg:mr-10"
        />
        <div className='lg:w-1/2'>
          <p className='font-inter text-xl sm:text-2xl  font-semibold '>
            I am an experienced Full Stack Developer with over 6 months of experience in this field. Throughout this intern, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
          </p>
          <p className='font-inter text-xl sm:text-2xl  font-semibold mt-6'>
            My passion for fullstack development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.
          </p>
            <div className="gap-y-2 my-10">
            <div className="flex align-items items-center gap-8"><p className='font-inter text-xl font-semibold'>HTML & CSS</p> <hr style={{
        width: "70%",
        height: "8px",
        border: "none",
        outline: "none",
        borderRadius: "50px",
        background: "linear-gradient(to right, pink, orange, yellow)"
      }} className='my-4' /></div>
          <div className="flex align-items items-center gap-8"><p className='font-inter text-xl font-semibold'>React JS</p> <hr style={{
        width: "90%",
        height: "8px",
        border: "none",
        outline: "none",
        borderRadius: "50px",
        background: "linear-gradient(to right, pink, orange, yellow)"
      }} className='my-4' /></div>
          <div className="flex align-items items-center gap-8"><p className='font-inter text-xl font-semibold'>Java Script</p> <hr style={{
        width: "80%",
        height: "8px",
        border: "none",
        outline: "none",
        borderRadius: "50px",
        background: "linear-gradient(to right, pink, orange, yellow)"
      }} className='my-4' /></div>
          <div className="flex align-items items-center gap-8"><p className='font-inter text-xl font-semibold'>Mongo DB</p> <hr style={{
        width: "70%",
        height: "8px",
        border: "none",
        outline: "none",
        borderRadius: "50px",
        background: "linear-gradient(to right, pink, orange, yellow)"
      }} className='my-4' /></div>
          <div className="flex align-items items-center gap-8"><p className='font-inter text-xl font-semibold'>Express JS</p> <hr style={{
        width: "60%",
        height: "8px",
        border: "none",
        outline: "none",
        borderRadius: "50px",
        background: "linear-gradient(to right, pink, orange, yellow)"
      }} className='my-4' /></div>
          <div className="flex align-items items-center gap-8"><p className='font-inter text-xl font-semibold'>Next JS</p> <hr style={{
        width: "50%",
        height: "8px",
        border: "none",
        outline: "none",
        borderRadius: "50px",
        background: "linear-gradient(to right, pink, orange, yellow)"
      }} className='my-4' /></div>
          <div className="flex align-items items-center gap-8"><p className='font-inter text-xl font-semibold'>C++</p> <hr style={{
        width: "90%",
        height: "8px",
        border: "none",
        outline: "none",
        borderRadius: "50px",
        background: "linear-gradient(to right, pink, orange, yellow)"
      }} className='my-4' /></div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;
