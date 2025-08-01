import React from 'react'
import { assets } from '../assets/assets.js'
import { useNavigate } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate();
    return (
        <>
        
            <div className='flex items-center justify-between font-semibold w-full'>

                {/* left and right button  */}
                <div className='flex items-center gap-2'>
                    <img onClick={() => navigate(-1)} src={assets.arrow_left} alt="" className='w-8 cursor-pointer bg-black p-2 rounded-2xl' />
                    <img onClick={() => navigate(1)} src={assets.arrow_right} alt="" className='w-8 cursor-pointer bg-black p-2 rounded-2xl' />
                </div>

                {/* explore premium and install app button with user icon */}
                <div className='flex items-center gap-4'>
                    <p className='bg-white text-black rounded-2xl px-4 py-1 text-[15px] hidden md:block'>Explore Premium</p>
                    <p className='bg-black px-3 py-1 rounded-2xl text-[15px] cursor-pointer'>Install App</p>
                    <p className='bg-purple-500 rounded-full text-black w-7 h-7 flex items-center justify-center'>A</p>
                </div>

            </div>

            {/* All music and podcast button  */}
            <div className='flex items-center gap-2 mt-4'>
                <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
                <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
                <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
            </div>

        </>
    )
}

export default Navbar