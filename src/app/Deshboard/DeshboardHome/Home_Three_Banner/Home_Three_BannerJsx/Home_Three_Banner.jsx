
'use client'

import { useState } from "react";

import Swal from "sweetalert2";
import { TiPlus } from "react-icons/ti";
import uploadToImgBB from "@/app/ImageUpload_Site/UploadImageBBImage";


function Home_Three_Banner() {


    const [posttype, setPostType] = useState("One")








    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const Selected_type = form.get('posttype');

        let postedData = {
            Selected_type,
            Description: null,
            event_Image_1: "",
            Title_Banner_One: "",
            Title_Banner_Two: "",
            Title_Banner_Three: "",
            Choose_Event_Image_One: "",
            Choose_Event_Image_Two: "",
            Choose_Event_Image_Three: ""
        };

        if (Selected_type === "One") {
            const Title_Banner_One = form.get('bannerone');
            const Description = form.get('description');
            const file1 = form.get('event_Image_1');
            const Choose_Event_Image_One = file1 ? await uploadToImgBB(file1) : "";


            postedData = {
                Selected_type,
                Title_Banner_One,
                Description,
                Choose_Event_Image_One,
            };
        }

        if (Selected_type === "Two") {
            const Title_Banner_Two = form.get('bannertwo');
            const Description = form.get('description');
            const file2 = form.get('event_Image_2');
            const Choose_Event_Image_Two = file2 ? await uploadToImgBB(file2) : "";
            postedData = {

                Selected_type,
                Title_Banner_Two,
                Description,
                Choose_Event_Image_Two,
            };
        }

        if (Selected_type === "Three") {
            const Title_Banner_Three = form.get('bannerthree');
            const Description = form.get('description');
            const file3 = form.get('event_Image_3');
            const Choose_Event_Image_Three = file3 ? await uploadToImgBB(file3) : "";
            postedData = {

                Selected_type,
                Title_Banner_Three,
                Description,
                Choose_Event_Image_Three,
            };
        }

        try {
            const response = await fetch("https://speach-and-langauge-responsive.vercel.app/Three_Banner_api", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postedData),
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
            <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6 text-white'>Three Banner Post Form</h1>
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
                        <option className=" text-white text-lg">Three</option>

                    </select>
                </div>

                {
                    posttype === "One" && (

                        <>

                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Title Banner One  </legend>
                                <input type="text" name='bannerone' className="input w-full text-white text-lg" placeholder="Title Banner One" required />
                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Description (max 100 word)</legend>
                                <textarea className="textarea w-full text-white text-lg" name='description' placeholder="Description " rows={12} required></textarea>
                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Choose Banner Image </legend>
                                <input type="file" name='event_Image_1' className="input w-full text-white text-lg" placeholder="Choose Image" required />
                            </div>

                        </>

                    )
                }
                {
                    posttype === "Two" && (

                        <>

                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Title Banner Two  </legend>
                                <input type="text" name='bannertwo' className="input w-full text-white text-lg" placeholder="Title Banner Two" required />
                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Description (max 100 word)</legend>
                                <textarea className="textarea w-full text-white text-lg" name='description' placeholder="Description " rows={12} required></textarea>
                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Choose Banner Image </legend>
                                <input type="file" name='event_Image_2' className="input w-full text-white text-lg" placeholder="Choose Image" required />
                            </div>

                        </>

                    )
                }


                {
                    posttype === "Three" && (
                        <>

                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Title Banner Three  </legend>
                                <input type="text" name='bannerthree' className="input w-full text-white text-lg" placeholder="Title Banner Three" required />
                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Description (max 100 word)</legend>
                                <textarea className="textarea w-full text-white text-lg" name='description' placeholder="Description " rows={12} required></textarea>
                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Choose Banner Image </legend>
                                <input type="file" name='event_Image_3' className="input w-full text-white text-lg" placeholder="Choose Image" required />
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

export default Home_Three_Banner