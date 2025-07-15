'use client'

import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaClinicMedical, FaNetworkWired } from 'react-icons/fa'
import { FaUserDoctor } from 'react-icons/fa6'
import { useAuth } from '../../../Context/AuthContext/AuthContext'

export default function BannerDynamicData({ id }) {
  const { second_banner_image, setSecBannerImage } = useAuth()
  const [singledata, setSingleData] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/Banner_sec_api')
      .then(res => res.json())
      .then(data => setSecBannerImage(data))
      .catch(err => console.error('Error fetching banner data:', err))
  }, [])

  useEffect(() => {
    if (second_banner_image.length > 0 && id) {
      const found = second_banner_image.find(data => data._id?.toString() === id)
      setSingleData(found)
      console.log('Found banner data:', found)
    }
  }, [second_banner_image, id])

  if (!singledata) return null;


  return (
    <div className='max-w-[1536px] mx-auto pt-8 lg:pt-16'>
      <div className='px-5 lg:px-[5%] pb-20'>
        <div className=' justify-between  mx-auto'>
          <div className=' px-0 xl:px-20 pb-10 lg:pb-20'>
            <div className=' grid lg:grid-cols-3 gap-10 px-5 lg:px-20 py-12 rounded-3xl shadow-lg shadow-[#91aab4] border-t-4 border-x-2 border-[#91aab4]'>
              {/* image */}
              <div className=' lg:col-span-1 flex items-center justify-center'>

                <img src={singledata.Choose_Single_Type_Image} alt='teacher image' className=' rounded-lg lg:rounded-4xl shadow-lg shadow-[#91aab4] h-32 w-32 md:h-40 md:w-40 lg:h-60 lg:w-60 xl:h-80 xl:w-80' />
              </div>
              {/* text- */}
              <div className=' lg:col-span-2 flex items-center justify-center'>
                <div className=' space-y-2.5'>
                  <h1 className=' text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold capitalize text-center lg:text-left flex items-center gap-x-2'>
                    <FaUserDoctor />
                    <span className='text-[#000000] text-lg md:text-xl lg:text-2xl xl:text-3xl '>{singledata?.Doctor_Name}</span>
                  </h1>
                  <p className=' text-[16px] md:text-lg lg:text-xl xl:text-2xl font-semibold flex items-center gap-x-2'>
                    <FaNetworkWired />
                    {singledata?.Doctor_Position}
                  </p>
                  <p className='text-[16px] md:text-lg lg:text-xl xl:text-2xl font-semibold flex items-center gap-x-2'>
                    <FaClinicMedical />
                    {singledata?.Working_place}
                  </p>

                  <p className=' pr-0 lg:pr-5 pl-2 text-[12px] lg:text-[16px] xl:text-lg text-center lg:text-left'>
                    {singledata?.Description}

                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Descriptions Section */}
        <div>
          {singledata?.dynamicDescriptions?.map((data, index) => (
            <div key={index} className='col-span-5 px-3 lg:px-8 overflow-auto pt-2'>
              <h3 className=' text-xl lg:text-2xl font-bold pb-5'>{data?.title || 'Description Title'}</h3>
              <p className=' text-sm lg:text-lg font-semibold'>{data?.text || 'No description available'}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
