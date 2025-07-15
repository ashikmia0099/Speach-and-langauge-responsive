



'use client'

import { useEffect, useState } from "react";

import Swal from "sweetalert2";
import { TiPlus } from "react-icons/ti";
import uploadToImgBB from "@/app/ImageUpload_Site/UploadImageBBImage";
import { useAuth } from "../../../../../../Context/AuthContext/AuthContext";
import { useParams, useRouter } from "next/navigation";


function Deshboard_Last_Banner_Image_List() {


    const [single_Data, set_single_data] = useState(null);
    const { banner_last_image, setbanner_last_image } = useAuth();

    const params = useParams();
    const router = useRouter();
    const id = params?.id;


    useEffect(() => {
        fetch("https://speach-and-langauge-responsive.vercel.app/About_Last_Banner_Imge_api")
            .then(res => res.json())
            .then(data => {
                setbanner_last_image(data)
            })
    }, [])


    console.log("all three data", banner_last_image)



    // id wise data find


    useEffect(() => {

        if (banner_last_image.length > 0 && id) {
            const found = banner_last_image.find(data => data._id === id)
            set_single_data(found)

            if (found?.Selected_type)
                setPostType(found.Selected_type)
        }
    }, [banner_last_image, id])


    console.log('single Three Banner', single_Data)







    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);


        const AboutImageFiles = form.get('aboutbannerimage');
        const AboutImage = AboutImageFiles ? await uploadToImgBB(AboutImageFiles) : '';



        const postedData = {
            AboutImage,


        };




        try {
            const response = await fetch(`https://speach-and-langauge-responsive.vercel.app/About_Last_Banner_Imge_api?id=${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postedData),
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
                router.push('/Deshboard/DeshboardAbout/Deshboard_Last_Banner_Image_List');

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
            <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6 text-white'>About Page Banner Last Image Update</h1>
            <form onSubmit={handleFormSubmit}>

                <div className=" flex items-center justify-center pt-5">
                    {banner_last_image.length > 0 && (
                        <img
                            src={banner_last_image[0]?.AboutImage}
                            alt="Last Banner"
                            className="w-40 h-40 rounded-lg"
                        />
                    )}

                </div>

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

export default Deshboard_Last_Banner_Image_List