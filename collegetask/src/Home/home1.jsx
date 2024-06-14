import React from 'react';
import download from "../assets/download.png"

const Home1 = () => {
  return (
    <>
    <div className='bg-gradient-to-r from-indigo-900 to-indigo-100 flex align-items justify-around  '>
        <div className='text-white flex flex-col p-8 my-20 '>
            <p className='font-inter font-medium text-2xl my-2'>WE OFFER PROFESSIONAL PROOFREADING</p>
            <h1 className="font-inter font-bold lg:text-6xl my-2 sm:text-4xl">Professional Editing &<br />
Proofreading Services<br />
at Your Fingertips</h1>
<div className='flex md:my-4 sm:my-2'>
    <button className='text-2xl text-green-500  p-2 font-bold bg-white  hover:bg-green-500 hover:text-white border  rounded-md m-2'>Calculate Price</button>

    <button className='text-2xl text-green-500  p-2 font-bold bg-white  hover:bg-green-500 hover:text-white border  rounded-md m-2'>Free Samples</button>
</div>
            </div>
            <div className="  my-auto hidden sm:block lg:block md:block   p-8">
    <img src={download} alt="download" className="w-full" />
</div>


    </div>
    </>
  )
}

export default Home1
