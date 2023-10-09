import React from 'react'
import { MdDelete } from 'react-icons/md'

export default function PostsMedium() {
    return (
        <div className='flex items-center justify-between bg-gray-200 rounded-md hover:bg-blue-200 cursor-pointer'>
            <div className='flex items-center px-4'>
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/moscot-inline-1658958010.jpg" className='h-[3.25rem] w-[3.25rem] rounded-full object-cover' />
                <div className='px-2 font-Mt'>
                    <h1 className='text-xl font-bold'>Samuel Voight</h1>
                    <h1 className='-mt-1 text-sm'>Blockchain Technologies Today And Tommorow</h1>
                    <h1 className='-mt-1 text-sm'>Posted On 08/09/2023</h1>
                </div>
            </div>
            <div className='flex items-center space-x-4'>
                <div className='font-Mt font-semibold text-right'>
                    <h1>223 Views</h1>
                    <h1>22 Comments</h1>
                </div>
                <div className='h-full px-4 py-8 rounded-e-md  bg-red-700 hover:bg-red-900 text-white'>
                    <MdDelete size={28}/>
                </div>
            </div>
        </div>
    )
}
