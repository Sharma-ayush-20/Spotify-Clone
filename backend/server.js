import express from "express"
import cors from "cors"
import "dotenv/config"

//app config
const app = express()
const PORT = process.env.PORT || 4000

//middlewares
app.use(express.json())
app.use(cors({
    // origin: "http://localhost:5173"
}))

app.get("/", (req, res) => {
    res.send("<h1>API working.</h1>")
})

app.listen(PORT, () => {
    console.log(`Server is Listening at http://localhost:${PORT}`)
})