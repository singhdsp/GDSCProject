import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
/* import auth from '../Firebase/Firebase'; */
import { FaCamera, FaFacebook, FaGoogle, FaLinkedin, FaUserAlt } from 'react-icons/fa';
import { MdEmail, MdOutlineClose, MdPassword } from 'react-icons/md';
import Firebase from '../Firebase/Firebase'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Dialog from '../Components/Dialog';


export default function SignUp() {
  const [txtUsername, setTxtUsername] = React.useState("");
  const [txtPassword, setTxtPassword] = React.useState("");
  const [txtPassword2, setTxtPassword2] = React.useState("");
  const [txtEmail, setTxtEmail] = React.useState("");
  const [loginError, setLoginError] = React.useState(null);
  const [userPhoto, setUserPhoto] = React.useState(null);
  const [previewImage, setPreviewImage] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [verifyEmail, setVerifyEmail] = React.useState(false);
  const inputFile = useRef(null);

  const signUpUser = () => {
    setLoading(true)
    try {
      if (txtUsername.length >= 4 && txtPassword.length >= 6 && txtEmail.length >= 6 && previewImage) {
        if (txtPassword === txtPassword2) {
          const auth = getAuth();
          const storage = getStorage();

          createUserWithEmailAndPassword(auth, txtEmail, txtPassword)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              const storageRef = ref(storage, "Users/" + user.uid + "/" + user.uid);
              // Upload Image To Storage
              uploadBytes(storageRef, userPhoto).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((downloadURL) => {
                  updateProfile(auth.currentUser, {
                    displayName: txtUsername, photoURL: downloadURL
                  }).then(() => {
                    sendEmailVerification(auth.currentUser)
                      .then(() => {
                        setLoading(false)
                        setVerifyEmail(true)
                      });
                  }).catch((error) => {
                    setLoading(false)
                    setLoginError(error)
                  });
                });
              });
            })
            .catch((error) => {
              setLoading(false)
              setLoginError(error)
            });
        } else {
          setLoading(false)
          setLoginError({ code: 1, message: "Passwords dont match" })
        }
      } else {
        setLoading(false)
        setLoginError({ code: 1, message: "Please Fill The Form Feilds Properly" })
      }
    } catch (e) {
      setLoading(false)
      setLoginError(e)
    }
  }

  const uploadImage = (imageFile) => {
    setUserPhoto(imageFile)
    const files = imageFile;
    if (files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files);
      fileReader.addEventListener("load", function () {
        setPreviewImage(this.result)
      });
    }
  };


  return (
    <div className='h-screen w-screen px-24 xl:px-48 py-10 xl:py-20 flex justify-center items-center bg-gray-200'>
      <div className='w-full h-full shadow-2xl rounded-3xl grid grid-cols-5 bg-white'>
        <div className=' col-span-3 flex flex-col px-4 py-16 xl:p-16 overflow-y-scroll'>
          <div className='space-y-4 flex flex-col items-center'>
            <div className='flex space-x-2 items-center'>
              <div className='h-10 w-10 p-2 rounded-md bg-gradient-to-tr from-blue-800 to-orange-800 flex justify-center items-center'>
                <img src='/logo.png' className='brightness-0 invert' />
              </div>
              <Link to="/" className='uppercase font-Mt font-extrabold tracking-wider text-2xl'>Programiz</Link>
            </div>
            <h1 className='text-center font-bold font-Mt text-3xl xl:text-4xl capitalize tracking-wide text-blue-700'>Create Your Account</h1>
            <div className='h-32 w-32 bg-gray-200 rounded-full mx-auto flex justify-center items-center' onClick={() => inputFile.current.click()}>
              {previewImage === null && (
                <>
                  <FaCamera size={48} />
                </>
              )}
              {previewImage && (
                <>
                  <img src={previewImage} className=' h-full w-full object-cover rounded-full' />
                </>
              )}
              <input
                type="file"
                ref={inputFile}
                className=" hidden"
                onChange={(e) => {
                  uploadImage(e.target.files[0]);
                }}
              />
            </div>
            <div className='w-full px-10 font-Mt relative'>
              <label for="Username" className='font-semibold uppercase'>Username</label>
              <input type='text' name='Username' id="Username" className='bg-gray-200 w-full rounded-md outline-none border-none py-3 pl-12 pr-4' value={txtUsername} onChange={(e) => setTxtUsername(e.target.value)} />
              <FaUserAlt size={26} className='absolute left-12 bottom-2.5' />
            </div>
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
            <div className='w-full px-10 font-Mt relative'>
              <label for="Password2" className='font-semibold uppercase'>Confirm Password</label>
              <input type='password' name='Password2' id="Password2" className='bg-gray-200 w-full rounded-md outline-none border-none py-3 pl-12 pr-4' value={txtPassword2} onChange={(e) => setTxtPassword2(e.target.value)} />
              <MdPassword size={28} className='absolute left-12 bottom-2.5' />
            </div>
            <button className='w-full py-2 bg-blue-500 hover:bg-blue-800 text-white rounded-full uppercase tracking-widest font-bold text-xl bg-gradient-to-br from-violet-600 to-blue-700 transition-all hover:scale-105' onClick={() => signUpUser()} >Sign Up</button>
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
      {verifyEmail && (
        <Dialog>
          <div className='flex flex-col items-center'>
            <img src='/Success.gif' className='h-32 w-32 object-contain' />
            <h1 className='font-Mt font-bold'>A Email Verification Link has been sent to your registered email</h1>
            <h1 className='font-Mt font-bold'>Please verify your email and login</h1>
            <h1 className='underline hover:text-blue-700 cursor-pointer font-Mt font-semibold underline-offset-1' onClick={() => window.location.href = "/Login"}>Login</h1>
          </div>
        </Dialog>
      )}
      {loading && (
        <Dialog>
          <img src='/Spinner.gif' className='h-32 w-32 object-contain' />
        </Dialog>
      )}
    </div>
  )
}
