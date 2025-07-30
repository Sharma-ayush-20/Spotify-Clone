import React from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'

function App() {
  return (
    <>
    <div className='h-screen bg-black'>

      {/* sidebar and Home */}
      <div className='h-[90%] flex'>
        <Sidebar/>
        <Display/> 
      </div>

      {/* music player  */}
      <Player/>
      
    </div>
    </>
  )
}

export default App