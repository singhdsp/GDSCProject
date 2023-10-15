import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFound() {
    return (
        <div className='h-full w-full flex flex-col justify-center items-center space-y-3'>
            <img src='/404.jpg' className='h-[30rem] object-contain' />
            <h1 className='font-bold font-Mt uppercase text-2xl'>Oops! Cant Find That</h1>
            <Link to="/" className='uppercase font-bold font-Mt px-4 py-2 bg-blue-700 hover:bg-blue-900 text-white rounded-full cursor-pointer'>Go Home</Link>
        </div>
    )
}
