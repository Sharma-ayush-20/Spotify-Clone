import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

function DisplayAlbum() {

  const { id } = useParams()
  const albumData = albumsData[id]
  const { playWithId } = useContext(PlayerContext)

  return (
    <>
      <div>
        <Navbar />

        <div className='flex flex-col mt-10 gap-8 md:flex-row md:items-end'>

          <img src={albumData.image} alt="" className='w-48 rounded' />

          <div className='flex flex-col'>
            <p>Playlist</p>
            <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
            <h4>{albumData.desc}</h4>
            <p className='mt-1'>
              <img src={assets.spotify_logo} alt="" className='inline-block w-5' />
              <b>&nbsp;Spotify</b>
              &nbsp;&nbsp;&bull;&nbsp;&nbsp;1,323,154 likes
              <b>&nbsp;&nbsp;&bull;&nbsp;&nbsp;50 songs,</b>
              &nbsp;&nbsp;about 2 hr 30 min
            </p>
          </div>

        </div>

      </div>

      {/* table section  */}
      <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
        <p><b className='mr-4'>#</b>Title</p>
        <p>Album</p>
        <p className='hidden sm:block'>Date Added</p>
        <img src={assets.clock_icon} alt="" className='m-auto w-4'/>
      </div>

      <hr />
      {
        songsData.map((item, index) => (
          <div onClick={() => playWithId(item.id)}  key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 items-center p-2 hover:bg-[#ffffff2b] cursor-pointer text-[#a7a7a7]'>
            <p className='text-white'>
                <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
                <img src={item.image} alt="" className='inline w-10 mr-5'/>
                {item.name}
            </p>
            <p className='text-[15px]'>
              {albumData.name}
            </p>
            <p className='text-[15px] hidden sm:block'>
              5 days ago
            </p>
            <p className='text-[15px] text-center'>
              {
                item.duration
              }
            </p>
          </div>
        ))
      }
    </>
  )
}

export default DisplayAlbum