import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav>
        <ul className='flex gap-6 font-semibold text-black-500 justify-center bg-slate-200 p-6 mb-2 shadow-md'>
            <li className='hover:text-green-600 hover:border-b-2 hover:border-green-600 transition ease-in-out duration-700'><Link to="/">Home</Link></li>
            <li className='hover:text-green-600 hover:border-b-2 hover:border-green-600 transition ease-in-out duration-700'><Link to="/email-subscription">Email Subscribe Card</Link></li>
            <li className='hover:text-green-600 hover:border-b-2 hover:border-green-600 transition ease-in-out duration-700'><Link to="/pricing-grid">Pricing Grids</Link></li>
            <li className='hover:text-green-600 hover:border-b-2 hover:border-green-600 transition ease-in-out duration-700'><Link to="/product-modal">Product Modal</Link></li>
            <li className='hover:text-green-600 hover:border-b-2 hover:border-green-600 transition ease-in-out duration-700'><Link to="/image-gallery">Image Gallery</Link></li>
            <li className='hover:text-green-600 hover:border-b-2 hover:border-green-600 transition ease-in-out duration-700'><Link to="/login-modal">Login Modal</Link></li>
        </ul>
    </nav>
  )
}
