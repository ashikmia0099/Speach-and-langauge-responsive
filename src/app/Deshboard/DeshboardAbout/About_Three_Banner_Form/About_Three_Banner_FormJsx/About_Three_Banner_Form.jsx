



'use client'

import { useState } from "react";

import Swal from "sweetalert2";
import { TiPlus } from "react-icons/ti";
import uploadToImgBB from "@/app/ImageUpload_Site/UploadImageBBImage";


function About_Three_Banner_Form() {


    const [posttype, setPostType] = useState("One")








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
            const file1 = form.get('Banner_Image');
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
            const file1 = form.get('Banner_Image');
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
            const file1 = form.get('Banner_Image');
            const Choose_Image = file1 ? await uploadToImgBB(file1) : "";
            postedData = {

                Selected_type,
                Title_Banner,
                Description,
                Choose_Image,
            };
        }

        try {
            const response = await fetch("https://speach-and-langauge-responsive.vercel.app/About_Three_Banner_api", {
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
            <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6 text-white'>About Page Three Banner Post Form</h1>
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
                                <input type="file" name='Banner_Image' className="input w-full text-white text-lg" placeholder="Choose Image" required />
                            </div>

                        </>

                    )
                }
                {
                    posttype === "Two" && (

                        <>

                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Title Banner Two  </legend>
                                <input type="text" name='bannerone' className="input w-full text-white text-lg" placeholder="Title Banner Two" required />
                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Description (max 100 word)</legend>
                                <textarea className="textarea w-full text-white text-lg" name='description' placeholder="Description " rows={12} required></textarea>
                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Choose Banner Image </legend>
                                <input type="file" name='Banner_Image' className="input w-full text-white text-lg" placeholder="Choose Image" required />
                            </div>

                        </>

                    )
                }


                {
                    posttype === "Three" && (
                        <>

                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Title Banner Three  </legend>
                                <input type="text" name='bannerone' className="input w-full text-white text-lg" placeholder="Title Banner Three" required />
                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Description (max 100 word)</legend>
                                <textarea className="textarea w-full text-white text-lg" name='description' placeholder="Description " rows={12} required></textarea>
                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Choose Banner Image </legend>
                                <input type="file" name='Banner_Image' className="input w-full text-white text-lg" placeholder="Choose Image" required />
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