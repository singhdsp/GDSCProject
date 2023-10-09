import React from 'react'
import { MdEmail, MdOutlineClose, MdPassword, MdTitle } from 'react-icons/md';


export default function CreatePost() {
    return (
        <div>
            <div className='px-5 py-3 bg-blue-700 text-white font-Mt'>
                <h1 className='font-bold text-xl'>Create Posts</h1>
            </div>
            <div className='flex-1 flex flex-col justify-center items-center p-10 space-y-4'>
                <div className='w-full px-10 font-Mt relative'>
                    <label for="Email" className='font-semibold uppercase'>Title</label>
                    <input type='text' name='Email' id="Email" className='bg-gray-200 w-full rounded-md outline-none border-none py-3 pl-12 pr-4' />
                    <MdTitle size={28} className='absolute left-12 bottom-2.5' />
                </div>
                <div className='px-10 w-full font-Mt'>
                    <label for="body" className='font-semibold uppercase'>Body</label>
                    <textarea name="body" id="body" cols="30" rows="10" className='bg-gray-200 w-full rounded-md outline-none border-none p-4 resize-none'></textarea>
                </div>
                <div className='w-full px-10'>
                    <h1 className='p-2 text-white uppercase cursor-pointer hover:bg-blue-900 font-Mt font-bold tracking-wider text-center bg-blue-700'>Submit</h1>
                </div>
            </div>
        </div>
    )
}
