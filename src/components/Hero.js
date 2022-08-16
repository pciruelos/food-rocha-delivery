import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/* overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/80 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl md:text-6xl font-bold'>The Best <span className='text-green-500'>Vegetarian</span></h1>
                <span className='px-4 text-4xl md:text-6xl  font-bold'><span className='text-green-500'>Food </span> in Malaga</span>
            </div>
            <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
    </div>
  )
}

export default Hero