'use client'

import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../Context/AuthContext/AuthContext'

export default function Communication_Hearing_Data({ id }) {
  const { healthCare, setHealthCare } = useAuth()
  const [singledata, setSingleData] = useState(null)

  useEffect(() => {
    fetch('https://speach-and-langauge-responsive.vercel.app/Communication_HelthCare_api')
      .then(res => res.json())
      .then(data => {
        const updated = data.map(item => ({
          ...item,
          _id: item._id?.toString()
        }))
        setHealthCare(updated)
        console.log('Fetched healthcare data:', updated)
      })
      .catch(err => console.error('Failed to fetch healthcare data:', err))
  }, [])

  useEffect(() => {
    if (healthCare.length > 0 && id) {
      const found = healthCare.find(data => data._id === id)
      setSingleData(found)
      console.log('Matched healthcare item:', found)
    }
  }, [healthCare, id])

if (!singledata) return null;

  return (
    <div className='max-w-[1536px] mx-auto '>
      <div className='px-5 lg:px-[5%] pb-20'>
        <div className='pt-10'>
          <h1 className='w-full lg:w-[55%] text-3xl md:text-4xl lg:text-5xl font-semibold capitalize leading-10 lg:leading-[4.5rem] text-center lg:text-left px-5 goudy-bookletter-1911-regular'>
            <span className='text-[#000000]'>{singledata?.Title_Name}</span>
          </h1>
          <p className='w-full lg:w-[50%] text-sm md:text-lg xl:text-xl px-0 md:px-5 font-semibold mt-5 md:mt-10 text-center lg:text-left pb-14'>
            {singledata?.Over_View}
          </p>
        </div>

        <div className='pb-10'>
          <img src={singledata?.Choose_Image} alt='Main Visual' className='rounded-2xl h-[400px] md:h-[500px] lg:h-[600] xl:h-[700px] w-full object-cover' />
        </div>

        <div className='grid md:grid-cols-7 pt-10 lg:pt-20 pb-20'>
          <div className='md:col-span-2  px-5 md:px-2.5 lg:px-5'>
            <h1 className='text-2xl font-bold  py-2 pb-6'>Table Of Content:</h1>
            <div className='pl-2 pr-6 space-y-4'>
              <h1 className='text-sm lg:text-[16px] xl:text-lg font-semibold border-b-2 text-[#B6B3B1] border-black py-2 px-2'>
                {singledata?.DescriptionTitle}
              </h1>
              {singledata?.dynamicDescriptions?.map((item, i) => (
                <h1 key={i} className='text-sm lg:text-[16px] xl:text-lg font-semibold border-b-2 text-[#B6B3B1] border-black py-2 px-2'>
                  {item.title}
                </h1>
              ))}
            </div>
          </div>

          <div className='md:col-span-5 px-5 lg:px-8 overflow-auto pt-2'>
            <div>
              <h3 className='text-lg lg:text-xl xl:text-2xl font-bold pb-2 pt-5'>{singledata?.DescriptionTitle}</h3>
              <p className='text-sm lg:text-[16px] xl:text-lg font-semibold'>{singledata?.Description}</p>
            </div>

            {singledata?.dynamicDescriptions?.map((item, index) => (
              <div key={index}>
                <h3 className='text-lg lg:text-xl xl:text-2xl font-bold pb-2 pt-5'>{item.title}</h3>
                <p className='text-sm lg:text-[16px] xl:text-lg font-semibold'>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
