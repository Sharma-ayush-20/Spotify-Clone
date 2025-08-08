import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { url } from '../App'

function ListAlbum() {

  const [data, setData] = useState([])

  const fetchAlbum = async () => {
    try {

      const response = await axios.get(`${url}/api/album/list`)

      if(response.data.success){
        setData(response.data.albums)
      }
      
    } catch (error) {
      toast.error("Error Occured")
    }
  }

  const removeAlbum = async (id) => {
    try {
      const response = await axios.post(`${url}/api/album/remove`, { id });
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchAlbum();
      }
    } catch (error) {
      toast.error("Error Occured");
    }
  }

  useEffect(() => {
    fetchAlbum();
  }, [])

  return (
    <div>
      <p>All Album List</p>
      <br />
      
      <div>
        {/* header  */}
        <div className='sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center p-3 gap-2.5 border border-gray-300 text-sm mr-5 bg-gray-100'>
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>BgColor</b>
          <b>Action</b>
        </div>

      {
        data.map((item, index) => {
          return (
            <div key={index} className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5'>
              <img src={item.image} alt="" className='w-12' />
                <p>{item.name}</p>
                <p>{item.desc}</p>
                <input type="color" defaultValue={item.bgColor} />
                <p className='cursor-pointer' onClick={() => removeAlbum(item._id)}>X</p>
            </div>
          )
        })
      }


      </div>

    </div>
  )
}

export default ListAlbum