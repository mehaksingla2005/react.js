import React, { useState } from 'react';
import emailImg from "../../assets/email.png";
import phoneImg from "../../assets/phone.png";
import locationImg from "../../assets/image.png";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subscribeEmail, setSubscribeEmail] = useState('');

  return (
    <div className="flex flex-col items-center justify-evenly mt-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center w-full my-10 lg:w-3/4">
        <p className="font-inter font-bold text-4xl sm:text-5xl lg:text-6xl">
          Get in touch
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-evenly mt-10 w-full lg:w-3/4">
        <div className="mb-10 lg:mb-0 lg:mr-20 w-full lg:w-1/2">
          <p className="font-inter text-6xl font-bold bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 text-transparent bg-clip-text">
            Let's talk
          </p>
          <p className="font-inter text-xl sm:text-2xl font-semibold mt-6">
            I'm currently available to take on new projects, so feel free to send<br/>
            me a message about anything that you want me to work on. You can<br/>
            contact me anytime.
          </p>
          <div className="flex items-center justify-start mt-6">
            <img src={emailImg} alt="email" className="h-12 w-12 mr-2" />
            <p className="font-inter text-xl sm:text-2xl font-semibold">
              singlamehak@gmail.com
            </p>
          </div>
          <div className="flex items-center justify-start mt-6">
            <img src={phoneImg} alt="Phone" className="h-12 w-12 mr-2" />
            <p className="font-inter text-xl sm:text-2xl font-semibold">
              8360776363
            </p>
          </div>
          <div className="flex items-center justify-start mt-6">
            <img src={locationImg} alt="location" className="h-12 w-12 mr-2" />
            <p className="font-inter text-xl sm:text-2xl font-semibold">
              Punjab, India
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start w-full lg:w-1/2">
          <p className="font-inter text-xl sm:text-2xl font-semibold mt-4 w-full">Your Name</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="p-2 rounded my-4 w-full bg-gray-700 text-gray-300"
          />
          <p className="font-inter text-xl sm:text-2xl font-semibold w-full">Your Email</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="p-2 rounded my-4 w-full bg-gray-700 text-gray-300"
          />
          <p className="font-inter text-xl sm:text-2xl font-semibold w-full">Write your message here</p>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            className="p-2 rounded my-4 w-full h-32 bg-gray-700 text-gray-300"
          />
          <button className='bg-gradient-to-r from-pink-600 via-orange-500 to-yellow-400 hover:from-pink-600 hover:via-orange-500 hover:to-yellow-400 rounded-3xl transform transition-transform duration-300 hover:scale-105'>
            <p className='text-white font-inter text-xl px-4 py-2 font-semibold'>
              Submit Now
            </p>
          </button>
        </div>
      </div>
     
      <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:w-3/4 mt-8">
        <div className="mb-4 lg:mb-0 lg:mr-10">
          <p className='font-inter font-bold text-3xl bg-gradient-to-r from-pink-500 via-red-400 to-yellow-300 text-transparent bg-clip-text mb-4'>MeHaK</p>
          <p className='font-inter text-xl font-semibold'>
            I am a full Stack Developer from India with 6 months<br/> of experience in a start-up based company.
          </p>
        </div>
        <div className='flex flex-col lg:flex-row items-center w-full lg:w-auto'>
          <input
            type="email"
            value={subscribeEmail}
            onChange={(e) => setSubscribeEmail(e.target.value)}
            placeholder="Enter your email"
            className="text-xl px-4 py-2 rounded-2xl my-4 lg:my-0 lg:mr-4 w-full lg:w-auto bg-gray-700 text-gray-300"
          />
          <button className='bg-gradient-to-r from-pink-600 via-orange-500 to-yellow-400 hover:from-pink-600 hover:via-orange-500 hover:to-yellow-400 rounded-3xl transform transition-transform duration-300 hover:scale-105'>
            <p className='text-white font-inter text-xl px-4 py-2 font-semibold'>
              Subscribe
            </p>
          </button>
        </div>
      </div>
      <div className="h-px bg-white my-8 w-full "></div>
      <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:w-3/4 mb-10">
        <p className='font-inter text-xl font-semibold mb-4 lg:mb-0'>@2024 Mehak Singla. All Rights Reserved.</p>
        <div className='flex flex-col lg:flex-row items-center lg:gap-4'>
          <p className='font-inter text-xl font-semibold'>Terms of Service</p>
          <p className='font-inter text-xl font-semibold'>Privacy Policy</p>
          <p className='font-inter text-xl font-semibold'>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
