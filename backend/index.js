import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

const app = express()

dotenv.config()
app.use(cors())

app.get('/', (req, res)=>{
    res.send("App is running...")
})

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