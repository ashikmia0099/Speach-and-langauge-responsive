

'use client'

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useAuth } from "../../../../../../Context/AuthContext/AuthContext";
import { useParams, useRouter } from "next/navigation";


function Home_Communiction_Hearing_Update_form() {

    
    const { Questions, setQuestion } = useAuth()
    const [singledata, setSingleData] = useState('');

    const params = useParams();
    const router = useRouter();
    const id = params?.id;



    // all banner image fetch


    useEffect(() => {
        fetch('https://speach-and-langauge-responsive.vercel.app/Communiction_Hearing_api')
            .then(res => res.json())
            .then(data => {
                setQuestion(data)

            })
    }, [])

    // id wise single data 


    useEffect(() => {

        if (Questions.length > 0 && id) {
            const found = Questions.find(data => data._id === id)
            setSingleData(found)
            
        }
    }, [Questions, id])

    console.log("seciond banner image", singledata)


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const Title_Name = form.get('Title_Name');
        const Description = form.get('Description');


        const blogsData = {
            Title_Name,
            Description,


        };

        try {
            const response = await fetch(`https://speach-and-langauge-responsive.vercel.app/Communiction_Hearing_api?id=${id}`, {
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
              router.push('/Deshboard/DeshboardHome/Home_Communiction_Hearing_List');

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
            <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6 text-white'>Communiction Hearing Update Form</h1>
            <form onSubmit={handleFormSubmit}>

                <div className=' gap-3'>
                    <div>
                        <legend className="text-lg font-semibold pt-5 text-white">Title Name</legend>
                        <input defaultValue={singledata.Title_Name || ""} type="text" name='Title_Name' className="input w-full text-white text-lg" placeholder="Blog Title" required />
                    </div>
                </div>
                <div>
                    <legend className="text-lg font-semibold pt-5 text-white">Description</legend>
                    <textarea  defaultValue={singledata.Description || ""} className="textarea w-full text-white text-lg" name='Description' placeholder="Description" rows={12} required></textarea>
                </div>

                <button type="submit" className='btn w-full bg-[#9EFF00] border-none text-black mt-10 text-lg font-semibold'>
                    Update
                </button>

            </form>
        </div>
    )
}

export default Home_Communiction_Hearing_Update_form