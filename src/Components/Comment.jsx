import React from 'react'
import { BiComment, BiLike, BiSolidLike } from 'react-icons/bi'
import { FiSave, FiShare } from 'react-icons/fi'

export default function Comment({ ProfileURL, Username, Date, Comment }) {
  return (
    <div className='bg-white rounded-md p-4 flex flex-col space-y-3'>
      <div className='w-full flex items-center'>
        <img src={ProfileURL} className='h-12 w-12 rounded-full object-cover' />
        <div className='font-Mt px-2'>{Username}
          <h1 className='font-bold text-xl'></h1>
          <h1 className='font-semibold -mt-1'>Commented On {Date}</h1>
        </div>
      </div>
      <div>
        <p>{Comment}</p>
      </div>
    </div>
  )
}
