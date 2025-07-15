




'use client'

import { useState } from "react";

import Swal from "sweetalert2";
import { TiPlus } from "react-icons/ti";
import uploadToImgBB from "@/app/ImageUpload_Site/UploadImageBBImage";


function DeshboardContactForm() {


    const [posttype, setPostType] = useState("One")

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const Selected_type = form.get('posttype');

        let postedData = {
            Selected_type,
            Title_Text_One: null,
            Description: null,
            Phone_One: null,
            Phone_Two: null,
            Email_One: null,
            Email_Two: null,
            Location: null,
            Opening_Day: null,
            Opening_Time: null,

        };

        if (Selected_type === "One") {
            const Title_Text_One = form.get('textone');
            const Description = form.get('Description');
            const Phone_One = form.get('phoneone');
            const Phone_Two = form.get('phonetwo');


            postedData = {
                Selected_type,
                Title_Text_One,
                Description,
                Phone_One,
                Phone_Two,

            };
        }

        if (Selected_type === "Two") {
            const Title_Text_One = form.get('textone');
            const Description = form.get('Description');
            const Email_One = form.get('emailone');
            const Email_Two = form.get('emailtwo');

            postedData = {
                Selected_type,
                Title_Text_One,
                Description,
                Email_One,
                Email_Two
            };
        }

        if (Selected_type === "Three") {
            const Title_Text_One = form.get('textone');
            const Description = form.get('Description');
            const Location = form.get('locationone');
          

            postedData = {
                Selected_type,
                Title_Text_One,
                Description,
                Location
            };
        }

        if (Selected_type === "Four") {
            const Title_Text_One = form.get('textone');
            const Description = form.get('Description');
            const Opening_Day = form.get('openingday');
            const Opening_Time = form.get('openingtime');

            postedData = {
                Selected_type,
                Title_Text_One,
                Description,
                Opening_Day,
                Opening_Time,
            };
        }

        try {
            const response = await fetch("http://localhost:3000/Contact_api", {
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
            <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6 text-white'>Contact Page Post Form</h1>
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
                        <option className=" text-white text-lg">Four</option>

                    </select>
                </div>

                {
                    posttype === "One" && (

                        <>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Title Text One  </legend>
                                <input type="text" name='textone' className="input w-full text-white text-lg" placeholder="Title Text One" required />
                            </div>
                            <div>

                                <legend className="fieldset-legend text-lg font-semibold pt-5">Description <span className=' text-[12px]'>(max 70 word)</span> </legend>
                                <textarea name='Description' className="textarea w-full text-white" placeholder="Description" rows={12} ></textarea>

                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Phone Number One  </legend>
                                <input type="text" name='phoneone' className="input w-full text-white text-lg" placeholder="Phone Number One" required />
                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Phone Number Two  </legend>
                                <input type="text" name='phonetwo' className="input w-full text-white text-lg" placeholder="Phone Number Two" required />
                            </div>

                        </>
                    )
                }
                {
                    posttype === "Two" && (

                        <>

                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Title Text One  </legend>
                                <input type="text" name='textone' className="input w-full text-white text-lg" placeholder="Title Text One" required />
                            </div>
                            <div>

                                <legend className="fieldset-legend text-lg font-semibold pt-5">Description <span className=' text-[12px]'>(max 70 word)</span> </legend>
                                <textarea name='Description' className="textarea w-full text-white" placeholder="Description" rows={12} ></textarea>

                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Email One  </legend>
                                <input type="text" name='emailone' className="input w-full text-white text-lg" placeholder="Email One" required />
                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Email Two  </legend>
                                <input type="text" name='emailtwo' className="input w-full text-white text-lg" placeholder="Email Two" required />
                            </div>

                        </>

                    )
                }


                {
                    posttype === "Three" && (
                        <>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Title Text One  </legend>
                                <input type="text" name='textone' className="input w-full text-white text-lg" placeholder="Title Text One" required />
                            </div>
                           <div>

                                <legend className="fieldset-legend text-lg font-semibold pt-5">Description <span className=' text-[12px]'>(max 70 word)</span> </legend>
                                <textarea name='Description' className="textarea w-full text-white" placeholder="Description" rows={12} ></textarea>

                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Location  One  </legend>
                                <input type="text" name='locationone' className="input w-full text-white text-lg" placeholder="Location One" required />
                            </div>
                            
                        </>
                    )
                }

                {

                    posttype === "Four" && (
                        <>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Title Text One  </legend>
                                <input type="text" name='textone' className="input w-full text-white text-lg" placeholder="Title Text One" required />
                            </div>
                            <div>

                                <legend className="fieldset-legend text-lg font-semibold pt-5">Description <span className=' text-[12px]'>(max 70 word)</span> </legend>
                                <textarea name='Description' className="textarea w-full text-white" placeholder="Description" rows={12} ></textarea>

                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Opening Day One  </legend>
                                <input type="text" name='openingday' className="input w-full text-white text-lg" placeholder="Opening Day One" required />
                            </div>
                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Opening time Two  </legend>
                                <input type="text" name='openingtime' className="input w-full text-white text-lg" placeholder="Opening time Two" required />
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

export default DeshboardContactForm