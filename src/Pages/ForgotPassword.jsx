import React, { useState } from 'react'
import { Link } from 'react-router-dom';
//import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth';
//import auth from '../Auth/Firebase';
import { FaCamera, FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdOutlineClose, MdPassword } from 'react-icons/md';
import { sendPasswordResetEmail, getAuth } from 'firebase/auth';
import Dialog from '../Components/Dialog';
export default function ForgotPassword() {

    const [txtEmail, setTxtEmail] = React.useState("");
    const [loginError, setLoginError] = React.useState(null);
    const [showSuccess, setShowSuccess] = useState(false);
    const auth = getAuth()
    const sendPasswordResetEmailF = () => {
        sendPasswordResetEmail(auth, txtEmail)
            .then(() => {
                setShowSuccess(true)
            })
            .catch((error) => {
                setLoginError(error)
            });
    }


    return (
        <div className='h-screen w-screen px-48 py-20 flex justify-center items-center bg-gray-200'>
            <div className='w-full h-full shadow-2xl rounded-3xl grid grid-cols-5 bg-white'>
                <div className=' col-span-3 flex flex-col p-16 overflow-y-scroll'>
                    <div className='space-y-4 flex flex-col justify-center items-center h-full'>
                        <div className='flex space-x-2 items-center'>
                            <div className='h-10 w-10 p-2 rounded-md bg-gradient-to-tr from-blue-800 to-orange-800 flex justify-center items-center'>
                                <img src='/logo.png' className='brightness-0 invert' />
                            </div>
                            <Link to="/" className='uppercase font-Mt font-extrabold tracking-wider text-2xl'>Programiz</Link>
                        </div>
                        <h1 className='text-center font-bold font-Mt text-4xl capitalize tracking-wide'>Reset Your Password</h1>
                        <h1 className='text-center font-Mt -mt-2'>Enter your registered email address below to get a email with a link to reset your password</h1>
                        <div className='w-full px-10 font-Mt relative'>
                            <label for="Email" className='font-semibold uppercase'>Email</label>
                            <input type='text' name='Email' id="Email" className='bg-gray-200 w-full rounded-md outline-none border-none py-3 pl-12 pr-4' value={txtEmail} onChange={(e) => setTxtEmail(e.target.value)} />
                            <MdEmail size={28} className='absolute left-12 bottom-2.5' />
                        </div>
                        <button className='w-full py-2 bg-blue-500 hover:bg-blue-800 text-white rounded-full uppercase tracking-widest font-bold text-xl bg-gradient-to-br from-violet-600 to-blue-700 transition-all hover:scale-105' onClick={() => sendPasswordResetEmailF()}>Send Password Reset Email</button>
                    </div>
                </div>
                <div className='col-span-2 relative'>
                    <img src='/homeBg.jpg' className='h-full w-full overflow-hidden object-cover rounded-e-3xl' />
                    <div className='absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.5)] rounded-e-3xl'>
                        <div className='flex flex-col justify-center items-center text-white h-full w-full font-Mt text-center space-y-3 p-8'>
                            <h1 className='text-2xl font-bold'>Already Have An Account ?</h1>
                            <h1 className='text-xl font-semibold'>Sign In to discover a great ammount of new oppurtunities</h1>
                            <Link to="/Login" className='px-4 py-2 rounded-full bg-gradient-to-r font-bold uppercase tracking-widest from-violet-800 to-fuchsia-600 hover:scale-110 transition-all'>Sign In</Link>
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
                            <div className='absolute top-3 right-3 p-2 rounded-full hover:bg-white hover:text-red-600 cursor-pointer' onClick={() => setLoginError(null)}>
                                <MdOutlineClose />
                            </div>
                        </div>
                    </div>
                </>
            }
            {showSuccess && (
                <Dialog>
                    <div className='flex flex-col items-center'>
                        <img src='/Success.gif' className='h-32 w-32 object-contain' />
                        <h1 className='font-Mt font-bold'>Comment Posted Successfully</h1>
                        <h1 className='underline hover:text-blue-700 cursor-pointer font-Mt font-semibold underline-offset-1' onClick={() => setShowSuccess(false)}>Close</h1>
                    </div>
                </Dialog>
            )}
        </div>
    )
}
