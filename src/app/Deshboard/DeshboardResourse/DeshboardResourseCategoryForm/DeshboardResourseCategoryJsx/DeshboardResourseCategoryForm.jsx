'use client'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';


function DeshboardResourseCategoryForm() {


    const [categoryOne, setCategoryOne] = useState([]);
    const [selectCategory, setSelectedCategory] = useState([]);


    useEffect(() => {

        fetch('https://speach-and-langauge-responsive.vercel.app/Resourse_Category_One_api')
            .then(res => res.json())
            .then(data => {
                setCategoryOne(data);
            })
    }, [])

    console.log(categoryOne)

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const Selected_Category_Type = form.get('categorytype');
        const Second_Category = form.get('secondCategory');
       



        const blogsData = {
            Selected_Category_Type,
            Second_Category,
            
        };

        try {
            const response = await fetch("https://speach-and-langauge-responsive.vercel.app/Resourse_Category", {
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
            <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6 text-white'>Deshboard Resourse Category Form Second</h1>
            <form onSubmit={handleFormSubmit}>

                {/* Select header category */}
                <div>
                    <legend className="text-lg font-semibold pt-5 text-white">Select Blog Category</legend>
                    <select
                        name="categorytype"
                        onChange={(e) => {
                            const category = categoryOne.find(cat => cat.Category_Name_One === e.target.value);
                            setSelectedCategory(category);

                        }}
                        defaultValue=""
                        className="select w-full text-white text-lg"
                    >
                        <option disabled value="" className=" text-white text-lg">Choose Category Name</option>
                        {Array.isArray(categoryOne) && categoryOne.map(cat => (
                            <option key={cat._id}>{cat.Category_Name_One}</option>
                        ))}
                    </select>
                </div>


                <div className=' gap-3'>
                    <div>
                        <legend className="text-lg font-semibold pt-5 text-white">Category Title Second</legend>
                        <input type="text" name='secondCategory' className="input w-full text-white text-lg" placeholder="Blog Title" required />
                    </div>
                </div>
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

export default DeshboardResourseCategoryForm