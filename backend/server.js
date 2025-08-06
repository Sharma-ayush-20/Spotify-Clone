import express from "express"
import cors from "cors"
import "dotenv/config"
import songRouter from "./src/routes/songRoute.js"
import connectDB from "./src/config/mongodb.js"
import connectCloudinary from "./src/config/cloudinary.js"
import albumRouter from "./src/routes/albumRoute.js"

//app config
const app = express()
const PORT = process.env.PORT || 4000

connectCloudinary()

//middlewares
app.use(express.json())
app.use(cors({
    // origin: "http://localhost:5173"
}))

//initializing routes
app.use('/api/song', songRouter)
app.use('/api/album', albumRouter)

app.get("/", (req, res) => {
    res.send("<h1>API working.</h1>")
})

connectDB().then(() => {
    console.log("Database Connected Success")
    app.listen(PORT, () => {
        console.log(`Server is Listening at http://localhost:${PORT}`)
    })
}).catch((error) => {
    console.log("Database Connection Failed", error)
})
