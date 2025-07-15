import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { IoAddCircleSharp } from 'react-icons/io5'
import { MdDeleteForever, MdOutlineDetails } from 'react-icons/md'


function NewGeneralMambershipList() {
  return (
    <div>
      <div className=' pt-10'>
        <h1 className=' text-4xl font-semibold text-white text-center py-14'>New General Membership</h1>

        <div className=' px-10'>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th className=' text-white text-lg'>Id</th>
                  <th className=' text-white text-lg'>Full Name</th>
                  <th className=' text-white text-lg'>Phone</th>
                  <th className=' text-white text-lg'>Date</th>
                  <th className=' text-white text-lg'>Details</th>
                  <th className=' text-white text-lg'>Add</th>
                  <th className=' text-white text-lg'>Delete</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th className=' text-white text-[16px]'>1</th>
                  <td className=' text-white text-[16px]'>Cy Ganderton</td>
                  <td className=' text-white text-[16px]'>01403226133</td>
                  <td className=' text-white text-[16px]'>2.2.24</td>
                  <td className=' text-white text-3xl text-center cursor-pointer'><FaEdit /></td>
                  <td className=' text-green-800 text-4xl cursor-pointer'><IoAddCircleSharp /></td>

                  <td className=' text-red-700 text-4xl cursor-pointer'><MdDeleteForever /></td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewGeneralMambershipList