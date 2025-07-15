'use client'

import React from 'react'
import Swal from 'sweetalert2';

function DeshboardResourseCategoryOneForm() {



    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const Category_Name_One = form.get('categoryNameone');
      


        const blogsData = {
            Category_Name_One,
            


        };

        try {
            const response = await fetch("http://localhost:3000/Resourse_Category_One_api", {
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
            <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6 text-white'>Navbar Resourse Category One Form</h1>
            <form onSubmit={handleFormSubmit}>

                <legend className="fieldset-legend text-lg font-semibold pt-5">Category Name One</legend>
                <input type="text" name='categoryNameone' className="input w-full text-white" placeholder="Category Name One" required />

            
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

export default DeshboardResourseCategoryOneForm




