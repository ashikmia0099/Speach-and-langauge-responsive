import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { IoAddCircleSharp } from 'react-icons/io5'
import { MdDeleteForever, MdOutlineDetails } from 'react-icons/md'

function GeneralMambershipList() {
    return (
        <div>
            <div className='pt-10 '>
                <h1 className='text-4xl font-semibold text-center text-white py-14'> General Membership</h1>

                <div className='px-10 '>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className='text-lg text-white '>Id</th>
                                    <th className='text-lg text-white '>Full Name</th>
                                    <th className='text-lg text-white '>Phone</th>
                                    <th className='text-lg text-white '>Date</th>
                                    <th className='text-lg text-white '>Details</th>
                                    <th className='text-lg text-white '>Add</th>
                                    <th className='text-lg text-white '>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th className=' text-white text-[16px]'>1</th>
                                    <td className=' text-white text-[16px]'>Cy Ganderton</td>
                                    <td className=' text-white text-[16px]'>01403226133</td>
                                    <td className=' text-white text-[16px]'>2.2.24</td>
                                    <td className='text-3xl text-center text-white cursor-pointer '><FaEdit /></td>
                                    <td className='text-4xl text-green-800 cursor-pointer '><IoAddCircleSharp/></td>
                                    <td className='text-4xl text-red-700 cursor-pointer '><MdDeleteForever /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneralMambershipList