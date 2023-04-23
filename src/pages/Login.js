import React from 'react';
import { googleLogo } from '../assets';
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
} from "firebase/auth"
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../redux/ecoSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const handleGoogleLogin=(e)=>{
        e.preventDefault();
        // console.log(auth);
        signInWithPopup(auth,provider)
         .then((result)=>{
            const user = result.user;
            // console.log(user);
            dispatch(
                addUser({
                    _id: user.uid,
                    name:user.displayName,
                    email:user.email,
                    image:user.photoURL,
                })
            );
            setTimeout(()=>{
                navigate("/")
            },1500)
        }).catch((err)=>{
            console.log(err);
        })
    };

    const handleSignout=()=>{
        signOut(auth)
            .then(()=>{
                toast.success("Log Out Successful");
                dispatch(removeUser());
                
            })
            .catch((err)=>{
                console.log(err);
            })
    }

  return (
    <div className='w-full flex flex-col items-center justify-center gap-10 py-20'>
        <div className='w-full flex items-center justify-center gap-10'>
            <div onClick={handleGoogleLogin} className='text-base w-60 h-16 tracking-wide border-[1px] border-gray-400
            rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300'>
                <img className='w-12' src={googleLogo} alt="googleLogo" />
                <span className='text-sm text-gray-500'>Sign in with Google</span>
            </div>
            <button onClick={handleSignout} className='bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300'>Sign Out</button>
        </div>
        <div className='pb-64'></div>
        <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
    </div>
  )
}

export default Login