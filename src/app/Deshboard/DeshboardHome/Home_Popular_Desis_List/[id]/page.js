


'use client'

import { useEffect, useState } from "react";

import Swal from "sweetalert2";
import { TiPlus } from "react-icons/ti";
import uploadToImgBB from "@/app/ImageUpload_Site/UploadImageBBImage";
import { useParams, useRouter } from "next/navigation";
import { useAuth } from "../../../../../../Context/AuthContext/AuthContext";


function Home_Popular_Desis_Update_Form() {

    const { desies, setDesies } = useAuth();
    const [singledata, setSingleData] = useState([]);

    const params = useParams();
    const router = useRouter();
    const id = params?.id;

    useEffect(() => {
        fetch('https://speach-and-langauge-responsive.vercel.app/Popular_Desise')
            .then(res => res.json())
            .then(data => {
                setDesies(data)

            })
    }, [])


    console.log('teacher data', desies)



    useEffect(() => {

        if (desies.length > 0 && id) {
            const found = desies.find(data => data._id === id)
            setSingleData(found)

        }
    }, [desies, id])

    console.log("seciond banner image", singledata)




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
        const Choose_Image = Choose_Image_File && Choose_Image_File.size > 0 ? await uploadToImgBB(SingleImageFile) : singledata.Choose_Image;


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
            const response = await fetch(`https://speach-and-langauge-responsive.vercel.app/Popular_Desise?id=${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(blogsData),
            });

            const res = await response.json();

            if (response.ok) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your Post Successfully Added!',
                    showConfirmButton: false,
                    timer: 1500
                });
                router.push('/Deshboard/DeshboardHome/Home_Popular_Desis_List');

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
            <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6 text-white'>Popular Desis Update Form</h1>
            <form onSubmit={handleFormSubmit}>

                <div className=' gap-3'>
                    <div>
                        <legend className="text-lg font-semibold pt-5 text-white">Desis Name</legend>
                        <input defaultValue={singledata?.Desis_Name || ''} type="text" name='desisName' className="input w-full text-white text-lg" placeholder="Blog Title"  />
                    </div>
                </div>
                <div className=" flex items-center py-5 justify-between">
                    <div>
                        <legend className="text-lg font-semibold pt-5 text-white">Choose Desis Banner Image</legend>
                        <input type="file" name='ChooseImage' className="input w-full text-white text-lg" placeholder="Choose Image"  />
                    </div>
                    <img src={singledata.Choose_Image} className=" h-40 w-40 rounded-xl" alt="images" />
                </div>


                <div className='py-10 pb-16'>
                    <div>
                        <h4 className='text-xl font-semibold btn bg-[#9EFF00] text-black rounded-full px-10'>Section 1</h4>
                    </div>
                    <div className='grid grid-cols-2 gap-3'>
                        <div>
                            <legend className="text-lg font-semibold pt-5 text-white">Description Title</legend>
                            <input defaultValue={singledata?.Description_Title || ''} type="text" name='descriptiontitle' className="input w-full text-white text-lg" placeholder="Description Title"  />
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
                                <input defaultValue={section?.title || ''} type="text" name={`descriptionTitle_${index}`} className="input w-full text-lg text-white" placeholder="Description Title"  />
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

export default Home_Popular_Desis_Update_Form