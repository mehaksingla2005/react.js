import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import proof from '../assets/proof.png'; // Assuming the image is in the assets folder

const Home = () => {
  return (
    <>
    <div className="container mx-auto px-4 py-16 h-screen flex items-center justify-center">
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-8 sm:space-y-0 sm:space-x-16">
        <div className="flex flex-col w-full sm:w-1/2 px-4">
          <h3 className="text-green-500 font-poppins font-semibold text-2xl">WE ARE PROFESSIONAL</h3>
          <h2 className="font-poppins font-bold text-5xl mt-2">We offer professional <br/>Proofreading and Editing<br/> services for students and<br/> professionals</h2>
          <p className="font-poppins text-gray-500 font-normal text-lg mt-4">
            Proofers offer a wide variety of tailor-made services to meet your individual needs. Proofers offer a number of core services which include proofreading and copy-editing (thesis, dissertations, essays reports), document formatting and plagiarism checking. All our editors are SfEP members and hold at least a Master's degree from a reputable UK University.
          </p>
          <div>
          <button className="border rounded-md bg-green-500 flex items-center justify-center px-4 py-2 mt-8">
            <p className="text-white font-poppins font-semibold text-xl">Get Started</p>
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </button>
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <img src={proof} alt="proof" className="w-full " />
        </div>
      </div>
    </div>
    
    
    
    </>
  );
};

export default Home;