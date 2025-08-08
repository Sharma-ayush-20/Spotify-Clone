import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext'

function App() {

  const { audioRef, track, songsData } = useContext(PlayerContext)

  return (
    <>
      <div className='h-screen bg-black'>
        {
          songsData?.length !== 0
            ? <>
              {/* sidebar and Home */}
              <div className='h-[90%] flex'>
                <Sidebar />
                <Display />
              </div>

              {/* music player  */}
              <Player />
            </>
            :
            null
        }


        <audio
          preload='auto'
          src={track ? track.file : songsData[0]}
          ref={audioRef}
        ></audio>

      </div>
    </>
  )
}

export default App