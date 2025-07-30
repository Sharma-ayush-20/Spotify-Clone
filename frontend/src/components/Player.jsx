import React from 'react'
import { assets, songsData } from '../assets/assets.js'

function Player() {
    return (
        <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>

            {/* song details  */}
            <div className='hidden lg:flex items-center gap-4'>
                <img src={songsData[0].image} alt="" className='w-12' />

                <div>
                    <p>{songsData[0].name}</p>
                    <p>{songsData[0].desc.slice(0, 12)}</p>
                </div>
            </div>

            {/* music buttons and minutes */}
            <div className='mx-auto flex flex-col items-center gap-1'>

                <div className='flex gap-4'>
                    <img src={assets.shuffle_icon} alt="" className='w-4 cursor-pointer'/>
                    <img src={assets.prev_icon} alt="" className='w-4 cursor-pointer'/>
                    <img src={assets.play_icon} alt="" className='w-4 cursor-pointer'/>
                    <img src={assets.next_icon} alt="" className='w-4 cursor-pointer'/>
                    <img src={assets.loop_icon} alt="" className='w-4 cursor-pointer'/>
                </div>

                <div className='flex gap-5 items-center'>
                    <p>1:06</p>
                    <div className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                        <hr className='h-1 border-none bg-green-800 rounded-full w-30'/>
                    </div>
                    <p>3:20</p>
                </div>

            </div>

            {/* right side dummy icon  */}
            <div className='hidden lg:flex items-center gap-2 opacity-75'>
                <img src={assets.plays_icon} alt="" className='w-4 cursor-pointer'/>
                <img src={assets.mic_icon} alt="" className='w-4 cursor-pointer'/>
                <img src={assets.queue_icon} alt="" className='w-4 cursor-pointer'/>
                <img src={assets.speaker_icon} alt="" className='w-4 cursor-pointer'/>
                <img src={assets.volume_icon} alt="" className='w-4 cursor-pointer'/>

                <div className='w-20 bg-slate-50 h-1 rounded'>

                </div>

                <img src={assets.mini_player_icon} alt="" className='w-4'/>
                <img src={assets.zoom_icon} alt="" className='w-4'/>
                
            </div>

        </div>
    )
}

export default Player