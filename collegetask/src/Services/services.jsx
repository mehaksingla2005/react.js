import React from 'react'
import Card from "../Services/card.jsx"
import Proof from "../assets/proofreading.png"
import copy from "../assets/copyediting.png"
import Document from "../assets/Document.png"
import Arrow from "../assets/arrow.png"


const Services = () => {
  return (
    <>
    <div>
        
        <p className="font-poppins font-bold text-4xl text-indigo-900 sm:text-5xl mt-20 mx-auto text-center my-16 ">We Provide Best Proofreading <br/>& Editing Services</p>
    </div>
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card
          title="ProofReading"
          description="Our Proofreaders correct gramm
          -atical errors that you may have overlooked including punctuation
          verb tense, spelling, and"
          imageUrl={Proof}
        />
        <Card
          title="Copy Editing"
          description="Our Editors will enhance the clarity of your English and re-write your text where necessary. We will help ensure, your argument"
          imageUrl={copy}
        />
        <Card
          title="Document Formatting"
          description="Dynamic table of references (Contents Page, List of Figures, List of tables), page numbering, consistent text, headings etc…"
          imageUrl={Document}
        />
      </div>
    </div>
    <div className='flex justify-center items-center  mx-auto py-8 mb-12'>
      <button className='bg-green-500 border rounded-lg p-4 flex justify-between'>
        <p className='text-white font-poppins font-semibold text-xl p-2 mr-4'>View All</p>
        <img src={Arrow} alt="Arrow"  className="h-10 w-10 p-2"/>

      </button>
    </div>

    </>
  )
}

export default Services
