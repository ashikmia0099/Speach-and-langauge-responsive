'use client'
import uploadToImgBB from '@/app/ImageUpload_Site/UploadImageBBImage';
import React, { useEffect, useState } from 'react'

import Swal from 'sweetalert2';
import { useAuth } from '../../../../../../Context/AuthContext/AuthContext';
import { useParams, useRouter } from 'next/navigation';


function DeshboardNewsAllDataForm() {



    const { all_news, set_All_news } = useAuth();
    const [singleData, useSingleData] = useState();

    const params = useParams();
    const router = useRouter();
    const id = params?.id


    useEffect(() => {

        fetch("http://localhost:3000/News_api")
            .then(res => res.json())
            .then(data => {
                const dataWithIds = data.map((item, index) => ({ id: index + 1, ...item }))
                set_All_news(dataWithIds)

            })
    }, []);



    useEffect(() => {

        if (all_news.length > 0 && id) {
            const found = all_news.find(data => data._id === id)
            useSingleData(found);
            console.log(found)
        }
    }, [all_news, id])


    console.log('contact data ', all_news)




    console.log('single data ', singleData)





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
             const response = await fetch(`http://localhost:3000/News_api?id=${id}`, {
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
               router.push('/Deshboard/DeshboardNews/DeshboardNewsAllDataList');
             } else {
               Swal.fire('Error!', res.error || 'Something went wrong.', 'error');
             }
           } catch (error) {
             Swal.fire('Network Error!', error.message, 'error');
           }
    };




    return (
        <div className='m-10 px-10 py-10 border border-[#9EFF00] rounded-2xl'>
            <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6 text-white'>News and Update Edit Form</h1>
            <form onSubmit={handleFormSubmit}>



                <legend className="fieldset-legend text-lg font-semibold pt-5">Title Name</legend>
                <input defaultValue={singleData?.AboutBannerTitle || ''} type="text" name='titleName' className="input w-full text-white" placeholder="Title Name" required />
               
                <div className=' grid grid-cols-5 justify-between gap-10'>

                    <div className=' col-span-4'>

                        <legend className="fieldset-legend text-lg font-semibold pt-5">Image</legend>
                        <input type="file" name='aboutbannerimage' className="file-input w-full text-white" />

                    </div>
                    <div className=' col-span-1'>
                        {singleData?.AboutImage && (
                            <div className="mt-4">
                                <p className="text-white text-sm mb-2">Current Image:</p>
                                <img
                                    src={singleData.AboutImage}
                                    alt="Current uploaded"
                                    className="w-40 h-auto rounded-lg border border-gray-300"
                                />
                            </div>
                        )}
                    </div>
                </div>



                <legend className="fieldset-legend text-lg font-semibold pt-5">Description <span className=' text-[12px]'>(max 70 word)</span> </legend>
                <textarea defaultValue={singleData?.Description || ''} name='Description' className="textarea w-full text-white" placeholder="Description" rows={12} ></textarea>



                <div className='mt-6'>
                    <button type="submit" className='btn w-full shadow-2xs rounded-full bg-[#9EFF00] text-lg text-black' >
                        Update
                    </button>
                </div>

            </form>
        </div>
    )
}

export default DeshboardNewsAllDataForm