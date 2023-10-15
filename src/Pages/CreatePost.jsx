import React, { useState } from 'react'
import { MdEmail, MdOutlineClose, MdPassword, MdTitle } from 'react-icons/md';
import { collection, addDoc, Timestamp, getFirestore } from "firebase/firestore";
import { app } from '../Firebase/Firebase'
import { useOutletContext } from 'react-router-dom';
import Dialog from '../Components/Dialog';

export default function CreatePost() {
    const [postTitle, setPostTitle] = React.useState("");
    const [postBody, setPostBody] = React.useState("");
    const [txtError, setTxtError] = React.useState(null)
    const [firebaseUser, setFirebaseUser] = useOutletContext();
    const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const db = getFirestore(app);

    const createPost = async () => {
        setLoading(true)
        const Timestamp = new Date().getTime() / 1000;
        if (postTitle.length > 5 && postBody.length > 30) {
            const docData = {
                Username: firebaseUser.displayName,
                ProfileURL: firebaseUser.photoURL,
                Likes: [],
                Dislikes: [],
                Title: postTitle,
                Body: postBody,
                Date: new Date().toLocaleString('en-GB'),
                Comments: [],
                Views: [],
                UserID: firebaseUser.uid,
                Timestamp : Timestamp
            };
            /*   await db.Collection("Posts").AddAsync(docData); */
            // Add a new document with a generated id.
            await addDoc(collection(db, "Posts"), docData);
            setLoading(false)
            setShowSuccess(true)
            setPostBody("")
            setPostTitle("")
        } else {
            setTxtError({ code: 1, message: "Please Make Sure Lenght Of Title Is More Than 5 And Of Body Is More Than 30" })
        }
    }

    return (
        <div>
            <div className='px-5 py-3 bg-blue-700 text-white font-Mt'>
                <h1 className='font-bold text-xl'>Create Posts</h1>
            </div>
            <div className='flex-1 flex flex-col justify-center items-center p-10 space-y-4'>
                <div className='w-full px-10 font-Mt relative'>
                    <label for="Email" className='font-semibold uppercase'>Title</label>
                    <input type='text' name='Email' id="Email" className='bg-gray-200 w-full rounded-md outline-none border-none py-3 pl-12 pr-4' value={postTitle} onChange={(e) => setPostTitle(e.target.value)} />
                    <MdTitle size={28} className='absolute left-12 bottom-2.5' />
                </div>
                <div className='px-10 w-full font-Mt'>
                    <label for="body" className='font-semibold uppercase'>Body</label>
                    <textarea name="body" id="body" cols="30" rows="10" className='bg-gray-200 w-full rounded-md outline-none border-none p-4 resize-none' value={postBody} onChange={(e) => setPostBody(e.target.value)}></textarea>
                </div>
                <div className='w-full px-10'>
                    <h1 className='p-2 text-white uppercase cursor-pointer hover:bg-blue-900 font-Mt font-bold tracking-wider text-center bg-blue-700' onClick={() => createPost()}>Submit</h1>
                </div>
            </div>
            {txtError &&
                <>
                    <div className='absolute top-0 left-0 h-screen w-screen z-10 bg-gray-200 flex justify-center items-center'>
                        <div className='py-6 pl-10 pr-16 rounded-3xl w-[30rem] shadow-2xl bg-red-600 text-white font-Mt relative'>
                            <h1 className='font-bold text-2xl'>Error - {txtError.code}</h1>
                            <h1>{txtError.message}</h1>
                            <div className='absolute top-3 right-3 p-2 rounded-full hover:bg-white hover:text-red-600' onClick={() => setTxtError(null)}>
                                <MdOutlineClose />
                            </div>
                        </div>
                    </div>
                </>
            }
            {loading && (
                <Dialog>
                    <img src='/Spinner.gif' className='h-32 w-32 object-contain' />
                </Dialog>
            )}
            {showSuccess && (
                <Dialog>
                    <div className='flex flex-col items-center'>
                        <img src='/Success.gif' className='h-32 w-32 object-contain' />
                        <h1 className='font-Mt font-bold'>Post Created Successfully</h1>
                        <h1 className='underline hover:text-blue-700 cursor-pointer font-Mt font-semibold underline-offset-1' onClick={() => setShowSuccess(false)}>Close</h1>
                    </div>
                </Dialog>
            )}
        </div>
    )
}
