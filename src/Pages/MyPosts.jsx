import React from 'react'
import PostsMedium from '../Components/Posts/PostsMedium'
export default function MyPosts() {
    return (
        <>
            <div className='px-5 py-3 bg-blue-700 text-white font-Mt'>
                <h1 className='font-bold text-xl'>My Posts</h1>
            </div>
            <div className='flex-1 flex justify-center items-center p-10'>
                <div className='w-full h-[30rem] overflow-y-scroll space-y-4 px-4'>
                    <PostsMedium />
                    <PostsMedium />
                    <PostsMedium />
                    <PostsMedium />
                    <PostsMedium />
                    <PostsMedium />
                </div>
            </div>
        </>
    )
}
