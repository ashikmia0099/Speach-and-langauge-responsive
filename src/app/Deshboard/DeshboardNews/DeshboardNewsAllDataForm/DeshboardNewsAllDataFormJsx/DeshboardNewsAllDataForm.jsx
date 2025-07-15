'use client'
import uploadToImgBB from '@/app/ImageUpload_Site/UploadImageBBImage';
import React from 'react'

import Swal from 'sweetalert2';


function DeshboardNewsAllDataForm() {




    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const AboutBannerTitle = form.get('titleName');
        const Description = form.get('Description');
        const AboutImageFiles = form.get('aboutbannerimage');
        const AboutImage = AboutImageFiles ? await uploadToImgBB(AboutImageFiles) : '';



        const blogsData = {
            AboutBannerTitle,
            Description,
            AboutImage,
            PostTime: new Date().toISOString(),


        };

        try {
            const response = await fetch("http://localhost:3000/News_api", {
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
                // e.target.reset();

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
            <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6 text-white'>News and Update Post Form</h1>
            <form onSubmit={handleFormSubmit}>

                

                <legend className="fieldset-legend text-lg font-semibold pt-5">Title Name</legend>
                <input type="text" name='titleName' className="input w-full text-white" placeholder="Title Name" required />

                <legend className="fieldset-legend text-lg font-semibold pt-5">Image</legend>
                <input type="file" name='aboutbannerimage' className="file-input w-full text-white" />


              
                <legend className="fieldset-legend text-lg font-semibold pt-5">Description <span className=' text-[12px]'>(max 70 word)</span> </legend>
                <textarea name='Description' className="textarea w-full text-white" placeholder="Description" rows={12} ></textarea>



                <div className='mt-6'>
                    <button type="submit" className='btn w-full shadow-2xs rounded-full bg-[#9EFF00] text-lg text-black' >
                        Submit
                    </button>
                </div>

            </form>
        </div>
    )
}

export default DeshboardNewsAllDataForm