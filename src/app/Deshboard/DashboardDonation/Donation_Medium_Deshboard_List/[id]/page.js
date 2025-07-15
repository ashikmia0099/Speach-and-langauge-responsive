'use client';

import uploadToImgBB from "@/app/ImageUpload_Site/UploadImageBBImage";
import { useParams, useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { useAuth } from "../../../../../../Context/AuthContext/AuthContext";
import { useEffect, useState } from "react";

function Donation_Medium_Deshboard_Update_Form() {




    const { donationMedium, setdonationMedium } = useAuth()
    const [singledata, setSingleData] = useState('');

    const params = useParams();
    const router = useRouter();
    const id = params?.id;





    useEffect(() => {
        fetch('https://speach-and-langauge-responsive.vercel.app/Donation_Medium_api')
            .then(res => res.json())
            .then(data => {
                setdonationMedium(data)

            })
    }, [])


    console.log('amount medium data', donationMedium)



    useEffect(() => {

        if (donationMedium.length > 0 && id) {
            const found = donationMedium.find(data => data._id === id)
            setSingleData(found)


        }
    }, [donationMedium, id])

    console.log("medium single data", singledata)



    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const Bank_or_Mfs_Name = form.get('bankname');
        const Bank_or_Mfs_Number_1 = form.get('banknumber1');
        const Bank_or_Mfs_Number_2 = form.get('banknumber2');
        const Short_Summery = form.get('description');
        const file1 = form.get('banklogo');
        // const Choose_Image = file1 ? await uploadToImgBB(file1) : "";
        const Choose_Image = file1 && file1.size > 0 ? await uploadToImgBB(file1) : singledata?.Choose_Image;

        const postedData = {
            Bank_or_Mfs_Name,
            Bank_or_Mfs_Number_1,
            Bank_or_Mfs_Number_2,
            Short_Summery,
            Choose_Image,
        };

        try {

            const response = await fetch(`https://speach-and-langauge-responsive.vercel.app/Donation_Medium_api?id=${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postedData),
            });

           
            if (response.ok) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your Post Successfully Added!',
                    showConfirmButton: false,
                    timer: 1500
                });
                router.push('/Deshboard/DashboardDonation/Donation_Medium_Deshboard_List');
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
            <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6 text-white'>
                Donation Medium Update Form
            </h1>
            <form onSubmit={handleFormSubmit}>

                <div>
                    <legend className="text-lg font-semibold pt-5 text-white">Bank or MFS Name</legend>
                    <input
                        type="text"
                        defaultValue={singledata?.Bank_or_Mfs_Name || ""}
                        name="bankname"
                        className="input w-full text-white text-lg"
                        placeholder="Enter bank or MFS name"
                        required
                    />
                </div>

                <div>
                    <legend className="text-lg font-semibold pt-5 text-white">Short Summary (max 15 words)</legend>
                    <textarea
                        className="textarea w-full text-white text-lg"
                        defaultValue={singledata?.Short_Summery || ""}
                        name="description"
                        placeholder="Short summary"
                        rows={3}
                        required
                    ></textarea>
                </div>

                <div>
                    <legend className="text-lg font-semibold pt-5 text-white">Bank or MFS Number 1</legend>
                    <input
                        type="text"
                        name="banknumber1"
                        defaultValue={singledata?.Bank_or_Mfs_Number_1 || ""}
                        className="input w-full text-white text-lg"
                        placeholder="Enter primary number"

                    />
                </div>

                <div>
                    <legend className="text-lg font-semibold pt-5 text-white">Bank or MFS Number 2</legend>
                    <input
                        type="text"
                        defaultValue={singledata?.Bank_or_Mfs_Number_2 || ""}
                        name="banknumber2"
                        className="input w-full text-white text-lg"
                        placeholder="Enter secondary number"

                    />
                </div>

                <div className=" flex justify-between items-center py-5">
                    <div>
                        <legend className="text-lg font-semibold pt-5 text-white">Choose Banner Logo</legend>
                        <input
                            type="file"
                            name="banklogo"
                            className="input w-full text-white text-lg"
                            placeholder="Upload logo"
                          
                        />
                    </div>
                    <div>
                        <img src={singledata?.Choose_Image} alt={singledata?.Bank_or_Mfs_Name} className=" h-40 w-40 rounded-2xl" />
                    </div>
                </div>

                <button
                    type="submit"
                    className="btn w-full bg-[#9EFF00] border-none text-black mt-10 text-lg font-semibold"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Donation_Medium_Deshboard_Update_Form;
