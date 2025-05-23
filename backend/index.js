import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import user_router from './routes/userRoutes.js'

const app = express()

dotenv.config()
app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    res.send("App is running...")
})

app.use('/user', user_router)

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Database Connected Succsesfully.")
    app.listen(5000, () => {
        console.log("App is running on: http://localhost:5000")
    })
})
.catch((err) => {
    console.log("Error while connecting the database:", err)
})