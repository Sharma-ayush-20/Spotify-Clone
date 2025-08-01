import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets.js'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem.jsx'

function DisplayHome() {
    return (
        <>
            <Navbar />

            {/* albumdata  */}
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>     
                <div className='flex overflow-auto'>
                    {
                        albumsData.map((item, index) => (
                            <AlbumItem key={index} name={item.name} desc={item.desc} image={item.image} id={item.id} />
                        ))
                    }
                </div>
            </div>
            
            {/* songlist  */}
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>     
                <div className='flex overflow-auto'>
                    {
                        songsData.map((item, index) => (
                            <SongItem key={index} name={item.name} desc={item.desc} image={item.image} id={item.id} />
                        ))
                    }
                </div>
            </div>


        </>
    )
}

export default DisplayHome