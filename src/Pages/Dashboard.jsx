import React from 'react'
import NavBar from '../Components/NavBar'
import AppBar from '../Components/AppBar'
import { Link, Outlet } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'
import PostsMedium from '../Components/Posts/PostsMedium'


export default function Dashboard() {
    return (
        <div className='h-screen w-full flex'>
            <div className='h-full w-72 bg-gray-200 px-4 py-8 justify-between flex flex-col'>

                <div className='flex space-x-2 items-center bg-white p-4 rounded-md'>
                    <div className='h-10 w-10 p-2 rounded-md bg-gradient-to-tr from-blue-800 to-orange-800 flex justify-center items-center'>
                        <img src='/logo.png' className='brightness-0 invert' />
                    </div>
                    <Link to="/" className='uppercase font-Mt font-extrabold tracking-wider text-2xl'>Programiz</Link>
                </div>

                <div className='p-4 flex flex-col items-center space-y-8 bg-white rounded-md'>
                    <div className='w-full flex flex-col items-center font-Mt space-y-4 text-center'>
                        <img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/moscot-inline-1658958010.jpg' className='h-24 w-24 rounded-full object-cover' />
                        <div>
                            <h1 className='font-bold text-2xl'>Samuel Voight</h1>
                            <h1 className='font-semibold'>Joined On 07/08/2023</h1>
                            <h1 className='font-semibold'>223 Posts</h1>
                        </div>
                    </div>

                    <div className='p-4 w-full text-center space-y-4 flex flex-col'>
                        <Link to="" className='px-4 py-2 font-Mt font-bold uppercase border-2 border-blue-700 rounded-md hover:bg-blue-700 hover:text-white cursor-pointer'>My Posts</Link>
                        <Link to="CreatePost" className='px-4 py-2 font-Mt font-bold uppercase border-2 border-blue-700 rounded-md hover:bg-blue-700 hover:text-white cursor-pointer'>New Post</Link>
                    </div>
                </div>

                <div className='flex px-4 py-2 border-2 border-blue-700 hover:bg-blue-700 cursor-pointer hover:text-white justify-between font-Mt font-bold'>
                    <h1>Logout</h1>
                    <FiLogOut size={24} />
                </div>
            </div>
            <div className='h-full w-full flex flex-col'>
                <Outlet />
            </div>
        </div>
    )
}
