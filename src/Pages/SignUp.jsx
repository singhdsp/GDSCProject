import React from 'react'
import { Link } from 'react-router-dom';
//import { createUserWithEmailAndPassword } from 'firebase/auth';
//import auth from '../Auth/Firebase';
import { FaCamera, FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdOutlineClose, MdPassword } from 'react-icons/md';

export default function SignUp() {

  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);
  const [txtUsername, setTxtUsername] = React.useState("");
  const [txtPassword, setTxtPassword] = React.useState("");
  const [txtPassword2, setTxtPassword2] = React.useState("");
  const [txtEmail, setTxtEmail] = React.useState("");
  const [showErrorDialog, setShowErrorDialog] = React.useState(false);
  const [loginError, setLoginError] = React.useState();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  /*   const signUpUser = () => {
      if (txtPassword === txtPassword2) {
        createUserWithEmailAndPassword(auth, txtEmail, txtPassword)
          .then((userCredential) => {
            alert("Welcome " + userCredential.user.email)
          })
          .catch((error) =>{
            setLoginError(error)
            setShowErrorDialog(true)
          })
      }
    } */


  return (
    <div className='h-screen w-screen px-48 py-20 flex justify-center items-center bg-gray-200'>
      <div className='w-full h-full shadow-2xl rounded-3xl grid grid-cols-5 bg-white'>
        <div className=' col-span-3 flex flex-col justify-center p-16 overflow-y-scroll'>
          <div className='space-y-4 flex flex-col justify-center'>
            <h1 className='text-center font-bold font-Mt text-4xl capitalize tracking-wide text-blue-700'>Create Your Account</h1>
            <div className='h-32 w-32 bg-gray-200 rounded-full mx-auto flex justify-center items-center'>
              <FaCamera size={48}/>
            </div>
            <div className='w-full px-10 font-Mt relative'>
              <label for="Email" className='font-semibold uppercase'>Email</label>
              <input type='text' name='Email' id="Email" className='bg-gray-200 w-full rounded-md outline-none border-none py-3 pl-12 pr-4' />
              <MdEmail size={28} className='absolute left-12 bottom-2.5' />
            </div>
            <div className='w-full px-10 font-Mt relative'>
              <label for="Password" className='font-semibold uppercase'>Password</label>
              <input type='password' name='Password' id="Password" className='bg-gray-200 w-full rounded-md outline-none border-none py-3 pl-12 pr-4' />
              <MdPassword size={28} className='absolute left-12 bottom-2.5' />
            </div>
            <div className='w-full px-10 font-Mt relative'>
              <label for="Password2" className='font-semibold uppercase'>Confirm Password</label>
              <input type='password' name='Password2' id="Password2" className='bg-gray-200 w-full rounded-md outline-none border-none py-3 pl-12 pr-4' />
              <MdPassword size={28} className='absolute left-12 bottom-2.5' />
            </div>
            <button className='w-full py-2 bg-blue-500 hover:bg-blue-800 text-white rounded-full uppercase tracking-widest font-bold text-xl bg-gradient-to-br from-violet-600 to-blue-700 transition-all hover:scale-105' /* onClick={() => signUpUser()} */>Sign Up</button>
            <div className='font-Mt text-sm px-6'>
              <h1>By Creating An Account You Agree To Our <span className='text-blue-700 cursor-pointer hover:text-blue-900 font-semibold'>Privacy Policy</span> And <span className='text-blue-700 cursor-pointer hover:text-blue-900 font-semibold'>Terms And Conditions</span></h1>
            </div>
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
      {showErrorDialog &&
        <>
          <div className='absolute top-0 left-0 h-screen w-screen z-10 bg-gray-200 flex justify-center items-center'>
            <div className='py-6 pl-10 pr-16 rounded-3xl w-[30rem] shadow-2xl bg-red-600 text-white font-Mt relative'>
              <h1 className='font-bold text-2xl'>Error - {loginError.code}</h1>
              <h1>{loginError.message}</h1>
              <div className='absolute top-3 right-3 p-2 rounded-full hover:bg-white hover:text-red-600' onClick={() => setShowErrorDialog(false)}>
                <MdOutlineClose />
              </div>
            </div>
          </div>
        </>
      }
    </div>
  )
}
