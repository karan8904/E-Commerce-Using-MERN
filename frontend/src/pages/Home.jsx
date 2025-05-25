import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container'>
        <div className='mt-7'> 
          <Link>
            <img src="/banner-1.png" alt="" />
          </Link>
        </div>
        <div className='text-center text-4xl mt-12'>
            <h3>Trending Products</h3>
            <div className='w-20 mx-auto my-3' style={{ borderBottom: '2px solid green' }}></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-10 w-2/3 mx-auto">
          <div className="border rounded-xl p-4 shadow hover:shadow-md transition duration-200">
            <img src="/banner-1.png" alt="Product" className="w-full h-48 object-cover rounded-md" />
            <h4 className="text-lg font-semibold mt-2">T-Shirt One Piece</h4>
            <div className="text-yellow-400 mt-1">⭐⭐⭐⭐☆</div>
            <p className="text-green-600 font-bold mt-1">$29.99</p>
          </div>
          <div className="border rounded-xl p-4 shadow hover:shadow-md transition duration-200">
            <img src="/banner-1.png" alt="Product" className="w-full h-48 object-cover rounded-md" />
            <h4 className="text-lg font-semibold mt-2">T-Shirt One Piece</h4>
            <div className="text-yellow-400 mt-1">⭐⭐⭐⭐☆</div>
            <p className="text-green-600 font-bold mt-1">$29.99</p>
          </div>
          <div className="border rounded-xl p-4 shadow hover:shadow-md transition duration-200">
            <img src="/banner-1.png" alt="Product" className="w-full h-48 object-cover rounded-md" />
            <h4 className="text-lg font-semibold mt-2">T-Shirt One Piece</h4>
            <div className="text-yellow-400 mt-1">⭐⭐⭐⭐☆</div>
            <p className="text-green-600 font-bold mt-1">$29.99</p>
          </div>
        </div>
    </div>
  )
}

export default Home