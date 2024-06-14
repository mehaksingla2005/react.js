import React from 'react';
import download from "../assets/download.png"

const Home1 = () => {
  return (
    <>
    <div className='bg-gradient-to-r from-indigo-900 to-indigo-100 flex align-items justify-around  '>
        <div className='text-white flex flex-col p-8 my-20'>
            <p className='font-inter font-medium text-2xl my-2'>WE OFFER PROFESSIONAL PROOFREADING</p>
            <h1 className="font-inter font-bold text-6xl my-2">Professional Editing &<br />
Proofreading Services<br />
at Your Fingertips</h1>
<div className='flex my-4'>
    <button className='text-2xl text-black  p-2 font-bold bg-white  hover:bg-green-500 hover:text-white border border-black rounded-md m-2'>Calculate Price</button>

    <button className='text-2xl text-black  p-2 font-bold bg-white  hover:bg-green-500 hover:text-white border border-black rounded-md m-2'>Free Samples</button>
</div>
            </div>
            <div className="sm:hidden lg:block md:block p-8">
                <img src={download} alt="download" />
            </div>

    </div>
    </>
  )
}

export default Home1
