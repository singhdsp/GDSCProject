import React from 'react'
import { Link, redirect } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import Firebase from '../Firebase/Firebase';
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdOutlineClose, MdPassword } from 'react-icons/md';

export default function Login() {
    const [txtEmail, setTxtEmail] = React.useState("");
    const [txtPassword, setTxtPassword] = React.useState("");
    const [loginError, setLoginError] = React.useState(null);

    /* const signInUser = (e) => {
         e.preventDefault(); 
        signInWithEmailAndPassword(auth, txtUsername, txtPassword)
            .then((userCredential) => {
                alert("Welcome " + userCredential.user.email)
            })
            .catch((error) => {
                setLoginError(error)
                setShowErrorDialog(true)
            })
    } */

    const signInUser = () => {
        try {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, txtEmail, txtPassword)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    if (user.emailVerified) {
                        window.location = "/Dashboard"
                    } else {
                        setLoginError({
                            code: "401",
                            message: "Please Verify Your Email"
                        })
                    }
                })
                .catch((error) => {
                    setLoginError(error)
                });
        } catch (e) {
            setLoginError(e)
        }
    }

    return (
        <div className='h-screen w-screen px-24 py-10 xl:px-48 xl:py-20 flex justify-center items-center bg-gray-200'>
            <div className='w-full h-full shadow-2xl rounded-3xl grid grid-cols-5 bg-white'>
                <div className=' col-span-3 flex flex-col p-6 py-16 xl:p-16 overflow-y-scroll'>
                    <div className='space-y-4 flex flex-col justify-center items-center'>
                        <div className='flex space-x-2 items-center'>
                            <div className='h-10 w-10 p-2 rounded-md bg-gradient-to-tr from-blue-800 to-orange-800 flex justify-center items-center'>
                                <img src='/logo.png' className='brightness-0 invert' />
                            </div>
                            <Link to="/" className='uppercase font-Mt font-extrabold tracking-wider text-2xl'>Programiz</Link>
                        </div>
                        <h1 className='text-center font-bold font-Mt text-3xl xl:text-4xl capitalize tracking-wide text-blue-700'>Login To Your Account</h1>
                        <div className='w-full px-10 font-Mt relative'>
                            <label for="Email" className='font-semibold uppercase'>Email</label>
                            <input type='text' name='Email' id="Email" className='bg-gray-200 w-full rounded-md outline-none border-none py-3 pl-12 pr-4' value={txtEmail} onChange={(e) => setTxtEmail(e.target.value)} />
                            <MdEmail size={28} className='absolute left-12 bottom-2.5' />
                        </div>
                        <div className='w-full px-10 font-Mt relative'>
                            <label for="Password" className='font-semibold uppercase'>Password</label>
                            <input type='password' name='Password' id="Password" className='bg-gray-200 w-full rounded-md outline-none border-none py-3 pl-12 pr-4' value={txtPassword} onChange={(e) => setTxtPassword(e.target.value)} />
                            <MdPassword size={28} className='absolute left-12 bottom-2.5' />
                        </div>
                        <button className='w-full py-2 text-white rounded-full uppercase tracking-widest font-bold text-xl bg-gradient-to-br from-violet-600 to-blue-700 transition-all hover:scale-105' onClick={() => signInUser()}>Login</button>
                    </div>
                    <div className="mt-5">
                        <h1 className='font-semibold font-Mt text-center'>Forgot Password ? <Link to="/ForgotPassword" className='text-blue-600 hover:underline cursor-pointer'>Reset Password</Link></h1>
                    </div>
                    <div className='mt-14 font-Mt font-semibold uppercase tracking-widest border-black border-t-2 flex flex-col items-center text-slate-900'>
                        <div className='px-2 py-1 -mt-4 bg-white'>
                            <h1>Login Using Social Networks</h1>
                        </div>
                        <div className='flex items-center justify-center mt-2 space-x-4'>
                            <FaGoogle size={32} />
                            <FaFacebook size={32} />
                            <FaLinkedin size={32} />
                        </div>
                    </div>
                </div>
                <div className='col-span-2 relative'>
                    <img src='/homeBg.jpg' className='h-full w-full overflow-hidden object-cover rounded-e-3xl' />
                    <div className='absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.4)] rounded-e-3xl'>
                        <div className='flex flex-col justify-center items-center text-white h-full w-full font-Mt text-center space-y-3 p-8'>
                            <h1 className='text-3xl font-bold'>New Here ?</h1>
                            <h1 className='text-xl font-semibold'>Sign Up to discover a great ammount of new oppurtunities</h1>
                            <Link to="/SignUp" className='px-4 py-2 rounded-full bg-gradient-to-r font-bold uppercase tracking-widest from-violet-800 to-fuchsia-600 hover:scale-110 transition-all'>Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
            {loginError &&
                <>
                    <div className='absolute top-0 left-0 h-screen w-screen z-10 bg-gray-200 flex justify-center items-center'>
                        <div className='py-6 pl-10 pr-16 rounded-3xl w-[30rem] shadow-2xl bg-red-600 text-white font-Mt relative'>
                            <h1 className='font-bold text-2xl'>Error - {loginError.code}</h1>
                            <h1>{loginError.message}</h1>
                            <div className='absolute top-3 right-3 p-2 rounded-full hover:bg-white hover:text-red-600' onClick={() => setLoginError(null)}>
                                <MdOutlineClose />
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
