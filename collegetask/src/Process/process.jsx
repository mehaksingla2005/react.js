import React from 'react';
import Card from "../Process/card.jsx"
import Re from "../assets/re.png"
import Group2 from "../assets/gr.png"
import Group from "../assets/group.png"


const Process = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center">
        <p className='font-poppins font-bold text-6xl text-indigo-900 p-16 '>How It Works</p>
        <div className="container mx-auto px-4 py-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <Card
    title="Submit your document"
    description="Complete the form displayed on our 'Submit Document' page."
    imageUrl={Re}
  />
  <Card
    title="We proofread & edit your text"
    description="An appropriate editor will set to work on your document as soon as your payment has been approved."
    imageUrl={Group2}
  />
  <Card
    title="We return your document"
    description="You will be sent two different electronic versions of your document via email along with separate 'comments' document."
    imageUrl={Group}
  />
</div>
</div>
    </div>
    </>
  )
}

export default Process
