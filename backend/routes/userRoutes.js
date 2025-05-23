import express from 'express'
import { createUser, getUsers, loginUser } from '../controllers/userControllers.js'

const user_router = express.Router()

user_router.get('/', getUsers)
user_router.post('/create', createUser)
user_router.post('/login', loginUser)

export default user_router