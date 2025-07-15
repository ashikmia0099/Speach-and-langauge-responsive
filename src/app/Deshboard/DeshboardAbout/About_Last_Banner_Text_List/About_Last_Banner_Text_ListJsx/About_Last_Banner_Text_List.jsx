

'use client'

import React, { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDeleteForever, MdOutlineDetails } from 'react-icons/md'
import Swal from 'sweetalert2'
import Link from 'next/link'
import { useAuth } from '../../../../../../Context/AuthContext/AuthContext'


function About_Last_Banner_Text_List() {



  const { last_banner_text, setlast_banner_text } = useAuth();



  useEffect(() => {
    fetch('http://localhost:3000/Last_banner_text_api')
      .then(res => res.json())
      .then(data => {
        setlast_banner_text(data)
      })
  }, [])

  console.log("images", last_banner_text)






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

                    const res = await fetch(`http://localhost:3000/Last_banner_text_api?id=${id}`, {
                        method: "DELETE"
                    })

                    const result = await res.json()

                    if (res.ok) {

                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });

                        setlast_banner_text((prev) => prev.filter((item) => item._id !== id));

                    } else {
                        Swal.fire("Error", result.error || "Failed to delete", "error");
                    }

                } catch (err) {
                    console.error(err);
                    
                    Swal.fire("Something");
                }
            }
        });

    }







    return (
        <div>
            <div className='pt-10 '>
                <h1 className='text-4xl font-semibold text-center text-white py-14'> Last Banner Text List</h1>

                <div className='px-10 '>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className='text-lg text-white '>Id</th>
                                    <th className='text-lg text-white '>Title</th>
                                    
                                    <th className='text-lg text-white '>Edit</th>
                                    <th className='text-lg text-white '>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    last_banner_text.map((data, index) => (
                                        <tr key={data._id}>

                                            <th className=' text-white text-[16px]'>{index + 1}</th>
                                            <th className=' text-white text-[16px]'>{ data.Title}</th>
                                          
                                         
                                            <td
                                                
                                                className='text-3xl text-center text-white cursor-pointer '
                                            >
                                                <Link href={`About_Last_Banner_Text_List/${data._id}`}><FaEdit /></Link>
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

export default About_Last_Banner_Text_List