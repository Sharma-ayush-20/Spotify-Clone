import React from 'react'
import {assets} from '../assets/assets.js'
import { useNavigate } from 'react-router-dom'

function Sidebar() {
    const navigate = useNavigate()
  return (
    <div className='h-full p-2 w-[25%] text-white flex-col gap-2 hidden lg:flex'>
        {/* 1st Container  */}
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
            {/* Home  */}
            <div onClick={() => navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.home_icon} alt="" />
                <p className='font-bold'>Home</p>
            </div>
            {/* Search  */}
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.search_icon} alt="" />
                <p className='font-bold'>Search</p>
            </div>

        </div>

        {/* 2nd Container */}
        <div className='bg-[#121212] h-[85%] rounded'>
            {/* 1st block  */}
            <div className='p-4 flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img className='w-8' src={assets.stack_icon} alt="" />
                    <p className='font-semibold'>Your Library</p>
                </div>
                <div className='flex items-center gap-3'>
                    <img className='w-5' src={assets.arrow_icon} alt="" />
                    <img className='w-5' src={assets.plus_icon} alt="" />
                </div>
            </div>

            {/* 2nd block  */}
            <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                <h1 className='font-bold'>Create your first playlist</h1>
                <p className='font-medium text-sm mb-4'>it's easy we will help you</p>
                <button className='bg-white text-black px-4 py-1.5 font-bold rounded-full text-[15px]'>Create playlist</button>
            </div>

            {/* 3rd block  */}
            <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
                <h1 className='font-bold'>Let's find some podcasts to follow</h1>
                <p className='font-medium text-sm mb-4'>We'll keep you updated on new episodes</p>
                <button className='bg-white text-black px-4 py-1.5 font-bold rounded-full text-[15px]'>Browse podcasts</button>
            </div>

        </div>

    </div>
  )
}

export default Sidebar