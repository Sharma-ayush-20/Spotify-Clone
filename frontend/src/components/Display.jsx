import React, { useEffect, useRef } from 'react'
import { Routes , Route, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

function Display() {

  const displayRef = useRef()
  const location = useLocation()
  const isAlbum = location.pathname.includes("album")
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const bgColor = albumsData[Number(albumId)].bgColor;

  useEffect(() => {
    if(isAlbum){
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`
    }
    else{
      displayRef.current.style.background = `#121212`
    }
  }) 
  
  return (
    <div className='w-[100%] px-6 m-2 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'
    ref={displayRef}>
        <Routes>
            <Route path='/' element={<DisplayHome/>}/>
            <Route path='/album/:id' element={<DisplayAlbum/>}/>
        </Routes>
    </div>
  )
}

export default Display