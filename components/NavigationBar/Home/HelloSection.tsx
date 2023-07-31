import React from 'react'

const HelloSection = () => {
  return (
    <section className="px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[55%_45%] mt-10 md:py-[50px]">
        <div className='flex flex-col justify-center items-start mb-4'>
            {/* subtitle */}
            {/* <div className='font-bold uppercase text-sm mb-4'>Lorem ipsum dolor sit amet</div> */}
            {/* title */}
            <h1 className='mb-5 text-3xl md:text-5xl font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing </h1>
            {/* content */}
            <p className='mb-6 opacity-75 max-w-[500px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque fugit reprehenderit cumque expedita adipisci aliquid. Non, eaque! Quae, laborum deleniti.</p>
            <button className="py-2.5 px-5 mr-2 text-lg font-medium bg-green-400 text-gray-900 rounded-md bg-primary mb-4 md:mb-0 w-full md:w-[200px]">Contact Us</button>
        </div>
        <div className='grid justify-end'>
            <img  src="https://placehold.co/600x400" alt="" />
        </div>
    </section>
  )
}

export default HelloSection
