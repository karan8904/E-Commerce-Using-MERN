import express from 'express'
import { createUser } from '../controllers/userControllers.js'

const user_router = express.Router()

user_router.post('/create', createUser)

export default user_router