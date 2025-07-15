
'use client'

import { useEffect, useState } from "react";

import Swal from "sweetalert2";
import { TiPlus } from "react-icons/ti";
import uploadToImgBB from "@/app/ImageUpload_Site/UploadImageBBImage";
import { useAuth } from "../../../../../../Context/AuthContext/AuthContext";
import { useParams, useRouter } from "next/navigation";


function Home_Community_Update_Form() {


    const { ourEvent, setourEvent } = useAuth()
    const [singledata, setSingleData] = useState('');

    const [increseDescripton, setincreseDescripton] = useState([]);
    const createdOn = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const params = useParams();
    const router = useRouter();
    const id = params?.id;






    useEffect(() => {
        fetch('https://speach-and-langauge-responsive.vercel.app/Community_api')
            .then(res => res.json())
            .then(data => {
                setourEvent(data)

            })
    }, [])


    console.log('teacher data', ourEvent)




    useEffect(() => {

        if (ourEvent.length > 0 && id) {
            const found = ourEvent.find(data => data._id === id)
            setSingleData(found)

        }
    }, [ourEvent, id])

    console.log("community data", singledata)




    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const Event_Title_1 = form.get('eventtitle1');
        const Event_Title_2 = form.get('eventtitle2');
        const Description = form.get('Description');
        const Choose_Image_File = form.get('ChooseImage');
        const Choose_Image = Choose_Image_File && Choose_Image_File.size > 0 ? await uploadToImgBB(Choose_Image_File) : singledata.Choose_Image;


        const blogsData = {
            Event_Title_1,
            Event_Title_2,
            Description,
            Choose_Image,

        };

        try {
            const response = await fetch(`https://speach-and-langauge-responsive.vercel.app/Community_api?id=${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(blogsData),
            });


            if (response.ok) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your Post Successfully Added!',
                    showConfirmButton: false,
                    timer: 1500
                });
                router.push('/Deshboard/DeshboardHome/Home_Community_List');

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
            <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6 text-white'>Community Event Update Form </h1>
            <form onSubmit={handleFormSubmit}>

                <div className=' gap-3'>
                    <div>
                        <legend className="text-lg font-semibold pt-5 text-white">Event Title 1</legend>
                        <input defaultValue={singledata.Event_Title_1 || ""} type="text" name='eventtitle1' className="input w-full text-white text-lg" placeholder="Blog Title"  />
                    </div>
                </div>
                <div>
                    <legend className="text-lg font-semibold pt-5 text-white">Event Title 2</legend>
                    <input defaultValue={singledata.Event_Title_2 || ""} type="text" name='eventtitle2' className="input w-full text-white text-lg" placeholder="Blog Title"  />
                </div>
                <div className=" flex items-center justify-between py-5">
                    <div>
                        <legend className="text-lg font-semibold pt-5 text-white">Choose Event Image</legend>
                        <input type="file" name='ChooseImage' className="input w-full text-white text-lg" placeholder="Choose Image"  />
                    </div>
                    <div>
                        <img src={singledata.Choose_Image} alt="imge" className=" h-40 w-40 rounded-xl " />
                    </div>
                </div>
                <div>
                    <legend className="text-lg font-semibold pt-5 text-white">Description</legend>
                    <textarea defaultValue={singledata.Description || ""} className="textarea w-full text-white text-lg" name='Description' placeholder="Description " rows={12} ></textarea>
                </div>

                <button type="submit" className='btn w-full bg-[#9EFF00] border-none text-black mt-10 text-lg font-semibold'>
                    Update
                </button>

            </form>
        </div>
    )
}

export default Home_Community_Update_Form