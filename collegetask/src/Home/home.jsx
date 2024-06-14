import React from 'react';
import Arrow from "../assets/arrow.png";
import proof from '../assets/proof.png'; // Assuming the image is in the assets folder

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-8 sm:space-y-0 sm:space-x-16">
        <div className="flex flex-col w-full sm:w-1/2 px-4">
          <h3 className="text-green-500 font-poppins font-semibold text-2xl">WE ARE PROFESSIONAL</h3>
          <h2 className="font-poppins font-bold text-4xl text-indigo-900 sm:text-5xl mt-2">
            We offer professional <br className="lg:hidden"/>Proofreading and Editing<br className="lg:hidden"/> services for students and<br className="lg:hidden"/> professionals
          </h2>
          <p className="font-poppins text-gray-500 font-normal text-lg mt-4">
            Proofers offer a wide variety of tailor-made services to meet your individual needs. Proofers offer a number of core services which include proofreading and copy-editing (thesis, dissertations, essays reports), document formatting and plagiarism checking. All our editors are SfEP members and hold at least a Master's degree from a reputable UK University.
          </p>
          <div className="mt-6">
            <button className="border rounded-md bg-green-500 flex items-center justify-center px-4 py-2 text-white font-poppins font-semibold text-xl">
              Get Started
             <img src={Arrow} alt="Arrow" className='ml-2' />
            </button>
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <img src={proof} alt="proof" className="w-full sm:my-8" />
        </div>
      </div>
    </div>
  );
};

export default Home;
