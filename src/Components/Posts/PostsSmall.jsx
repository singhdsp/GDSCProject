import React from 'react'

export default function PostsSmall({ userName, postTitle, profileURl, docId }) {
  return (
    <div className='flex items-center bg-gray-200 p-2 rounded-md hover:bg-blue-200 cursor-pointer' onClick={() => window.location.href = "/Posts/" + docId}>
      <img src={profileURl} className='min-h-[3.25rem] min-w-[3.25rem] max-h-[3.25rem] max-w-[3.25rem] rounded-full object-cover' />
      <div className='px-2 font-Mt'>
        <h1 className='text-ld xl:text-xl font-bold m-0'>{userName}</h1>
        <h1 className='text-xs'>{postTitle}</h1>
      </div>
    </div>
  )
}
