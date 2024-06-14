// Card.js

import React from 'react';
import Arrow from"../assets/arrow.png";

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <img src={imageUrl} alt={title} className="w-full h-72 object-cover  rounded-lg p-4 " />
      <div className="p-6">
        <h2 className="font-bold text-3xl mb-2 text-indigo-900">{title}</h2>
        <p className="text-gray-400 text-xl font-medium py-2">{description}</p>
      </div>
      <div className='border border-1 border-indigo-900 mx-4'></div>
      <div className='flex justify-between px-4'>
        <p className='text-green-500 font-poppins font-medium text-xl m-4'>Find Out More</p>
        <div className='rounded-full bg-green-500 h-10 w-10 flex items-center justify-center m-4'><img src={Arrow} alt="arrow" /></div>
      </div>
    </div>
  );
};

export default Card;
