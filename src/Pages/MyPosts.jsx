import React, { useState, useEffect } from 'react'
import PostsMedium from '../Components/Posts/PostsMedium'
import { app } from '../Firebase/Firebase'
import { doc, getDoc, getFirestore, collection, query, where, getDocs, deleteDoc } from 'firebase/firestore'
import Dialog from '../Components/Dialog';
import { onAuthStateChanged, getAuth } from 'firebase/auth';

export default function MyPosts() {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [firebaseUser, setFirebaseUser] = React.useState("");
    const db = getFirestore(app);
    const auth = getAuth();

    const readData = async () => {
        const q = query(collection(db, "Posts"), where("UserID", "==", firebaseUser.uid));

        const querySnapshot = await getDocs(q);
        let tempPosts = []
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            tempPosts.push({ id: doc.id, data: doc.data() })
            console.log(doc.id, " => ", doc.data());
        });
        console.log(tempPosts)
        setPosts(tempPosts)
    }



    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setFirebaseUser(user)
            } else {
                window.location = "/Login"
            }
        });
    }, [])

    useEffect(() => {
        if (firebaseUser) {
            readData()
        }
    }, [firebaseUser])

    useEffect(() => {
        if (posts) {
            setLoading(false)
        }
    }, [posts])

    return (
        <>
            <div className='px-5 py-3 bg-blue-700 text-white font-Mt'>
                <h1 className='font-bold text-xl'>My Posts</h1>
            </div>
            <div className='flex-1 flex justify-center items-center p-10'>
                {posts && (
                    <div className='w-full h-[30rem] overflow-y-scroll space-y-4 px-4'>
                        {posts.map((doc) => {
                            return (
                                <PostsMedium DocData={doc.data} DocID={doc.id} />
                            )
                        })}
                    </div>
                )}
            </div>
            {loading && (
                <Dialog>
                    <img src='/Spinner.gif' className='h-32 w-32 object-contain' />
                </Dialog>
            )}
        </>
    )
}
