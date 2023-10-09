import React from 'react'
import { BiComment, BiLike, BiSolidLike } from 'react-icons/bi'
import { FiSave, FiShare } from 'react-icons/fi'

export default function PostsLarge({ userName, postTitle, profileURl }) {
    return (
        <div className='flex flex-col bg-gray-200 p-8 rounded-md cursor-pointer space-y-4'>
            <div className='flex items-center'>
                <img src={profileURl} className='h-12 w-12 rounded-full object-cover' />
                <div className='px-2 font-Mt'>
                    <h1 className='text-xl font-bold'>{postTitle}</h1>
                    <h1 className='text-sm'>Posted By {userName} on 08/9/23</h1>
                </div>
            </div>
            <div className='h-48 pr-6'>
                <p className='line-clamp-6 h-48'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit bibendum gravida. Nulla facilisi. Cras eleifend sagittis massa sit amet pretium. Nullam vestibulum magna ac dui finibus pharetra. Morbi cursus erat mi, vitae laoreet mauris hendrerit non. Mauris convallis imperdiet nisi a faucibus. Sed finibus diam et venenatis pharetra. Phasellus vehicula egestas erat, vel tincidunt quam. Nam diam ex, ultrices ac quam in, scelerisque euismod justo. Nullam iaculis mattis euismod. Morbi feugiat felis vitae augue vehicula vehicula. Suspendisse potenti. Curabitur tortor neque, fermentum eget velit sit amet, aliquam dictum metus. Donec finibus justo quis quam interdum dictum. Phasellus tortor purus, ultricies at dictum eget, viverra non nulla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit bibendum gravida. Nulla facilisi. Cras eleifend sagittis massa sit amet pretium. Nullam vestibulum magna ac dui finibus pharetra. Morbi cursus erat mi, vitae laoreet mauris hendrerit non. Mauris convallis imperdiet nisi a faucibus. Sed finibus diam et venenatis pharetra. Phasellus vehicula egestas erat, vel tincidunt quam. Nam diam ex, ultrices ac quam in, scelerisque euismod justo. Nullam iaculis mattis euismod. Morbi feugiat felis vitae augue vehicula vehicula. Suspendisse potenti. Curabitur tortor neque, fermentum
                </p>
            </div>
            <div className='px-4 flex w-full items-center'>
                <div className='flex space-x-4'>
                    <BiLike size={24} />
                    <FiShare size={24} />
                    <BiComment size={24} />
                </div>
                <div className='space-x-4 flex uppercase font-Mt text-sm ml-8'>
                    <h1>251 Views</h1>
                    <h1>|</h1>
                    <h1>20 Comments</h1>
                </div>
                <div className='px-4 py-2 rounded-md bg-blue-700 hover:bg-blue-900 font-Mt font-semibold text-sm text-white ml-auto'>
                    <h1>See Full Post</h1>
                </div>
            </div>
        </div>
    )
}
