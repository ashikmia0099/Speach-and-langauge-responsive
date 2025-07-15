'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation'
// import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'
// import { sendEmailVerification } from "firebase/auth";
// import { useAuth } from '../../../../../context/AuthContext'
// import SocialSignUpSignIn from '../../SocialSignUpSignIn/SocialSignUpSignIn'

function SignUp() {

    const router = useRouter()
    // const { handleSignUpWithEamil, user, setUsers, UserProfileUpdate, handleSignOut } = useAuth()

    const [phone, setPhone] = useState('');
    const [countryName, setCountryName] = useState('');



    const handleSignUp = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
       
        console.log("Name:", name);
        console.log("Email:", email);
       
       
        console.log("Password:", password);

        if (!phone || phone.length < 6) {
            toast.error("Please enter a valid phone number.");
            return;
        }

        handleSignUpWithEamil(email, password)
            .then((userCredential) => {
                const signupuser = userCredential.user;
                console.log(signupuser);

                // Update display name
                UserProfileUpdate({ displayName: name });

                // Send email verification
                sendEmailVerification(signupuser)
                    .then(() => {
                        toast.success('Verification email sent. Please check your inbox.');
                    })
                    .catch((error) => {
                        toast.error("Error sending email verification. Check email format.");
                        console.error(error);
                    });

                // user all data store in database
                const UserInfo = {
                    Name: name,
                    Email: email,
                    Phone: whatsapp,
                    Country: countryName
                };

                fetch("https://speach-and-langauge-responsive.vercel.app/api/signinsignup/Signupapi", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(UserInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("User info stored in DB:", data);

                        // 👇 Only update state and sign out AFTER saving user data
                        setUsers(null); // Clear user from context
                        handleSignOut(); // Now sign out
                        
                    })
                    .catch(err => {
                        console.error("Error storing user info:", err);
                        toast.error("User saved failed");
                    });
            })
            .catch((error) => {
                console.log("Error", error);
                toast.error(error.message);
            });

    }




    // phone number and country set





    const handleCountryPhoneNumber = (value, countryData) => {
        setPhone(value);
        setCountryName(countryData?.name || '');

        console.log("Phone Number:", value);
        console.log("Country Name:", countryData?.name);
    }

    return (
        <div className='flex-row items-center pt-2'>
            <ToastContainer />
            <div className='text-center'>
                <h1 className='text-5xl text-white font-semibold'>Create Account</h1>
                <p className='text-xl py-4'>
                    <span className='text-[#D8FF99]'>Already have account</span>
                    <span className='mx-6 border-b border-[#2572e7] font-semibold'>
                        <Link href="/components/Auth">Sign In</Link>
                    </span>
                </p>
            </div>

            <div className='w-[60%] mx-auto'>
                <form onSubmit={handleSignUp}>
                    <div className='mt-2'>
                        <legend className="fieldset-legend">Name</legend>
                        <input type="text" name='name' placeholder="Enter your Name" className="input w-full rounded-full border-none shadow-2xs" required />
                    </div>
                    <div className='mt-2'>
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email" name='email' placeholder="Enter your email" className="input w-full rounded-full border-none shadow-2xs" required />
                    </div>

                    

                    <div className='mt-2'>
                        <legend className="fieldset-legend">Password</legend>
                        <input type="password" name='password' placeholder="Enter password" className="input w-full rounded-full border-none shadow-2xs" required />
                    </div>

                    <div className='mt-6'>
                        <button className='btn w-full shadow-2xs rounded-full bg-[#9EFF00] text-lg text-black'>Sign up</button>
                    </div>
                </form>

                <div className="divider pt-4">Or sign up and Sign in With</div>
                
            </div>
        </div>
    )
}

export default SignUp;