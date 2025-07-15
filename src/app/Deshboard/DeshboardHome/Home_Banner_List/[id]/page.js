



'use client'

import { useEffect, useState } from "react";

import Swal from "sweetalert2";
import uploadToImgBB from "@/app/ImageUpload_Site/UploadImageBBImage";
import { useParams, useRouter } from "next/navigation";
import { useAuth } from "../../../../../../Context/AuthContext/AuthContext";


function Home_Banner_Update_Form() {


    const [posttype, setPostType] = useState("One")
    const [singledata, setSingleData] = useState('');
    const { banner_data, setbanner_data } = useAuth()

    const params = useParams();
    const router = useRouter();
    const id = params?.id;




    // id wise single data 


    useEffect(() => {

        if (banner_data.length > 0 && id) {
            const found = banner_data.find(data => data._id === id)
            setSingleData(found)
            if (found?.Selected_type)
                setPostType(found.Selected_type);
        }
    }, [banner_data, id])

    console.log("seciond banner image", singledata)




    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const Selected_type = form.get('posttype');

        let blogsData = {
            Selected_type,
            Title: null,
            Short_Overview: null,
            Choose_Image: "",
        };




        if (Selected_type === "One") {
            const Title = form.get('title');
            const Short_Overview = form.get('shortoverview');


            blogsData = {
                Selected_type,
                Title,
                Short_Overview,

            };
        }



        if (Selected_type === "Two") {
            const file1 = form.get('ChooseImage1');
            // const Choose_Image = file1 ? await uploadToImgBB(file1) : "";
            const Choose_Image = file1 && file1.size > 0 ? await uploadToImgBB(file1) : singledata.Choose_Image;

            blogsData = {

                Selected_type,
                Choose_Image,

            };
        }



        try {
            const response = await fetch(`https://speach-and-langauge-responsive.vercel.app/Banner_api?id=${id}`, {
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
                router.push('/Deshboard/DeshboardHome/Home_Banner_List');


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
            <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6 text-white'>Home Banner Form</h1>
            <form onSubmit={handleFormSubmit}>


                <div>
                    <legend className="text-lg font-semibold pt-5 text-white pb-2">Choose Post Type </legend>
                    <select
                        value={posttype}
                        onChange={(e) => setPostType(e.target.value)}
                        defaultValue="Pick a color"
                        name="posttype"
                        className="select w-full text-white text-lg" required>
                        <option disabled={true} className=" text-white text-lg">Select Post Type</option>
                        <option className=" text-white text-lg">One</option>
                        <option className=" text-white text-lg">Two</option>

                    </select>
                </div>




                {
                    posttype === "One" && (

                        <>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Title </legend>
                                <input defaultValue={singledata?.Title} type="text" name='title' className="input w-full text-white text-lg" placeholder=" Title" required />
                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Short Overview</legend>
                                <textarea defaultValue={singledata?.Short_Overview} className="textarea w-full text-white text-lg" name='shortoverview' placeholder="Over View " rows={12} required></textarea>
                            </div>



                        </>

                    )
                }

                {
                    posttype === "Two" && (
                        <div className=" flex justify-between py-5">
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Choose Event Image 1</legend>
                                <input type="file" name='ChooseImage1' className="input w-full text-white text-lg" placeholder="Choose Image" required />
                            </div>
                            <div>
                                <img src={singledata?.Choose_Image} alt="image" className=" h-40 w-40 rounded-2xl" />
                            </div>
                        </div>


                    )
                }




                <button type="submit" className='btn w-full bg-[#9EFF00] border-none text-black mt-10 text-lg font-semibold'>
                    Submit
                </button>

            </form>
        </div>
    )
}

export default Home_Banner_Update_Form