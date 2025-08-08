import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios';
import { url } from '../App';
import { toast } from 'react-toastify';

function AddAlbum() {

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [bgColor, setBgColor] = useState('#000000');
  const [image, setImage] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('desc', desc);
      formData.append('bgColor', bgColor);
      formData.append('image', image);

      const response = await axios.post(`${url}/api/album/add`, formData)

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDesc("");
        setBgColor("#000000");
        setImage(false)
      }
      else {
        toast.error("Something went wrong")
      }

    } catch (error) {
      toast.error("Error Occurred")
    }
    setLoading(false)
  }

  return (
    <>
      {
        loading
          ? (
            <div className='grid place-item-center min-h-[80vh]'>
              <div className='w-16 h-16 border-4 border-gray-400 border-t-green-800 animate-spin rounded-full place-self-center'>

              </div>
            </div>
          )
          : (
            <form onSubmit={onSubmitHandler} className='flex flex-col gap-8 items-start text-gray-600'>

              <div className='flex flex-col gap-4'>
                <p>Upload Image</p>
                <input onChange={(e) => setImage(e.target.files[0])} type="file" hidden id='image' accept='image/*' />
                <label htmlFor="image" className='flex justify-center items-center'>
                  <img src={image ? URL.createObjectURL(image) : assets.upload} alt="" className='w-10' />
                </label>
              </div>

              <div className='flex flex-col gap-2.5'>
                <p>Album name</p>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Type Here' className='bg-transparent outline-green-600 border-1 border-gray-400 px-2.5 py-1 w-[max(40vw, 250px)]' />
              </div>

              <div className='flex flex-col gap-2.5'>
                <p>Album description</p>
                <input value={desc} onChange={(e) => setDesc(e.target.value)} type="text" placeholder='Type Here' className='bg-transparent outline-green-600 border-1 border-gray-400 px-2.5 py-1 w-[max(40vw, 250px)]' />
              </div>

              <div className='flex flex-col gap-3'>
                <p>Background Colour</p>
                <input defaultValue='#000000' type="color" onChange={(e) => setBgColor(e.target.value)} />
              </div>

              <button type="submit" className='px-14 text-base bg-black text-white py-1 cursor-pointer'>ADD</button>

            </form>
          )
      }
    </>
  )
}

export default AddAlbum