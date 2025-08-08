import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { url } from '../App';
import { toast } from 'react-toastify';

function AddSong() {

  const [image, setImage] = useState(false);
  const [song, setSong] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [album, setAlbum] = useState("none")
  const [loading, setLoading] = useState(false);
  const [albumData, setAlbumData] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {

      const formData = new FormData();
      formData.append('name', name);
      formData.append('desc', description);
      formData.append('image', image);
      formData.append('audio', song);
      formData.append('album', album);

      const response = await axios.post(`${url}/api/song/add`, formData)

      if (response.data.success) {
        toast.success(response.data.message)
        setName("");
        setDescription("");
        setImage(false);
        setAlbum("none");
        setSong(false);
      }
      else {
        toast.error("Something went wrong");
      }

    } catch (error) {
      toast.error("Error Occurred");
    }
    setLoading(false)
  }

  const loadAlbumData = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`);
      if (response.data.success) {
        setAlbumData(response.data.albums)
      } else {
        toast.error("Unable to load album data")
      }
    } catch (error) {
      toast.error("Error Occured")
    }
  }

  useEffect(() => {
    loadAlbumData();
  }, [])

  return (
    <>
      {
        loading
          ? (
            <div className='grid place-items-center min-h-[80vh]'>
              <div className='w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin'>

              </div>
            </div>
          )
          : (
            <form onSubmit={onSubmitHandler} className='flex flex-col items-start gap-8 text-gray-600'>

              {/* upload song and image */}
              <div className='flex gap-8'>

                <div className='flex flex-col gap-4'>
                  <p>Upload Song</p>
                  <input onChange={(e) => setSong(e.target.files[0])} type="file" id='song' accept='audio/*' hidden />
                  <label htmlFor="song" className='flex items-center justify-center'>
                    <img src={song ? assets.correct : assets.upload} alt="" className='w-10 cursor-pointer' />
                  </label>
                </div>

                <div className='flex flex-col gap-4'>
                  <p>Upload Image</p>
                  <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' accept='image/*' hidden />
                  <label htmlFor="image" className='flex justify-center items-center'>
                    <img src={image ? URL.createObjectURL(image) : assets.image} alt="" className='w-10 cursor-pointer' />
                  </label>
                </div>

              </div>

              <div className='gap-2.5 flex flex-col'>
                <p>Song name</p>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className='border-gray-400 bg-transparent outline-green-600 w-[max(40vw, 250px)] border-2 px-5 py-1 focus:border-green-600' placeholder='Type Here' required />
              </div>

              <div className='gap-2.5 flex flex-col'>
                <p>Song description</p>
                <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" className='border-gray-400 bg-transparent outline-green-600 w-[max(40vw, 250px)] border-2 px-5 py-1 focus:border-green-600' placeholder='Type Here' required />
              </div>

              <div className='flex flex-col gap-2.5'>
                <p>Album</p>
                <select onChange={(e) => setAlbum(e.target.value)} defaultValue={album} className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[150px]'>
                  <option value="none">None</option>
                  {
                    albumData.map((item, index) => (<option key={index} value={item.name}>{item.name}</option>))
                  }
                </select>
              </div>

              <button type='submit' className='text-base bg-black text-white px-14 py-2.5 cursor-pointer'>ADD</button>

            </form>
          )
      }
    </>
  )

}

export default AddSong