import React from 'react'

const Middle = () => {
  return (
    <>
    <div className='flex'>
    <p className='font-poppins font-bold text-4xl text-white mx-auto text-center '>We Provide Quality service at an affordable price!</p>
    <p className='font-poppins font-bold text-4xl text-white mx-auto text-center '>Starting at: £6.99 per 100 words & Full money back guarantee!</p>
    <div className='flex p-2'>
        <button className='font-poppins font-semibold text-xl p-2 text-green-500 bg-white border rounded-lg hover:bg-green-500 hover:text-white '>Calculate Price</button>
        <button className='font-poppins font-semibold text-xl p-2 text-green-500 bg-white border rounded-lg hover:bg-green-500 hover:text-white '>Free Samples</button>
        </div>
    </div>
        </>
  )
}

export default Middle