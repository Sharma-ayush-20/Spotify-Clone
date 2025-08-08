import React, { useContext, useEffect, useRef } from 'react'
import { Routes , Route, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { PlayerContext } from '../context/PlayerContext'

function Display() {

  const {albumsData} = useContext(PlayerContext)

  const displayRef = useRef()
  const location = useLocation()
  const isAlbum = location.pathname.includes("album")
  const albumId = isAlbum ? location.pathname.split('/').pop() : "";
  const bgColour = isAlbum && albumsData.length > 0 ? albumsData.find((x) => (x._id === albumId)).bgColor : '#000000'

  useEffect(() => {
    if(isAlbum){
      displayRef.current.style.background = `linear-gradient(${bgColour}, #121212)`
    }
    else{
      displayRef.current.style.background = `#121212`
    }
  }) 
  
  return (
    <div className='w-[100%] px-6 m-2 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'
    ref={displayRef}>
      {
        albumsData.length > 0 
        ? <Routes>
            <Route path='/' element={<DisplayHome/>}/>
            <Route path='/album/:id' element={<DisplayAlbum album={albumsData.find((x) => (x._id === albumId))}/>}/>
        </Routes>
        : null
      }
        
    </div>
  )
}

export default Display