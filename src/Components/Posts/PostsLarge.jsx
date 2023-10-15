import React from 'react'
import { BiComment, BiLike, BiSolidLike } from 'react-icons/bi'
import { FiSave, FiShare } from 'react-icons/fi'

export default function PostsLarge({ userName, postTitle, profileURL, postedDate, Comments, postBody, Views, DocID }) {
    return (
        <div className='flex flex-col bg-gray-200 p-8 rounded-md cursor-pointer space-y-4'>
            <div className='flex items-center'>
                <img src={profileURL} className='h-12 w-12 rounded-full object-cover' />
                <div className='px-2 font-Mt'>
                    <h1 className='text-xl font-bold'>{postTitle}</h1>
                    <h1 className='text-sm'>Posted By {userName} on {postedDate}</h1>
                </div>
            </div>
            <div className='h-48 pr-6'>
                <p className='line-clamp-6 h-48'>
                    {postBody}
                </p>
            </div>
            <div className='px-4 flex w-full items-center'>
                <div className='flex space-x-4'>
                    <BiLike size={24} />
                    <FiShare size={24} />
                    <BiComment size={24} onClick={() => window.location = "/Posts/"+DocID}/>
                </div>
                <div className='space-x-4 flex uppercase font-Mt text-sm ml-8'>
                    <h1>{Views.length} Views</h1>
                    <h1>|</h1>
                    <h1>{Comments.length} Comments</h1>
                </div>
                <div className='px-4 py-2 rounded-md bg-blue-700 hover:bg-blue-900 font-Mt font-semibold text-sm text-white ml-auto' onClick={() => window.location = "/Posts/"+DocID}>
                    <h1>See Full Post</h1>
                </div>
            </div>
        </div>
    )
}
