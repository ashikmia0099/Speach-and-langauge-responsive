
'use client'

import { useEffect, useState } from "react";

import Swal from "sweetalert2";
import { TiPlus } from "react-icons/ti";
import uploadToImgBB from "@/app/ImageUpload_Site/UploadImageBBImage";
import { useAuth } from "../../../../../../Context/AuthContext/AuthContext";
import { useParams, useRouter } from "next/navigation";


function Home_Communication_HelthCare_Update_Form() {



    const { healthCare, setHealthCare } = useAuth()
    const [singledata, setSingleData] = useState([]);
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
        fetch('http://localhost:3000/Communication_HelthCare_api')
            .then(res => res.json())
            .then(data => {
                setHealthCare(data)

            })
    }, [])


    useEffect(() => {

        if (healthCare.length > 0 && id) {
            const found = healthCare.find(data => data._id === id)
            setSingleData(found)

        }
    }, [healthCare, id])

    console.log("seciond banner image", singledata)







    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const Title_Name = form.get('desisName');
        const Over_View = form.get('Overview');
        const Choose_Image_File = form.get('ChooseImage');
        const Choose_Image = Choose_Image_File && Choose_Image_File.size > 0 ? await uploadToImgBB(Choose_Image_File) : singledata.Choose_Image;

        const DescriptionTitle = form.get('descriptiontitle');
        const Description = form.get('description');

        const dynamicDescriptions = await Promise.all(
            increseDescripton.map(async (section, index) => {
                const title = form.get(`descriptionTitle_${index}`);

                const text = form.get(`descriptionDescription_${index}`);
                return { title, text };
            })
        );

        const blogsData = {
            Title_Name,
            Over_View,
            Choose_Image,
            DescriptionTitle,
            Description,
            dynamicDescriptions,

        };

        try {
            const response = await fetch(`http://localhost:3000/Communication_HelthCare_api?id=${id}`, {
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
                router.push('/Deshboard/DeshboardHome/Home_Communication_HelthCare_List');

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
            <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6 text-white'>Communication And Helthcare Update Form</h1>
            <form onSubmit={handleFormSubmit}>

                <div className=' gap-3'>
                    <div>
                        <legend className="text-lg font-semibold pt-5 text-white">Title Name</legend>
                        <input defaultValue={singledata?.Title_Name || ''} type="text" name='desisName' className="input w-full text-white text-lg" placeholder="Blog Title" />
                    </div>
                </div>
                <div>
                    <legend className="text-lg font-semibold pt-5 text-white">Overview</legend>
                    <textarea defaultValue={singledata?.Over_View || ''} className="textarea w-full text-white text-lg" name='Overview' placeholder="Description " rows={12} ></textarea>
                </div>
                <div className=" flex items-center justify-between py-5">
                    <div>
                        <legend className="text-lg font-semibold pt-5 text-white">Choose Desis Banner Image</legend>
                        <input type="file" name='ChooseImage' className="input w-full text-white text-lg" placeholder="Choose Image" />
                    </div>
                    <div>
                        <img src={singledata?.Choose_Image} className=" h-40 w-40 rounded-xl" />
                    </div>
                </div>



                <div className='py-10 pb-16'>
                    <div>
                        <h4 className='text-xl font-semibold btn bg-[#9EFF00] text-black rounded-full px-10'>Section 1</h4>
                    </div>
                    <div className='grid grid-cols-2 gap-3'>
                        <div>
                            <legend className="text-lg font-semibold pt-5 text-white">Description Title</legend>
                            <input defaultValue={singledata?.DescriptionTitle || ''} type="text" name='descriptiontitle' className="input w-full text-white text-lg" placeholder="Description Title" />
                        </div>
                    </div>
                    <div>
                        <legend className="text-lg font-semibold pt-5 text-white">Description</legend>
                        <textarea defaultValue={singledata?.Description || ''} className="textarea w-full text-white text-lg" name='description' placeholder="Description " rows={12} ></textarea>
                    </div>
                </div>

                {singledata.dynamicDescriptions?.map((section, index) => (
                    <div key={section.id} className='py-10 pb-16'>
                        <div>
                            <h4 className='text-xl font-semibold btn bg-[#9EFF00] text-black rounded-full px-10'>
                                Section {index + 2}
                            </h4>
                        </div>
                        <div className='grid grid-cols-2 gap-3'>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Description Title</legend>
                                <input defaultValue={section?.title || ''} type="text" name={`descriptionTitle_${index}`} className="input w-full text-lg text-white" placeholder="Description Title" />
                            </div>
                        </div>
                        <div>
                            <legend className="text-lg font-semibold pt-5 text-white">Description</legend>
                            <textarea defaultValue={section?.text || ''} className="textarea w-full text-white text-lg" name={`descriptionDescription_${index}`} placeholder="Description" rows={12} ></textarea>
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

export default Home_Communication_HelthCare_Update_Form