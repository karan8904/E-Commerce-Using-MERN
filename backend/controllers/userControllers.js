import User from '../models/userSchema.js'
import bcrypt from 'bcryptjs'

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