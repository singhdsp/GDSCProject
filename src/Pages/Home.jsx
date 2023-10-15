import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar'
import { FaSearch } from 'react-icons/fa'
import PostsSmall from '../Components/Posts/PostsSmall'
import PostsLarge from '../Components/Posts/PostsLarge'
import { app } from '../Firebase/Firebase'
import { doc, getDoc, getFirestore, collection, query, where, getDocs } from 'firebase/firestore'
import { Link } from 'react-router-dom'

export default function Home() {
    const [posts, setPosts] = useState(null);
    const [Trending, setTrending] = useState(null);
    const [sortBy, setSortBy] = useState("View");
    const db = getFirestore(app);

    const sortPostsByViews = (a, b) => {
        if (a.data.Views.length > b.data.Views.length) {
            return -1;
        }
        if (a.data.Views.length < b.data.Views.length) {
            return 1;
        }
        return 0;
    }

    const sortPostsByDate = (a, b) => {
        if (a.data.Timestamp > b.data.Timestamp) {
            return -1;
        }
        if (a.data.Timestamp < b.data.Timestamp) {
            return 1;
        }
        return 0;
    }

    const sortPostsByLikes = (a, b) => {
        if (a.data.Likes.length > b.data.Likes.length) {
            return -1;
        }
        if (a.data.Likes.length < b.data.Likes.length) {
            return 1;
        }
        return 0;
    }

    const sortPostMain = () => {
        if (sortBy === "View") {
            return posts.sort((a,b) => sortPostsByViews(a,b))
        } else if (sortBy === "Date") {
            return posts.sort((a,b) => sortPostsByDate(a,b))
        } else if (sortBy === "Like") {
            return posts.sort((a,b) => sortPostsByLikes(a,b))
        } else {
            return posts.sort((a,b) => sortPostsByViews(a,b))
        }
    }

    const readData = async () => {
        const q = query(collection(db, "Posts"));

        const querySnapshot = await getDocs(q);
        let tempPosts = []
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            tempPosts.push({ id: doc.id, data: doc.data() })
            console.log(doc.id, " => ", doc.data());
        });
        console.log(tempPosts)
        setPosts(tempPosts)
        setTrending(tempPosts)
    }

    useEffect(() => {
        readData()
    }, [])


    return (
        <div className='h-screen w-full'>
            <div className='w-full h-full relative'>
                <img src='/homeBg.jpg' className='w-full h-full object-cover' />
                <div className='absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.4)] flex justify-center items-center'>
                    <div className='flex flex-col items-center text-white font-Mt text-center'>
                        <h1 className='font-bold text-5xl uppercase'>Welcome to Programiz</h1>
                        <h1 className='font-semibold text-2xl uppercase'>The ultimate destination for programmers and developers!</h1>
                        <div className='mt-6 relative w-fit rounded-md'>
                            <input type="text" name="homeSearch" id="homeSearch" className=' outline-none font-Mt w-[35rem] pl-4 text-xl pr-12 py-4 rounded-s-md rounded-e-lg border-none text-black' placeholder='What are you thinking?' />
                            <div className='absolute top-0 right-0 h-full flex justify-center items-center px-4 bg-blue-700 rounded-e-md hover:bg-blue-900 cursor-pointer'>
                                <FaSearch color='white' size={24} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='absolute bottom-4 right-8'>
                    <h1 className='font-Mt text-white text-xs'><a className='underline' href="https://www.freepik.com/free-vector/blue-futuristic-networking-technology_13311397.htm#query=coding%20background&position=3&from_view=keyword&track=ais">Image by rawpixel.com</a> on Freepik</h1>
                </div>
            </div>
            <NavBar />
            <div className='w-full py-8 bg-gray-300 flex items-center justify-center space-x-8 relative'>
                <div className={`px-4 py-2 font-Mt rounded-md ${sortBy === "View" ? "bg-green-700 hover:bg-green-900" : "bg-blue-700 hover:bg-blue-900"} cursor-pointer text-white uppercase`} onClick={() => setSortBy("View")}>
                    <h1>Most Viewed</h1>
                </div>
                <div className={`px-4 py-2 font-Mt rounded-md ${sortBy === "Date" ? "bg-green-700 hover:bg-green-900" : "bg-blue-700 hover:bg-blue-900"} cursor-pointer text-white uppercase`} onClick={() => setSortBy("Date")}>
                    <h1>Most Recent</h1>
                </div>
                <div className={`px-4 py-2 font-Mt rounded-md ${sortBy === "Like" ? "bg-green-700 hover:bg-green-900" : "bg-blue-700 hover:bg-blue-900"} cursor-pointer text-white uppercase`} onClick={() => setSortBy("Like")}>
                    <h1>Most Liked</h1>
                </div>
                <div className='h-10 w-10 bg-gray-300 rotate-45 absolute -bottom-5'></div>
            </div>
            <div className='py-8 bg-gray-100 w-full grid grid-cols-12'>
                <div className='px-6 space-y-6 col-span-3'>
                    <div className='py-4 px-8 font-Mt bg-white rounded-md flex flex-col text-center justify-center items-center space-y-1'>
                        <h1 className='font-semibold text-md xl:text-lg'>New To The Community?</h1>
                        <h1 className='text-lg xl:text-2xl font-bold text-blue-700 uppercase'>Join The</h1>
                        <h1 className='text-lg xl:text-2xl font-bold text-blue-700 uppercase'>Discussion</h1>
                        <div className='px-4 py-2 bg-blue-700 hover:bg-blue-900 uppercase text-white rounded-md cursor-pointer' onClick={() => window.location.href = "/SignUp"}>
                            <h1>Join Now!</h1>
                        </div>
                    </div>
                    <div className='p-4 font-Mt bg-white rounded-md flex flex-col justify-center items-center'>
                        <h1 className='text-2xl font-bold text-blue-700 uppercase tracking-wider'>Trending</h1>
                        {Trending && (
                            <div className='w-full py-2 space-y-2'>
                                {Trending.sort((a,b) => sortPostsByViews(a,b)).map((doc) => {
                                    return (
                                        <PostsSmall userName={doc.data.Username} postTitle={doc.data.Title} profileURl={doc.data.ProfileURL} docId={doc.id} />
                                    )
                                })}
                                {/* <PostsSmall userName="Andrew Matt" postTitle="Azure Fundamentals" profileURl="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" />
                                <PostsSmall userName="Kevin Thomas" postTitle="Cypersecuity and Owasp" profileURl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&w=1000&q=80" />
                                <PostsSmall userName="George Brown" postTitle="GCP And Google AI" profileURl="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
                                <PostsSmall userName="Samuel Voight" postTitle="Blockchain Technologies Today And Tommorow" profileURl="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/moscot-inline-1658958010.jpg" /> */}
                            </div>
                        )}
                    </div>
                </div>
                <div className='col-span-8'>
                    <div className='bg-white h-full w-full rounded-md p-4 space-y-4'>
                        {posts && (
                            <>
                                {sortPostMain().map((doc) => {
                                    return (
                                        <PostsLarge userName={doc.data.Username} postTitle={doc.data.Title} profileURL={doc.data.ProfileURL} postedDate={doc.data.Date} Comments={doc.data.Comments} postBody={doc.data.Body} Views={doc.data.Views} DocID={doc.id} />
                                    )
                                })}
                            </>
                        )}
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
