
'use client'

import { useEffect, useState } from "react";

import Swal from "sweetalert2";
import uploadToImgBB from "@/app/ImageUpload_Site/UploadImageBBImage";
import { useAuth } from "../../../../../../Context/AuthContext/AuthContext";
import { useParams, useRouter } from "next/navigation";


function Dashboard_Donation_amount_text_Update_Form() {


    const [posttype, setPostType] = useState("One")


    const { donationAmount, setdonationAmount } = useAuth()
    const [singledata, setSingleData] = useState('');

    const params = useParams();
    const router = useRouter();
    const id = params?.id;





    useEffect(() => {
        fetch('https://speach-and-langauge-responsive.vercel.app/Donation_Text_and_Amount_api')
            .then(res => res.json())
            .then(data => {
                setdonationAmount(data)

            })
    }, [])


    console.log('amount data', donationAmount)



    useEffect(() => {

        if (donationAmount.length > 0 && id) {
            const found = donationAmount.find(data => data._id === id)
            setSingleData(found)
            if (found?.Selected_type)
                setPostType(found.Selected_type);

        }
    }, [donationAmount, id])

    console.log("single data", singledata)




    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const Selected_type = form.get('posttype');

        let postedData = {
            Selected_type,
            Title_Text: null,
            Description: null,
            Donated_Amount: null,


        };

        if (Selected_type === "One") {
            const Title_Text_One = form.get('textone');
            const Description = form.get('Description');



            postedData = {
                Selected_type,
                Title_Text_One,
                Description,


            };
        }

        if (Selected_type === "Two") {
            const Donated_Amount = form.get('Amount');


            postedData = {
                Selected_type,
                Donated_Amount,

            };
        }



        try {
            const response = await fetch(`https://speach-and-langauge-responsive.vercel.app/Donation_Text_and_Amount_api?id=${id}`, {
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

                router.push('/Deshboard/DashboardDonation/Dashboard_Donation_amount_text_List');
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
            <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6 text-white'>Donation Text And Amount Update Form</h1>
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
                                <legend className="text-lg font-semibold pt-5 text-white">Title Text   </legend>
                                <input type="text" defaultValue={singledata?.Title_Text_One || ""} name='textone' className="input w-full text-white text-lg" placeholder="Title Text" required />
                            </div>
                            <div>

                                <legend className="fieldset-legend text-lg font-semibold pt-5">Description <span className=' text-[12px]'></span> </legend>
                                <textarea name='Description' defaultValue={singledata?.Description || ""} className="textarea w-full text-white" placeholder="Description" rows={12} ></textarea>

                            </div>


                        </>
                    )
                }
                {
                    posttype === "Two" && (

                        <>

                            <div>
                                <legend className="text-lg font-semibold pt-5 text-white">Amount Number  </legend>
                                <input type="text" defaultValue={singledata?.Donated_Amount || ""} name='Amount' className="input w-full text-white text-lg" placeholder="Amount Number" required />
                            </div>

                        </>

                    )
                }

                <button type="submit" className='btn w-full bg-[#9EFF00] border-none text-black mt-10 text-lg font-semibold'>
                    Update
                </button>

            </form>
        </div>
    )
}

export default Dashboard_Donation_amount_text_Update_Form