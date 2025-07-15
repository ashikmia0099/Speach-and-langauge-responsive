'use client'

import React, { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { FcViewDetails } from 'react-icons/fc'
import { MdDeleteForever, MdOutlineDetails } from 'react-icons/md'
import { useAuth } from '../../../../../../Context/AuthContext/AuthContext'
import Swal from 'sweetalert2'
import Link from 'next/link'

function DeshboardContactList() {


    const { contactData, setContactData } = useAuth();


    // fetch all contact data

    useEffect(() => {

        fetch("https://speach-and-langauge-responsive.vercel.app/Contact_api")
            .then(res => res.json())
            .then(data => {
                setContactData(data)

            })
    }, [])


    console.log('contact data ', contactData)


    // delete handle 


    const handelDelete = async (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {

                    const res = await fetch(`https://speach-and-langauge-responsive.vercel.app/Contact_api?id=${id}`, {
                        method: "DELETE"
                    })

                    const result = await res.json()

                    if (res.ok) {

                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });

                        setContactData((prev) => prev.filter((item) => item._id !== id));

                    } else {
                        Swal.fire("Error", result.error || "Failed to delete", "error");
                    }


                } catch (err) {
                    console.error(err);
                    alert('Something went wrong.');
                }

            }
        });

    }







    return (
        <div>
            <div className='pt-10 '>
                <h1 className='text-4xl font-semibold text-center text-white py-14'> Contact All Data List</h1>

                <div className='px-10 '>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className='text-lg text-white '>Id</th>
                                    <th className='text-lg text-white '>Selected Type</th>
                                    <th className='text-lg text-white '>Full Posted Title</th>
                                   
                                    <th className='text-lg text-white '>Edit</th>
                                    <th className='text-lg text-white '>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    contactData.map((data, index) => (
                                        <tr key={data._id}>

                                            <th className=' text-white text-[16px]'>{index + 1}</th>
                                            <td className=' text-white text-[16px]'>{data.Selected_type}</td>
                                            <td className=' text-white text-[16px]'>{data.Title_Text_One}</td>
                                            <td
                                                
                                                className='text-3xl text-center text-white cursor-pointer '
                                            >
                                                <Link href={`DeshboardContactList/${data._id}`}><FaEdit /></Link>
                                            </td>

                                            <td
                                                onClick={() => handelDelete(data._id)}
                                                className='text-4xl text-red-700 cursor-pointer '>
                                                <MdDeleteForever />
                                            </td>
                                        </tr>

                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeshboardContactList