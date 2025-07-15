



'use client'

import { useEffect, useState } from "react";

import Swal from "sweetalert2";
import { TiPlus } from "react-icons/ti";
import uploadToImgBB from "@/app/ImageUpload_Site/UploadImageBBImage";
import { useAuth } from "../../../../../../Context/AuthContext/AuthContext";
import { useParams, useRouter } from "next/navigation";


function About_Title_Text_Update() {



    const { title_text, setall_title_text } = useAuth();
    const [singleData , setSingleData] = useState('')
    const params = useParams();
    const router = useRouter();
    const id = params?.id;


    // fetch all titel text

    useEffect(() => {
        fetch('https://speach-and-langauge-responsive.vercel.app/About_Title_Text_api')
            .then(res => res.json())
            .then(data => {
                setall_title_text(data)
            })
    }, [])

    console.log("all text ", title_text)


    // single data find id wise

    useEffect(()=>{

        if(title_text.length > 0 && id){
            const found = title_text.find(data => data._id === id)
            setSingleData(found)
            
        }
    },[])

    console.log("single data", singleData)





    




    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const Title_Text_One = form.get('textone');
        const Title_Text_Two = form.get('texttwo');
        const Description = form.get('Descriptions');


        const postedData = {

            Title_Text_One,
            Title_Text_Two,
            Description,


        };



        try {
            const response = await fetch(`https://speach-and-langauge-responsive.vercel.app/About_Title_Text_api?id=${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postedData),
            });

            const res = await response.json();

            if (response.ok) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your Post Updateed Successfully!',
                    showConfirmButton: false,
                    timer: 1500
                });
                e.target.reset();

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
            <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6 text-white'>Title Text Update Form</h1>
            <form onSubmit={handleFormSubmit}>

                <div>
                    <legend className="text-lg font-semibold pt-5 text-white">Title Text One  </legend>
                    <input defaultValue={singleData.Title_Text_One || ""} type="text" name='textone' className="input w-full text-white text-lg" placeholder="Title Banner One" required />
                </div>
                <div>
                    <legend className="text-lg font-semibold pt-5 text-white">Title Text Two  </legend>
                    <input defaultValue={singleData.Title_Text_Two || ""} type="text" name='texttwo' className="input w-full text-white text-lg" placeholder="Title Banner One" required />
                </div>
                <div>

                    <legend className="fieldset-legend text-lg font-semibold pt-5">Description <span className=' text-[12px]'>(max 70 word)</span> </legend>
                    <textarea defaultValue={singleData.Description || ""} name='Descriptions' className="textarea w-full text-white" placeholder="Description" rows={12} ></textarea>

                </div>

                <button type="submit" className='btn w-full bg-[#9EFF00] border-none text-black mt-10 text-lg font-semibold'>
                    Update
                </button>

            </form>
        </div>
    )
}

export default About_Title_Text_Update