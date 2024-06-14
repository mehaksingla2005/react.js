import React from 'react';
import ProofImage from "../assets/process.png"; // Ensure this is the correct path to your image
import Arrow from "../assets/arrow.png"; // Ensure this is the correct path to your image

const Process1 = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 sm:space-y-0 sm:space-x-16">
          <div className="w-full h-100% sm:w-1/2">
            <img src={ProofImage} alt="proof" className="w-full sm:my-8" />
          </div>
          <div className="flex flex-col w-full sm:w-1/2 px-4">
            <h3 className="text-green-500 font-poppins font-semibold text-2xl">
              WE ARE PROFESSIONAL
            </h3>
            <h2 className="font-poppins font-bold text-4xl text-indigo-900 sm:text-5xl mt-4">
              Who We Are
            </h2>
            <p className="font-poppins text-gray-500 font-medium text-xl my-6">
              We offer fast, affordable and quality proofreading services for students and professionals. We proofread all documents ranging from essays, assignments, dissertations, speeches, proposals, presentations, theses to even short stories.
            </p>
            <div className="mt-6">
              <button className="border rounded-md bg-green-500 flex items-center justify-center px-4 py-2 text-white font-poppins font-semibold text-xl">
                Find Out More
                <img src={Arrow} alt="arrow" className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process1;
