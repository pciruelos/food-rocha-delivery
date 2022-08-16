import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Cards */}
        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Pebete Veggi</p>
                <p className='px-2'>Sandwich</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 '>Order Now</button>
            </div>
            <img src="https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' />
        </div>
        {/* Cards */}
        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Clasic Bendita</p>
                <p className='px-2'>Burger</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 '>Order Now</button>
            </div>
            <img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' />
        </div>
        {/* Cards */}
        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Burrito Vegano</p>
                <p className='px-2'>Wrapp</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 '>Order Now</button>
            </div>
            <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' />
        </div>
    </div>
  )
}

export default HeadlineCards