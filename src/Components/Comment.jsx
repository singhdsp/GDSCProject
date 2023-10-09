import React from 'react'
import { BiComment, BiLike, BiSolidLike } from 'react-icons/bi'
import { FiSave, FiShare } from 'react-icons/fi'

export default function Comment() {
  return (
    <div className='bg-white rounded-md p-4 flex flex-col space-y-3'>
      <div className='w-full flex items-center'>
        <img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/moscot-inline-1658958010.jpg' className='h-12 w-12 rounded-full object-cover' />
        <div className='font-Mt px-2'>
          <h1 className='font-bold text-xl'>Samuel Voight</h1>
          <h1 className='font-semibold -mt-1'>Commented 2 Days Ago</h1>
        </div>
      </div>
      <div>
        <p>Phasellus rutrum odio ut sollicitudin imperdiet. Nullam posuere ultrices pretium. Duis dictum efficitur ante non vestibulum. Mauris ut nunc porta, sollicitudin nibh vitae, auctor nulla. Fusce ut commodo tellus, in consequat erat. Nunc maximus velit at risus efficitur, ac ornare metus porttitor. In efficitur justo eget nisi porta rhoncus sed vel lorem. Fusce commodo dui tortor. Sed efficitur tortor eu neque vestibulum, nec aliquam urna dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      </div>
      <div className='flex'>
        <div className='p-1 rounded-md hover:bg-black cursor-pointer hover:text-white'>
          <BiLike size={24} />
        </div>
      </div>
    </div>
  )
}
