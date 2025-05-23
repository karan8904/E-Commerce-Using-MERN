import User from '../models/userSchema.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const createUser = async (req, res) => {
    try {
        const { name, email, password, isAdmin } = req.body;
        const existingUser = await User.findOne({ email })
        if(existingUser){
            return res.status(400).json({ message: "User with this email is already registered." })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new User({ name, email, password: hashedPassword, isAdmin })
        await user.save()
        res.status(201).json({ message: "User Created.", user: user })
    } catch (error) {
        res.status(500).json({ message: "Cannot create a user.", error: error.message })
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if(!user){
            return res.status(404).json({ message: "User with given email does not exist." })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(400).json({ message: "Password is incorrect. Try again."})
        }
        const token = jwt.sign({
                userId: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin
            },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '30d' }
        )
        res.status(200).json({ message: "Logged in successfully.", token, user: user})
    } catch (error) {
        res.status(400).json({ message: "Login failed." }) 
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json({ users: users })
    } catch (error) {
        res.status(500).json({ message: "Cannot get users.", error: error.message })
    }
}