import React from 'react';
import group from "../assets/Group1.png"
import group2 from "../assets/Group2.png"
import group3 from "../assets/Group3.png"

const Process = () => {
  return (
    <>
    <div>
        <p className='font-poppins font-bold text-3xl text-indigo-900'>How It Works</p>
       <div className='flex sm:flex-col lg:flex-row'>
       <div className='flex flex-col justify-evenly'>
            <img src={group} alt="group" />
            <p className='font-poppins font-bold text-3xl text-indigo-900 p-2'>Submit your<br/>document</p>
            <p className='font-poppins font-medium text-xl text-black p-2'>Complete the form displayed on <br/>our 'Submit Document' page.</p>
        </div>
       
        <div className='flex flex-col justify-evenly'>
            <img src={group2} alt="group" />
            <p className='font-poppins font-bold text-3xl text-indigo-900 p-2'>We proofread & edit<br/>your text</p>
            <p className='font-poppins font-medium text-xl text-black p-2'>An appropriate editor will set to<br/> work on your document as soon <br/>as your payment has been<br/> approved.</p>
        </div>
        <div className='flex flex-col justify-evenly'>
            <img src={group} alt="group3" />
            <p className='font-poppins font-bold text-3xl text-indigo-900 p-2'>We return your<br/>document</p>
            <p className='font-poppins font-medium text-xl text-black p-2'>You will be sent two different<br/> electronic versions of your<br/> document via email along with <br/>separate 'comments' document.</p>
        </div>
       </div>
    </div>
    </>
  )
}

export default Process