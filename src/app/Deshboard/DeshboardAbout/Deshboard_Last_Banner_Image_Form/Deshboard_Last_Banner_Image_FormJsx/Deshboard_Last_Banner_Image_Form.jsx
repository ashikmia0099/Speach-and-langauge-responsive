

'use client'
import uploadToImgBB from '@/app/ImageUpload_Site/UploadImageBBImage';
import React from 'react'
import Swal from 'sweetalert2';

function Deshboard_Last_Banner_Image_Form() {




    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const AboutImageFiles = form.get('aboutbannerimage');
        const AboutImage = AboutImageFiles ? await uploadToImgBB(AboutImageFiles) : '';



        const blogsData = {
            AboutImage,


        };

        try {
            const response = await fetch("https://speach-and-langauge-responsive.vercel.app/About_Last_Banner_Imge_api", {
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
            <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6 text-white'> Last Banner Post Form</h1>
            <form onSubmit={handleFormSubmit}>

                <legend className="fieldset-legend text-lg font-semibold pt-5">Choose Image</legend>
                <input type="file" name='aboutbannerimage' className="file-input w-full text-white" />


                <div className='mt-6'>
                    <button
                        type="submit"
                        className='btn w-full shadow-2xs rounded-full bg-[#9EFF00] text-lg text-black'
                    >
                        Submit
                    </button>
                </div>

            </form>
        </div>
    )
}

export default Deshboard_Last_Banner_Image_Form