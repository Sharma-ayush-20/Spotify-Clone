import express from "express"
import { addSong, listSong } from "../controllers/songController.js"
import upload from "../middlewares/multer.js"

const songRouter = express.Router()

songRouter.route('/add').post(
    upload.fields([
        { name: 'image', maxCount: 1 },
        { name: 'audio', maxCount: 1 },
    ]),
    addSong)
songRouter.route('/list').get(listSong)

export default songRouter