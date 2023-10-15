import React, { useEffect, useState } from 'react'
import AppBar from '../Components/AppBar'
import { BiComment, BiLike, BiSolidLike, BiCommentAdd, BiDislike, BiSolidDislike } from 'react-icons/bi'
import { FiSave, FiShare } from 'react-icons/fi'
import PostsSmall from '../Components/Posts/PostsSmall'
import Comment from '../Components/Comment'
import { FaComment } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { app } from '../Firebase/Firebase'
import { MdOutlineClose } from 'react-icons/md'
import { doc, getDoc, getFirestore, collection, query, where, getDocs, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { v4 as uuidv4 } from 'uuid';
import Dialog from '../Components/Dialog'


export default function ViewPost() {
    const { PostID } = useParams();
    const auth = getAuth()
    const [post, setPost] = React.useState(null);
    const db = getFirestore(app);
    const [firebaseUser, setFirebaseUser] = React.useState("");
    const [showCommentDialog, setShowCommentDialog] = useState(false);
    const [comment, setComment] = useState("");
    const [postLiked, setPostLiked] = useState(null);
    const [postDisLiked, setPostDisLiked] = useState(null);
    const [trendingPosts, setTrendingPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showSuccess, setShowSuccess] = useState(false);
    const [copyClip, setCopyClip] = useState(false);

    const readData = async () => {
        const docRef = doc(db, "Posts", PostID);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data())
            const data = docSnap.data()
            setPost(data)
        } else {
            // docSnap.data() will be undefined in this case
            // Redirect To 404 Page
            console.log("No such document! ");
        }
    }

    const sortPostsByViews = (a, b) => {
        if (a.data.Views.length > b.data.Views.length) {
            return -1;
        }
        if (a.data.Views.length < b.data.Views.length) {
            return 1;
        }
        return 0;
    }

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(window.location.href);
        setCopyClip(true)
    }

    const readDataTrending = async () => {
        const q = query(collection(db, "Posts"));

        const querySnapshot = await getDocs(q);
        let tempPosts = []
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            tempPosts.push({ id: doc.id, data: doc.data() })
            console.log(doc.id, " => ", doc.data());
        });
        console.log(tempPosts)
        setTrendingPosts(tempPosts.sort(sortPostsByViews))
    }

    const addComment = async () => {
        setLoading(true)
        setShowCommentDialog(false)
        const washingtonRef = doc(db, "Posts", PostID);

        // Atomically add a new region to the "regions" array field.
        await updateDoc(washingtonRef, {
            Comments: arrayUnion({
                Comment: comment,
                Id: uuidv4(),
                DisplayName: firebaseUser.displayName,
                ProfileURL: firebaseUser.photoURL,
                Date: new Date().toLocaleDateString("en-GB")
            })
        });
        setLoading(false)
        setComment("")
        setShowSuccess(true)
    }

    const addLike = async () => {
        const washingtonRef = doc(db, "Posts", PostID);
        // Atomically add a new region to the "regions" array field.
        await updateDoc(washingtonRef, {
            Likes: arrayUnion(firebaseUser.displayName)
        });
    }

    const removeLike = async () => {
        const washingtonRef = doc(db, "Posts", PostID);
        // Atomically add a new region to the "regions" array field.
        await updateDoc(washingtonRef, {
            Likes: arrayRemove(firebaseUser.displayName)
        });
    }

    const addDisLike = async () => {
        const washingtonRef = doc(db, "Posts", PostID);
        // Atomically add a new region to the "regions" array field.
        await updateDoc(washingtonRef, {
            Dislikes: arrayUnion(firebaseUser.displayName)
        });
    }

    const removeDisLike = async () => {
        const washingtonRef = doc(db, "Posts", PostID);
        // Atomically add a new region to the "regions" array field.
        await updateDoc(washingtonRef, {
            Dislikes: arrayRemove(firebaseUser.displayName)
        });
    }

    const addView = async () => {
        const washingtonRef = doc(db, "Posts", PostID);
        // Atomically add a new region to the "regions" array field.
        await updateDoc(washingtonRef, {
            Views: arrayUnion(firebaseUser.displayName)
        });
    }

    const setPostChoice = (choice, value) => {
        if (choice == 1 && value) {
            setPostLiked(true)
            setPostDisLiked(false)
            addLike()
            removeDisLike()
        } else if (choice == 1 && value === false) {
            setPostLiked(false)
            removeLike()
        } else if (choice == 0 && value) {
            setPostLiked(false)
            setPostDisLiked(true)
            removeLike()
            addDisLike()
        } else if (choice == 0 && value === false) {
            setPostDisLiked(false)
            removeDisLike()
        }
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setFirebaseUser(user)
            } else {
                window.location = "/Login"
            }
        });
        readData()
        readDataTrending()
    }, [])

    useEffect(() => {
        if (post) {
            setPostLiked(post.Likes.includes(firebaseUser.displayName))
            setPostDisLiked(post.Dislikes.includes(firebaseUser.displayName))
            setLoading(false)
            if (post.Views.includes(firebaseUser.displayName) === false) {
                addView()
            }
        }
    }, [post])


    return (
        <>
            <div className={`w-full ${showCommentDialog ? "overflow-hidden h-screen" : ""}`}>
                <AppBar />
                <div className='grid grid-cols-12'>
                    <div className='col-span-8 p-4 space-y-8'>
                        <div className='flex flex-col bg-gray-200 p-8 rounded-md cursor-pointer space-y-4'>
                            <div className='flex items-center'>
                                <img src={post ? post.ProfileURL : ""} className='h-12 w-12 rounded-full object-cover' />
                                <div className='px-2 font-Mt'>
                                    <h1 className='text-xl font-bold'>{post ? post.Title : "Loading..."}</h1>
                                    <h1 className='text-sm'>{post ? "Posted By " + post.Username + " on " + post.Date : "Loading..."}</h1>
                                </div>
                            </div>
                            <div className='pr-6'>
                                <p className=' whitespace-pre-wrap'>
                                    {/* Post Body */}
                                    {post ? post.Body : "Loading..."}
                                </p>
                            </div>
                            <div className='px-4 flex w-full items-center'>
                                <div className='flex space-x-4'>
                                    {console.log(postLiked + "Check")}
                                    <div className='p-2 hover:bg-black hover:text-white rounded-md' onClick={() => setPostChoice(1, !postLiked)}>{postLiked ? <BiSolidLike size={24} /> : <BiLike size={24} />}</div>
                                    <div className='p-2 hover:bg-black hover:text-white rounded-md' onClick={() => setPostChoice(0, !postDisLiked)}>{postDisLiked ? <BiSolidDislike size={24} /> : <BiDislike size={24} />}</div>
                                    <div className='p-2 hover:bg-black hover:text-white rounded-md' onClick={() => copyToClipboard()}><FiShare size={24} /></div>
                                    <div className='p-2 hover:bg-black hover:text-white rounded-md' onClick={() => setShowCommentDialog(true)}><BiComment size={24} /></div>
                                </div>
                                <div className='space-x-4 flex uppercase font-Mt text-sm ml-8'>
                                    <h1>{post ? post.Views.length : "Loading..."} Views</h1>
                                    <h1>|</h1>
                                    <h1>{post ? post.Comments.length : "Loading..."} Comments</h1>
                                </div>
                            </div>
                        </div>
                        <div className='bg-gray-200 p-4 rounded-md'>
                            <div className='flex justify-between items-center'>
                                <h1 className='text-2xl font-bold'>Comments</h1>
                            </div>
                            {post && (
                                <div className='space-y-4 mt-4'>
                                    {post.Comments.length > 0 && (
                                        <>
                                            {post.Comments.map((comment) => {
                                                return (
                                                    <Comment ProfileURL={comment.ProfileURL} Username={comment.DisplayName} Date={comment.Date} Comment={comment.Comment} />
                                                )
                                            })}
                                        </>
                                    )}

                                </div>
                            )}
                        </div>
                    </div>
                    <div className='col-span-3 p-4'>
                        <div className='p-4 font-Mt bg-white rounded-md flex flex-col justify-center items-center'>
                            <h1 className='text-2xl font-bold text-blue-700 uppercase tracking-wider'>Trending</h1>
                            {trendingPosts && (
                                <div className='w-full py-2 space-y-2'>
                                    {trendingPosts.map((doc) => {
                                        return (
                                            <PostsSmall docId={doc.id} userName={doc.data.Username} postTitle={doc.data.Title} profileURl={doc.data.ProfileURL} />
                                        )
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            {showCommentDialog &&
                <>
                    <div className='fixed top-0 left-0 h-screen w-screen z-10 bg-[rgba(0,0,0,0.7)] flex justify-center items-center overflow-hidden'>
                        <div className='py-6 pl-10 pr-16 rounded-3xl w-[30rem] shadow-2xl bg-white font-Mt relative space-y-4'>
                            <h1 className='font-bold text-2xl'>Post Comment</h1>
                            <div className='w-full font-Mt'>
                                <textarea placeholder='Write your thoughts here ..' name="body" id="body" cols="30" rows="10" className='bg-gray-200 w-full rounded-md outline-none border-none p-4 resize-none' value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                            </div>
                            <div className='w-full px-4 py-2 rounded-md bg-blue-700 hover:bg-blue-900 font-Mt text-white' onClick={() => addComment()}>
                                <h1 className='font-bold uppercase text-center cursor-pointer'>post</h1>
                            </div>
                            <div className='absolute top-0 right-3 p-2 rounded-full text-red-600 hover:bg-red-600 hover:text-white' onClick={() => setShowCommentDialog(false)}>
                                <MdOutlineClose size={28} />
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
                        <h1 className='font-Mt font-bold'>Comment Posted Successfully</h1>
                        <h1 className='underline hover:text-blue-700 cursor-pointer font-Mt font-semibold underline-offset-1' onClick={() => setShowSuccess(false)}>Close</h1>
                    </div>
                </Dialog>
            )}
            {copyClip && (
                <Dialog>
                    <div className='flex flex-col items-center'>
                        <img src='/Success.gif' className='h-32 w-32 object-contain' />
                        <h1 className='font-Mt font-bold'>Link Copied Successfully</h1>
                        <h1 className='underline hover:text-blue-700 cursor-pointer font-Mt font-semibold underline-offset-1' onClick={() => setCopyClip(false)}>Close</h1>
                    </div>
                </Dialog>
            )}
        </>
    )
}
