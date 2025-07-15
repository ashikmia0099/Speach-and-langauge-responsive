
'use client'

import { useState } from "react";

import Swal from "sweetalert2";
import { TiPlus } from "react-icons/ti";
import uploadToImgBB from "@/app/ImageUpload_Site/UploadImageBBImage";


function About_Image_Data() {


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const Choose_Image_File = form.get('ChooseImage');
        const Choose_Image = Choose_Image_File ? await uploadToImgBB(Choose_Image_File) : '';

       

        const blogsData = {
            
            Choose_Image,
            
        };

        try {
            const response = await fetch("http://localhost:3000/About_Slide_api", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(blogsData),
            });

            const res = await response.json();

            if (res.insertedId) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your Post Successfully Added!',
                    showConfirmButton: false,
                    timer: 1500
                });
                e.target.reset();
               
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Something went wrong.',
                    icon: 'error',
                    confirmButtonText: 'Try again'
                });
            }
        } catch (error) {
            Swal.fire({
                title: 'Network Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };


    return (
        <div className='m-10 px-10 py-10 border border-[#9EFF00] rounded-2xl'>
            <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6 text-white'>All Image Form</h1>
            <form onSubmit={handleFormSubmit}>

                <div>
                    <legend className="text-lg font-semibold pt-5 text-white">Choose Image</legend>
                    <input type="file" name='ChooseImage' className="input w-full text-white text-lg" placeholder="Choose Image" required />
                </div>

                <button type="submit" className='btn w-full bg-[#9EFF00] border-none text-black mt-10 text-lg font-semibold'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default About_Image_Data