



'use client'

import { useEffect, useState } from "react";

import Swal from "sweetalert2";
import { TiPlus } from "react-icons/ti";
import uploadToImgBB from "@/app/ImageUpload_Site/UploadImageBBImage";
import { useAuth } from "../../../../../../Context/AuthContext/AuthContext";
import { useParams, useRouter } from "next/navigation";


function About_Three_Banner_Form() {


    const [posttype, setPostType] = useState("One")
    const [single_Data, set_single_data] = useState(null);
    const { all_three_banner, setall_three_banner } = useAuth();

    const params = useParams();
    const router = useRouter();
    const id = params?.id;


    useEffect(() => {
        fetch("http://localhost:3000/About_Three_Banner_api")
            .then(res => res.json())
            .then(data => {
                setall_three_banner(data)
            })
    }, [])


    console.log("all three data", all_three_banner)



    // id wise data find


    useEffect(() => {

        if (all_three_banner.length > 0 && id) {
            const found = all_three_banner.find(data => data._id === id)
            set_single_data(found)

            if (found?.Selected_type)
                setPostType(found.Selected_type)
        }
    }, [all_three_banner, id])


    console.log('single Three Banner', single_Data)



    



    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const Selected_type = form.get('posttype');

        let postedData = {
            Selected_type,
           

        };

        if (Selected_type === "One") {
            const Title_Banner = form.get('bannerone');
            const Description = form.get('description');
            const file1 = form.get('event_Image_1');
            const Choose_Image = file1 ? await uploadToImgBB(file1) : "";


            postedData = {
                Selected_type,
                Title_Banner,
                Description,
                Choose_Image,
            };
        }

        if (Selected_type === "Two") {
            const Title_Banner = form.get('bannerone');
            const Description = form.get('description');
            const file1 = form.get('event_Image_1');
            const Choose_Image = file1 ? await uploadToImgBB(file1) : "";
            postedData = {

                Selected_type,
                Title_Banner,
                Description,
                Choose_Image,
            };
        }

        if (Selected_type === "Three") {
            const Title_Banner = form.get('bannerone');
            const Description = form.get('description');
            const file1 = form.get('event_Image_1');
            const Choose_Image = file1 ? await uploadToImgBB(file1) : "";
            postedData = {

                Selected_type,
                Title_Banner,
                Description,
                Choose_Image,
            };
        }

        try {
            const response = await fetch(`http://localhost:3000/About_Three_Banner_api?id=${id}`, {
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
                 router.push('/Deshboard/DeshboardAbout/About_Three_Banner_List');

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
            <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6 text-white'> Three Banner Update Form</h1>
            <form onSubmit={handleFormSubmit}>


                <div>
                    <legend className="text-lg font-semibold pt-5 text-white pb-2">Choose Post Type </legend>
                    <select
                        value={posttype}
                        onChange={(e) => setPostType(e.target.value)}
                        defaultValue="Choose Number"
                        name="posttype"
                        className="select w-full text-white text-lg" required>
                        <option disabled={true} className=" text-white text-lg">Select Post Type</option>
                        <option className=" text-white text-lg">One</option>
                        <option className=" text-white text-lg">Two</option>
                        <option className=" text-white text-lg">Three</option>

                    </select>
                </div>

                {
                    posttype === "One" && (

                        <>

                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Title Banner One  </legend>
                                <input defaultValue={single_Data?.Title_Banner || ""} type="text" name='bannerone' className="input w-full text-white text-lg" placeholder="Title Banner One" required />
                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Description (max 100 word)</legend>
                                <textarea defaultValue={single_Data?.Description || ""} className="textarea w-full text-white text-lg" name='description' placeholder="Description " rows={12} required></textarea>
                            </div>
                            <div className=" grid grid-cols-5 gap-6 ">
                                <div className=" col-span-4">
                                    <legend className="text-lg font-semibold pt-5 text-white">Choose Banner Image </legend>
                                    <input  type="file" name='event_Image_1' className="input w-full text-white text-lg" placeholder="Choose Image" required />
                                </div>
                                <div className=" col-span-1">
                                    <img src={single_Data?.Choose_Image} className=" h-40 w-40 rounded-2xl mt-5"></img>
                                </div>
                            </div>
                        </>

                    )
                }
                {
                    posttype === "Two" && (

                        <>

                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Title Banner Two  </legend>
                                <input defaultValue={single_Data?.Title_Banner || ""} type="text" name='bannerone' className="input w-full text-white text-lg" placeholder="Title Banner One" required />
                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Description (max 100 word)</legend>
                                <textarea defaultValue={single_Data?.Description || ""} className="textarea w-full text-white text-lg" name='description' placeholder="Description " rows={12} required></textarea>
                            </div>
                           <div className=" grid grid-cols-5 gap-6 ">
                                <div className=" col-span-4">
                                    <legend className="text-lg font-semibold pt-5 text-white">Choose Banner Image </legend>
                                    <input  type="file" name='event_Image_1' className="input w-full text-white text-lg" placeholder="Choose Image" required />
                                </div>
                                <div className=" col-span-1">
                                    <img src={single_Data?.Choose_Image} className=" h-40 w-40 rounded-2xl mt-5"></img>
                                </div>
                            </div>

                        </>

                    )
                }


                {
                    posttype === "Three" && (
                        <>

                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Title Banner Three  </legend>
                                <input defaultValue={single_Data?.Title_Banner || ""} type="text" name='bannerone' className="input w-full text-white text-lg" placeholder="Title Banner One" required />
                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Description (max 100 word)</legend>
                                <textarea defaultValue={single_Data?.Description || ""} className="textarea w-full text-white text-lg" name='description' placeholder="Description " rows={12} required></textarea>
                            </div>
                              <div className=" grid grid-cols-5 gap-6 ">
                                <div className=" col-span-4">
                                    <legend className="text-lg font-semibold pt-5 text-white">Choose Banner Image </legend>
                                    <input  type="file" name='event_Image_1' className="input w-full text-white text-lg" placeholder="Choose Image" required />
                                </div>
                                <div className=" col-span-1">
                                    <img src={single_Data?.Choose_Image} className=" h-40 w-40 rounded-2xl mt-5"></img>
                                </div>
                            </div>

                        </>
                    )
                }

                <button type="submit" className='btn w-full bg-[#9EFF00] border-none text-black mt-10 text-lg font-semibold'>
                    Submit
                </button>

            </form>
        </div>
    )
}

export default About_Three_Banner_Form