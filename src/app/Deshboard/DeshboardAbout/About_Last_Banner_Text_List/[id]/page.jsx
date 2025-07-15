
'use client'

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useAuth } from "../../../../../../Context/AuthContext/AuthContext";
import { useParams, useRouter } from "next/navigation";



function About_Last_Banner_Text_Upadate_Form() {

    
      const { last_banner_text, setlast_banner_text } = useAuth();
      const [singledata, setSingleData] = useState("");
      const params = useParams();
      const router = useRouter();
      const id = params?.id
    
    
      useEffect(() => {
        fetch('https://speach-and-langauge-responsive.vercel.app/Last_banner_text_api')
          .then(res => res.json())
          .then(data => {
            setlast_banner_text(data)
          })
      }, [])
    
      console.log("images", last_banner_text)


      
    useEffect(() => {

        if (last_banner_text.length > 0 && id) {
            const found = last_banner_text.find(news => news._id === id);
            setSingleData(found);

        }

    }, [last_banner_text, id])


    console.log(singledata)


    
    


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const Title = form.get('title');
        const Description = form.get('Descriptions');
        
        const postedData = {
          
            Title,
            Description,

        };



        try {
            const response = await fetch(`https://speach-and-langauge-responsive.vercel.app/Last_banner_text_api?id=${id}`, {
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
            <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6 text-white'>Last Banner Text Post Form</h1>
            <form onSubmit={handleFormSubmit}>

                <div>
                    <legend className="text-lg font-semibold pt-5 text-white">Title  </legend>
                    <input defaultValue={singledata?.Title || ''} type="text" name='title' className="input w-full text-white text-lg" placeholder="Title Banner One" required />
                </div>
               
                <div>

                    <legend className="fieldset-legend text-lg font-semibold pt-5">Description <span className=' text-[12px]'>(max 70 word)</span> </legend>
                    <textarea defaultValue={singledata?.Description || ''} name='Descriptions' className="textarea w-full text-white" placeholder="Description" rows={12} ></textarea>

                </div>

                <button type="submit" className='btn w-full bg-[#9EFF00] border-none text-black mt-10 text-lg font-semibold'>
                    Update
                </button>

            </form>
        </div>
    )
}

export default About_Last_Banner_Text_Upadate_Form