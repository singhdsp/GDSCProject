import React from 'react'

export default function PostsSmall({userName,postTitle,profileURl}) {
  return (
    <div className='flex items-center bg-gray-200 p-2 rounded-md hover:bg-blue-200 cursor-pointer'>
        <img src={profileURl} className='h-[3.25rem] w-[3.25rem] rounded-full object-cover'/>
        <div className='px-2 font-Mt'>
            <h1 className='text-xl font-bold'>{userName}</h1>
            <h1 className='-mt-1 text-sm'>{postTitle}</h1>
        </div>
    </div>
  )
}
