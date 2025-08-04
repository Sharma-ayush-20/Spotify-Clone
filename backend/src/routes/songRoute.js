import express from "express"
import { addSong, listSong } from "../controllers/songController.js"

const songRouter = express.Router()

songRouter.route('/add').post(addSong)
songRouter.route('/add').get(listSong)

export default songRouter