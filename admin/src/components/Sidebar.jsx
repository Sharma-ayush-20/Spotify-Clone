import React from 'react'
import { assets } from '../assets/assets.js'
import { NavLink, useNavigate } from 'react-router-dom'

function Sidebar() {

    return (
        <div className='bg-[#003A10] min-h-screen pl-[4vw]'>
            {/* top section  */}
            <NavLink className='flex pr-2' to='/'>
                <img src={assets.spotify_logo} alt="" className='mt-5 w-[max(10vw, 100px)]' />
                <h1 className='text-white font-bold text-[25px] mt-6 px-3 hidden md:block'>Spotify</h1>
            </NavLink>

            {/* list all  */}
            <div className='flex flex-col gap-5 mt-10'>

                <NavLink to='/add-song' className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#00FF58] text-sm font-medium'>
                    <img src={assets.addsong} alt="" className='w-6'/>
                    <p className='hidden sm:block cursor-pointer'>Add Song</p>
                </NavLink>

                <NavLink to='/list-song' className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#00FF58] text-sm font-medium'>
                    <img src={assets.music} alt="" className='w-5'/>
                    <p className='hidden sm:block cursor-pointer'>List Song</p>
                </NavLink>

                <NavLink to='/add-album' className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#00FF58] text-sm font-medium'>
                    <img src={assets.addalbum} alt="" className='w-6'/>
                    <p className='hidden sm:block cursor-pointer'>Add Album</p>
                </NavLink>

                <NavLink to='/list-album' className='flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#00FF58] text-sm font-medium'>
                    <img src={assets.album} alt="" className='w-6'/>
                    <p className='hidden sm:block cursor-pointer'>List Album</p>
                </NavLink>

            </div>

        </div>
    )
}

export default Sidebar