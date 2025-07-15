'use client'


import Link from 'next/link'
import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FcGoogle } from "react-icons/fc";
// import SocialSignUpSignIn from '../../SocialSignUpSignIn/SocialSignUpSignIn';

// import { useAuth } from '../../../../../context/AuthContext';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';

function SignIn() {


    const router = useRouter();
    // const { handleSignInWithEmail, user, setUser, handleSignOut } = useAuth()


    const handleSignIn = (e) => {
        e.preventDefault();


        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');


        console.log(email, password);



        handleSignInWithEmail(email, password)
            .then((userCredential) => {

                const signInuser = userCredential.user
                console.log(signInuser)


               

                if (!signInuser.emailVerified) {
                    toast.warning("Please verify your email before logging in.");
                    handleSignOut()
                    return; 
                }
    
                // ✅ Email is verified, proceed to dashboard
                router.push("/dashboard");



            })
            .catch((error) => {
                toast.error("Invalid email or password.");
                
                console.error("Sign-in error:", error.message);
            })




    }



    return (
        <div className=' flex-row items-center pt-10'>
            <ToastContainer />
            <div className=' text-center '>
                <h1 className=' text-5xl text-white font-semibold'>Please Login</h1>
                <p className=' text-xl py-4'>
                    <span className='text-[#D8FF99]'>Create Account?</span>
                    <span className='  mx-6  border-b border-[#2572e7] font-semibold'><Link href="/Auth/SignUP" className="text-white">Sign Up</Link>
                    </span>
                </p>
            </div>
            <div className=' w-[60%] mx-auto' >
                <form action="" onSubmit={handleSignIn}>
                    <div className=' mt-2'>
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email" name='email' placeholder="Enter your email" className="input w-full rounded-full bg-white text-lg text-black" />
                    </div>
                    <div className=' mt-2'>
                        <legend className="fieldset-legend">password</legend>
                        <input type="password" name='password' placeholder="Enter password" className="input w-full rounded-full" />
                    </div>
                    <div className=' mt-6'>
                        <button className=' btn w-full shadow-2xs rounded-full bg-[#9EFF00] text-lg text-black'>Sign In</button>
                    </div>


                </form>
                <div className="divider pt-4"> Or sign up and Sign in With</div>
               
            </div>
        </div>
    )
}

export default SignIn