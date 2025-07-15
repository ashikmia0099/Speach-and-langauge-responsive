
'use client'

import { useState } from "react";

import Swal from "sweetalert2";
import { TiPlus } from "react-icons/ti";
import uploadToImgBB from "@/app/ImageUpload_Site/UploadImageBBImage";


function Home_Banner_Second() {


    const [posttype, setPostType] = useState("Single")

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

        const Selected_type = form.get('posttype');

        let blogsData = {
            Selected_type,
            Doctor_Name: null,
            Doctor_Position: null,
            Working_place: null,
            Description_Title: null,
            Description: null,
            Choose_Single_Type_Image: "",
            Choose_Dual_Type_Image_1: "",
            Choose_Dual_Type_Image_2: "",
            dynamicDescriptions: []
        };

        if (Selected_type === "Single") {
            const Doctor_Name = form.get('doctor_name');
            const Doctor_Position = form.get('doctor_Position');
            const Working_place = form.get('working_place');
            const Description_Title = form.get('descriptiontitle');
            const Description = form.get('description');

            const SingleImageFile = form.get('event_Image_1');
            const Choose_Single_Type_Image = SingleImageFile ? await uploadToImgBB(SingleImageFile) : "";

            const dynamicDescriptions = await Promise.all(
                increseDescripton.map(async (section, index) => {
                    const title = form.get(`descriptionTitle_${index}`);
                    const text = form.get(`descriptionDescription_${index}`);
                    return { title, text };
                })
            );

            blogsData = {
                Selected_type,
                Doctor_Name,
                Doctor_Position,
                Working_place,
                Description_Title,
                Description,
                Choose_Single_Type_Image,
               
                dynamicDescriptions
            };
        }

        if (Selected_type === "Double") {
            const file1 = form.get('ChooseImage1');
            const file2 = form.get('ChooseImage2');
            const Choose_Dual_Type_Image_1 = file1 ? await uploadToImgBB(file1) : "";
            const Choose_Dual_Type_Image_2 = file2 ? await uploadToImgBB(file2) : "";

            blogsData = {
               
                Selected_type,
                Choose_Dual_Type_Image_1,
                Choose_Dual_Type_Image_2,
               
            };
        }

        try {
            const response = await fetch("http://localhost:3000/Banner_sec_api", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(blogsData),
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
                setincreseDescripton([]);
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
            <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6 text-white'>Banner Teacher Data Post Form</h1>
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
                        <option className=" text-white text-lg">Single</option>
                        <option className=" text-white text-lg">Double</option>

                    </select>
                </div>

                {
                    posttype === "Single" && (

                        <>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Doctor Name </legend>
                                <input type="text" name='doctor_name' className="input w-full text-white text-lg" placeholder="Doctor Name" required />
                            </div>

                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Doctor Position </legend>
                                <input type="text" name='doctor_Position' className="input w-full text-white text-lg" placeholder="Doctor Position" required />
                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Current working Place</legend>
                                <input type="text" name='working_place' className="input w-full text-white text-lg" placeholder="Current working Place" required />
                            </div>

                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Choose Doctor Image </legend>
                                <input type="file" name='event_Image_1' className="input w-full text-white text-lg" placeholder="Choose Image" required />
                            </div>

                            <div className='py-4 flex justify-between items-center'>
                                <h4 className='text-2xl font-semibold uppercase text-white'>Increase Description</h4>
                                <button
                                    type="button"
                                    className='btn bg-[#9EFF00] border-none text-5xl font-semibold text-black'
                                    onClick={addSection}
                                >
                                    <TiPlus />
                                </button>
                            </div>

                            <div className='py-10 pb-16'>
                                <div>
                                    <h4 className='text-xl font-semibold btn bg-[#9EFF00] text-black rounded-full px-10'>Section 1</h4>
                                </div>
                                <div className='grid grid-cols-2 gap-3'>
                                    <div>
                                        <legend className="text-lg font-semibold pt-5 text-white">Description Title</legend>
                                        <input type="text" name='descriptiontitle' className="input w-full text-white text-lg" placeholder="Description Title" required />
                                    </div>
                                </div>
                                <div>
                                    <legend className="text-lg font-semibold pt-5 text-white">Doctor Overview</legend>
                                    <textarea className="textarea w-full text-white text-lg" name='description' placeholder="Doctor Overview " rows={12} required></textarea>
                                </div>
                            </div>

                            {increseDescripton.map((section, index) => (
                                <div key={section.id} className='py-10 pb-16'>
                                    <div>
                                        <h4 className='text-xl font-semibold btn bg-[#9EFF00] text-black rounded-full px-10'>
                                            Section {index + 2}
                                        </h4>
                                    </div>
                                    <div className='grid grid-cols-2 gap-3'>
                                        <div>
                                            <legend className="text-lg font-semibold pt-5 text-white">Description Title</legend>
                                            <input type="text" name={`descriptionTitle_${index}`} className="input w-full text-lg text-white" placeholder="Description Title" required />
                                        </div>
                                    </div>
                                    <div>
                                        <legend className="text-lg font-semibold pt-5 text-white">Description</legend>
                                        <textarea className="textarea w-full text-white text-lg" name={`descriptionDescription_${index}`} placeholder="Description" rows={12} required></textarea>
                                    </div>
                                </div>
                            ))}

                        </>

                    )
                }


                {
                    posttype === "Double" && (
                        <>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Choose Event Image 1</legend>
                                <input type="file" name='ChooseImage1' className="input w-full text-white text-lg" placeholder="Choose Image" required />
                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Choose Event Image 2</legend>
                                <input type="file" name='ChooseImage2' className="input w-full text-white text-lg" placeholder="Choose Image" required />
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

export default Home_Banner_Second