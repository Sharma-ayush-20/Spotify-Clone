import { v2 as cloudinary } from 'cloudinary'
import songModel from '../models/songModel.js';

export const addSong = async (req, res) => {
    try {

        const name = req.body.name;
        const desc = req.body.desc;
        const album = req.body.album;
        const imageFile = req.files.image[0];
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" })
        const audioFile = req.files.audio[0];
        const audioUpload = await cloudinary.uploader.upload(audioFile.path, { resource_type: "video" })
        const duration = `${Math.floor(audioUpload.duration / 60)}:${Math.floor(audioUpload.duration % 60)}`

        const songData = {
            name, desc, album, image: imageUpload.secure_url, file: audioUpload.secure_url, duration
        }

        const song = songModel(songData)
        await song.save();

        return res.json({
            success: true,
            message: "Song Added"
        })

    } catch (error) {
        console.log("Error ", error)
        return res.json({
            success: false,
            message: error.message
        })
    }
}

export const listSong = async (req, res) => {
    try {

        const allSongs = await songModel.find({})

        return res.json({
            success: true,
            message: allSongs,
        })

    } catch (error) {
        console.log("Error ", error)
        return res.json({
            success: false,
            message: error.message
        })
    }
}