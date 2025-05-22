import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express()

dotenv.config()
app.use(cors())

app.get('/', (req, res)=>{
    res.send("App is running...")
})

app.listen(5000, () => {
    console.log("App is running on: http://localhost:5000")
})