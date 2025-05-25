import React from 'react'
import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Register Account</h2>
                <form>
                    <div className="mb-4">
                        <label className="block mb-1 text-gray-700">Name</label>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-1 text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder="********"
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
