import express from "express"
import { addAlbum, listAlbum, removeAlbum } from "../controllers/albumController.js"
import upload from "../middlewares/multer.js"

const albumRouter = express.Router()

albumRouter.route("/add").post(upload.single('image') , addAlbum)
albumRouter.route("/list").get(listAlbum)
albumRouter.route("/remove").post(removeAlbum)

export default albumRouter