import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className='absolute top-0 left-0 w-full px-4 shadow-2xl flex justify-between items-center text-white bg-[rgba(0,0,0,0.6)]'>
            <div className='flex space-x-2 items-center'>
                <div className='h-10 w-10 p-2 rounded-md bg-gradient-to-tr from-blue-800 to-orange-800 flex justify-center items-center'>
                    <img src='/logo.png' className='brightness-0 invert' />
                </div>
                <Link to="/" className='uppercase font-Mt font-extrabold tracking-wider text-2xl'>Programiz</Link>
            </div>
            <div className='flex space-x-4'>
                <div className='flex'>
                    <Link to="/" className='py-5 px-6 font-bold font-Mt hover:bg-[rgba(59,131,246,0.8)] hover:text-white hover:underline hover:underline-offset-2 cursor-pointer'>Home</Link>
                    <Link to="/" className='py-5 px-6 font-bold font-Mt hover:bg-[rgba(59,131,246,0.8)] hover:text-white hover:underline hover:underline-offset-2 cursor-pointer'>My Posts</Link>
                    <Link to="/" className='py-5 px-6 font-bold font-Mt hover:bg-[rgba(59,131,246,0.8)] hover:text-white hover:underline hover:underline-offset-2 cursor-pointer'>Categories</Link>
                </div>
                <div className='flex items-center space-x-3'>
                    <Link to="/Login" className='py-2 px-4 font-Mt font-bold rounded-md border-2 border-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer'>Sign In</Link>
                    <Link to="/SignUp" className='py-2 px-4 font-Mt font-bold rounded-md border-2 border-green-600 hover:bg-green-600 hover:text-white cursor-pointer'>Sign Up</Link>
                </div>
            </div>
        </div>
    )
}
