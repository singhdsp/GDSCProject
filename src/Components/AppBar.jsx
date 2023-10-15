import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

export default function AppBar() {
    const [firebaseUser, setFirebaseUser] = React.useState(null);
    const [profileURL, setProfileURL] = React.useState(null);
    const [displayName, setDisplayName] = React.useState(null);
    const auth = getAuth()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setFirebaseUser(user)
                setProfileURL(user.photoURL)
                setDisplayName(user.displayName)
            } else {

            }
        });
    }, [])

    return (
        <div className='w-full px-4 flex justify-between items-center bg-blue-700 text-white'>
            <div className='flex space-x-2 items-center'>
                <div className='h-10 w-10 p-2 rounded-md bg-gradient-to-tr from-blue-800 to-orange-800 flex justify-center items-center'>
                    <img src='/logo.png' className='brightness-0 invert' />
                </div>
                <Link to="/" className='uppercase font-Mt font-extrabold tracking-wider text-2xl'>Programiz</Link>
            </div>
            <div className='flex space-x-4'>
                <div className='flex'>
                    <Link to="/" className='py-5 px-6 font-bold font-Mt hover:bg-[rgba(59,131,246,0.8)] hover:text-white hover:underline hover:underline-offset-2 cursor-pointer'>Home</Link>
                    <Link to="/Dashboard" className='py-5 px-6 font-bold font-Mt hover:bg-[rgba(59,131,246,0.8)] hover:text-white hover:underline hover:underline-offset-2 cursor-pointer'>My Posts</Link>
                </div>
                <div className='flex items-center space-x-3'>
                    {firebaseUser ? (
                        <>
                            <Link to="/Dashboard" className='font-Mt uppercase cursor-pointer'>{firebaseUser.displayName}</Link>
                            <Link to="/Dashboard"><img src={firebaseUser.photoURL} className='h-12 w-12 object-cover rounded-full cursor-pointer' /></Link>
                        </>
                    ) : (
                        <>
                            <Link to="/Login" className='py-2 px-4 font-Mt font-bold rounded-md border-2 border-white hover:bg-white hover:text-black cursor-pointer'>Sign In</Link>
                            <Link to="/SignUp" className='py-2 px-4 font-Mt font-bold rounded-md border-2 border-green-600 hover:bg-green-600 hover:text-white cursor-pointer'>Sign Up</Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
