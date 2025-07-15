
'use client'

import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaClinicMedical, FaDisease, FaNetworkWired } from 'react-icons/fa'
import { FaUserDoctor } from 'react-icons/fa6'
import { useAuth } from '../../../Context/AuthContext/AuthContext'

export default function Meidcal_Desis_Dynamic_Data({ id }) {
  const { desies, setDesies } = useAuth()
  const [singledata, setSingleData] = useState(null)

  useEffect(() => {
    fetch('https://speach-and-langauge-responsive.vercel.app/Popular_Desise')
      .then(res => res.json())
      .then(data => setDesies(data))
      .catch(err => console.error('Error fetching banner data:', err))
  }, [])

  useEffect(() => {
    if (desies.length > 0 && id) {
      const found = desies.find(data => data._id?.toString() === id)
      setSingleData(found)
      console.log('Found banner data:', found)
    }
  }, [desies, id])

  if (!singledata) return null;


  return (
    <div className='max-w-[1536px] mx-auto pt-16'>
      <div className='px-[5%] pb-20'>
        <div className=' justify-between mx-auto'>
          <div className=' grid lg:grid-cols-3 gap-10 px-5 lg:px-20 py-5 lg:py-12 rounded-3xl shadow-lg shadow-[#91aab4] border-t-4 border-x-2 border-[#91aab4]'>
            {/* image */}
            <div className=' col-span-1'>

              <img src={singledata.Choose_Image} alt='teacher image' className=' rounded-lg lg:rounded-4xl shadow-lg shadow-[#91aab4] h-96 w-full' />
              <h1 className='text-[16px] md:text-lg xl:text-xl 2xl:text-2xl font-bold capitalize  lg:text-left flex items-center gap-x-2 px-3 pt-6'>
                <span className=' text-2xl lg:text-4xl'>
                  <FaDisease />
                </span>
                <span>
                  {singledata?.Desis_Name}
                </span>
              </h1>
            </div>
            {/* text- */}
            <div className=' lg:col-span-2 pt-3'>
                <p className=' pr-0 lg:pr-5 pl-2 text-[12px] font-semibold lg:text-[16px] xl:text-lg text-center lg:text-left'>
                  {singledata?.Description}
                </p>
            </div>
          </div>
        </div>

        {/* Dynamic Descriptions Section */}
        <div>
          {singledata?.dynamicDescriptions?.map((data, index) => (
            <div key={index} className='col-span-5 px-2 lg:px-8 overflow-auto pt-10 lg:pt-20'>
              <h3 className=' text-lg md:text-xl lg:text-2xl font-bold pb-5 capitalize'>{data?.title || 'Description Title'}</h3>
              <p className='text-sm md:text-[16px] xl:text-lg font-semibold'>{data?.text || 'No description available'}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
