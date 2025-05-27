import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function Register() {
    const [ formData, setFormData ] = useState({ name:"", email:"", password:"" })

    const navigate = useNavigate()
    const handleOnChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log(formData)
        try {
            const response = await axios.post('http://localhost:5000/users/create', formData)
            alert("User created successfully. Please login using this info...")
            navigate('/login')
        } catch (error) {
            alert(error.response.data.message)
            console.log(error)
            navigate('/register')
        }
        setFormData({ name:"", email:"", password:"" })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Register Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-1 text-gray-700">Name</label>
                        <input
                            type="text" name='name'
                            placeholder="Full Name" onChange={handleOnChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 text-gray-700" >Email</label>
                        <input
                            type="email" name='email'
                            placeholder="you@example.com" onChange={handleOnChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-1 text-gray-700">Password</label>
                        <input
                            type="password" name='password'
                            placeholder="********" onChange={handleOnChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                    >
                        Register
                    </button>
                    <p className="text-sm text-center text-gray-600 mt-4">
                        Already have an account?{' '}
                        <Link to="/login" className="text-green-600 hover:underline">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
