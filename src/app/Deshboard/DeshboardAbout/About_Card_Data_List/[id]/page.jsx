
'use client'

import { useEffect, useState } from "react";

import Swal from "sweetalert2";
import { TiPlus } from "react-icons/ti";
import uploadToImgBB from "@/app/ImageUpload_Site/UploadImageBBImage";
import { useAuth } from "../../../../../../Context/AuthContext/AuthContext";
import { useParams, useRouter } from "next/navigation";


function About_Image_Data_Update() {


    const { about_all_Image, setabout_all_Image } = useAuth();
    const [singledata, setSingleData] = useState(null);

    const params = useParams();
    const router = useRouter()
    const id = params?.id;



    useEffect(() => {
        fetch('https://speach-and-langauge-responsive.vercel.app/About_Slide_api')
            .then(res => res.json())
            .then(data => {
                const dataWithIds = data.map((item, index) => ({ id: index + 1, ...item }))

                setabout_all_Image(dataWithIds)
            })
    }, [])





    // fetch all contact data



    useEffect(() => {

        if (about_all_Image.length > 0 && id) {
            const found = about_all_Image.find(news => news._id === id);
            setSingleData(found);

        }

    }, [about_all_Image, id])





    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const Choose_Image_File = form.get('ChooseImage');
        const Choose_Image = Choose_Image_File ? await uploadToImgBB(Choose_Image_File) : '';

        const blogsData = {

            Choose_Image,

        };

        try {
            const response = await fetch(`https://speach-and-langauge-responsive.vercel.app/About_Slide_api?id=${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(blogsData),
            });

            const res = await response.json();

            if (response.ok) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Updated Successfully!',
                    showConfirmButton: false,
                    timer: 1500,
                });
                router.push('/Deshboard/DeshboardAbout/About_Card_Data_List');
            } else {
                Swal.fire('Error!', res.error || 'Something went wrong.', 'error');
            }
        } catch (error) {
            Swal.fire('Network Error!', error.message, 'error');
        }
    };


    return (
        <div className='m-10 px-10 py-10 border border-[#9EFF00] rounded-2xl'>
            <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6 text-white'>All Image Update Form</h1>
            <form onSubmit={handleFormSubmit}>

                <div className=" flex items-center justify-center pt-5">

                    {singledata?.Choose_Image && (
                        <img src={singledata.Choose_Image} className="h-40 w-40 rounded-2xl" alt="Selected" />
                    )}

                </div>
                <div>
                    <legend className="text-lg font-semibold pt-5 text-white">Choose Image</legend>
                    <input type="file" name='ChooseImage' className="input w-full text-white text-lg" placeholder="Choose Image" required />
                </div>

                <button type="submit" className='btn w-full bg-[#9EFF00] border-none text-black mt-10 text-lg font-semibold'>
                    Update
                </button>
            </form>
        </div>
    )
}

export default About_Image_Data_Update