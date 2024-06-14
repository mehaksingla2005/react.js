// Card.js

import React from 'react';

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg  p-4">
      <div className="bg-indigo-900 border rounded-lg overflow-hidden shadow-lg p-8 mr-72 ml-8">
      <img src={imageUrl} alt={title} className="w-16 h-16 object-cover" />
      </div>
      <div className="p-6">
        <h2 className="font-bold text-4xl mb-4 text-indigo-900 ">{title}</h2>
        <p className="text-gray-600 font-poppins font-normal text-xl lg:mb-16">{description}</p>
      </div>
    </div>
  );
};

export default Card;
