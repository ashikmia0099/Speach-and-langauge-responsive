
'use client'

import { useState } from "react";

import Swal from "sweetalert2";
import uploadToImgBB from "@/app/ImageUpload_Site/UploadImageBBImage";


function Home_Community_Form() {


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

        const Event_Title_1 = form.get('eventtitle1');
        const Event_Title_2 = form.get('eventtitle2');
        const Description = form.get('Description');
        const Choose_Image_File = form.get('ChooseImage');
        const Choose_Image = Choose_Image_File ? await uploadToImgBB(Choose_Image_File) : '';


        const blogsData = {
            Event_Title_1,
            Event_Title_2,
            Description,
            Choose_Image,
           
        };

        try {
            const response = await fetch("https://speach-and-langauge-responsive.vercel.app/Community_api", {
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
            <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6 text-white'>Community Event Data Form </h1>
            <form onSubmit={handleFormSubmit}>

                <div className=' gap-3'>
                    <div>
                        <legend className="text-lg font-semibold pt-5 text-white">Event Title 1</legend>
                        <input type="text" name='eventtitle1' className="input w-full text-white text-lg" placeholder="Event Title 1" required />
                    </div>
                </div>
                <div>
                    <legend className="text-lg font-semibold pt-5 text-white">Event Title 2</legend>
                    <input type="text" name='eventtitle2' className="input w-full text-white text-lg" placeholder="Event Title 2" required />
                </div>
                  <div>
                    <legend className="text-lg font-semibold pt-5 text-white">Choose Event Image</legend>
                    <input type="file" name='ChooseImage' className="input w-full text-white text-lg" placeholder="Choose Image" required />
                </div>
                <div>
                    <legend className="text-lg font-semibold pt-5 text-white">Description</legend>
                    <textarea className="textarea w-full text-white text-lg" name='Description' placeholder="Description " rows={12} required></textarea>
                </div>

                <button type="submit" className='btn w-full bg-[#9EFF00] border-none text-black mt-10 text-lg font-semibold'>
                    Submit
                </button>

            </form>
        </div>
    )
}

export default Home_Community_Form