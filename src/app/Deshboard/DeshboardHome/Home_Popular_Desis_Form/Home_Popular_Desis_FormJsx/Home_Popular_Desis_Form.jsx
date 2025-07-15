
'use client'

import { useState } from "react";

import Swal from "sweetalert2";
import { TiPlus } from "react-icons/ti";
import uploadToImgBB from "@/app/ImageUpload_Site/UploadImageBBImage";


function Home_Popular_Desis_Form() {


    //   const { blogallcategory, user } = useAuth();
    const blogallcategory = 10;
    const user = 10;
    const [increseDescripton, setincreseDescripton] = useState([]);
    const createdOn = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    console.log(blogallcategory)
    console.log(user.displayName)


    const addSection = () => {
        setincreseDescripton(prev => [...prev, { id: Date.now() }]);
    };





    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const Desis_Name = form.get('desisName');
        const Choose_Image_File = form.get('ChooseImage');
        const Choose_Image = Choose_Image_File ? await uploadToImgBB(Choose_Image_File) : '';

        const Description_Title = form.get('descriptiontitle');
        const Description = form.get('description');

        const dynamicDescriptions = await Promise.all(
            increseDescripton.map(async (section, index) => {
                const title = form.get(`descriptionTitle_${index}`);

                const text = form.get(`descriptionDescription_${index}`);
                return { title, text };
            })
        );

        const blogsData = {
            Desis_Name,
            Choose_Image,
            Description_Title,
            Description,
            dynamicDescriptions,

        };

        try {
            const response = await fetch("http://localhost:3000/Popular_Desise", {
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
                setincreseDescripton([]);
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
            <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6 text-white'>Popular Desis Post Form</h1>
            <form onSubmit={handleFormSubmit}>

                <div className=' gap-3'>
                    <div>
                        <legend className="text-lg font-semibold pt-5 text-white">Desis Name</legend>
                        <input type="text" name='desisName' className="input w-full text-white text-lg" placeholder="Desis Name" required />
                    </div>
                </div>
                <div>
                    <legend className="text-lg font-semibold pt-5 text-white">Choose Desis Banner Image</legend>
                    <input type="file" name='ChooseImage' className="input w-full text-white text-lg" placeholder="Choose Image" required />
                </div>

                <div className='py-4 flex justify-between items-center'>
                    <h4 className='text-2xl font-semibold uppercase text-white'>Increase Description</h4>
                    <button
                        type="button"
                        className='btn bg-[#9EFF00] border-none text-5xl font-semibold text-black'
                        onClick={addSection}
                    >
                        <TiPlus />
                    </button>
                </div>

                <div className='py-10 pb-16'>
                    <div>
                        <h4 className='text-xl font-semibold btn bg-[#9EFF00] text-black rounded-full px-10'>Section 1</h4>
                    </div>
                    <div className='grid grid-cols-2 gap-3'>
                        <div>
                            <legend className="text-lg font-semibold pt-5 text-white">Description Title</legend>
                            <input type="text" name='descriptiontitle' className="input w-full text-white text-lg" placeholder="Description Title" required />
                        </div>
                    </div>
                    <div>
                        <legend className="text-lg font-semibold pt-5 text-white">Description</legend>
                        <textarea className="textarea w-full text-white text-lg" name='description' placeholder="Description " rows={12} required></textarea>
                    </div>
                </div>

                {increseDescripton.map((section, index) => (
                    <div key={section.id} className='py-10 pb-16'>
                        <div>
                            <h4 className='text-xl font-semibold btn bg-[#9EFF00] text-black rounded-full px-10'>
                                Section {index + 2}
                            </h4>
                        </div>
                        <div className='grid grid-cols-2 gap-3'>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Description Title</legend>
                                <input type="text" name={`descriptionTitle_${index}`} className="input w-full text-lg text-white" placeholder="Description Title" required />
                            </div>
                        </div>
                        <div>
                            <legend className="text-lg font-semibold pt-5 text-white">Description</legend>
                            <textarea className="textarea w-full text-white text-lg" name={`descriptionDescription_${index}`} placeholder="Description" rows={12} required></textarea>
                        </div>
                    </div>
                ))}

                <button type="submit" className='btn w-full bg-[#9EFF00] border-none text-black mt-10 text-lg font-semibold'>
                    Submit
                </button>

            </form>
        </div>
    )
}

export default Home_Popular_Desis_Form