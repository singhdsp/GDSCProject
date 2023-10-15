import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import { app } from '../../Firebase/Firebase'
import { doc, getDoc, getFirestore, collection, query, where, getDocs, deleteDoc } from 'firebase/firestore'
import Dialog from '../Dialog';


export default function PostsMedium({ DocData, DocID }) {
    const db = getFirestore(app);
    const [loading, setLoading] = useState(false);

    const deletePost = async (id) => {
        setLoading(true)
        await deleteDoc(doc(db, "Posts", id));
        setLoading(false)
        window.location.reload()
    }


    return (
        <div className='flex items-center justify-between bg-gray-200 rounded-md hover:bg-blue-200 cursor-pointer' onClick={() => window.location.href = "/Posts/" + DocID}>
            <div className='flex items-center px-4'>
                <img src={DocData.ProfileURL} className='h-[3.25rem] w-[3.25rem] rounded-full object-cover' />
                <div className='px-2 font-Mt'>
                    <h1 className='text-xl font-bold'>{DocData.Username}</h1>
                    <h1 className='-mt-1 text-sm'>{DocData.Title}</h1>
                    <h1 className='-mt-1 text-sm'>Posted On {DocData.Date}</h1>
                </div>
            </div>
            <div className='flex items-center space-x-4'>
                <div className='font-Mt font-semibold text-right'>
                    <h1>{DocData.Views.length} Views</h1>
                    <h1>{DocData.Comments.length} Comments</h1>
                </div>
                <div className='h-full px-4 py-8 rounded-e-md  bg-red-700 hover:bg-red-900 text-white' onClick={() => deletePost(DocID)}>
                    <MdDelete size={28} />
                </div>
            </div>
            {loading && (
                <Dialog>
                    <img src='/Spinner.gif' className='h-32 w-32 object-contain' />
                </Dialog>
            )}
        </div>
    )
}
