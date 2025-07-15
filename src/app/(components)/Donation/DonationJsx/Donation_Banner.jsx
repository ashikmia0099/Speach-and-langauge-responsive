'use client'

import React, { useEffect } from 'react'

import Image from 'next/image'
import { AuroraText } from '../../../../components/magicui/aurora-text'
import { useAuth } from '../../../../../Context/AuthContext/AuthContext';


export default function Donation_Banner() {



  const { donationAmount, setdonationAmount, } = useAuth();


  useEffect(() => {
    fetch('http://localhost:3000/Donation_Text_and_Amount_api')
      .then(res => res.json())
      .then(data => {
        setdonationAmount(data)
      })
  }, [])

  console.log("donation amount", donationAmount)




  return (
    <div className=' pb-10 '>
      <div className=' pt-16 '>
        <div className=''>
          <div className="  bottom-0 h-full w-full px-5 ">
            <div className=' grid lg:grid-cols-2 items-center justify-center gap-5 md:gap-20 md:px-20 lg:px-5 max-w-[1536px] mx-auto pb-10'>
              {
                donationAmount.filter(item => item.Selected_type === 'One').slice(-1).map((data) => (
                  <div>
                    <AuroraText className=" text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-extrabold capitalize text-center lg:text-left"> {data.Title_Text_One} </AuroraText>
                    <p className=' text-[16px] md:text-lg xl:text-xl font-semibold text-black pt-10 text-center lg:text-left'>
                      {data.Description}
                    </p>
                  </div>
                ))
              }

              <div className=' py-10 md:py-0 lg:py-10'>
                <div className='  rounded-2xl bg-[#9acce28f] h-[500px] p-5 md:p-10'>

                  <AuroraText className="text-3xl  font-semibold text-center md:text-left capitalize"> Donated Amount </AuroraText>

                  <div className=' grid grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-5 mt-5'>
                    {
                      donationAmount.filter(item => item.Selected_type === 'Two').slice(-10).map((data) => (
                        <div>
                          <button className='btn w-full h-10 text-lg md:text-xl xl:text-2xl font-bold rounded-full bg-white text-black border-none shadow-lg shadow-[#dbdde2] '>
                            {data.Donated_Amount}
                          </button>
                        </div>
                      ))
                    }

                    <div className=' col-span-2'>
                      <button className='btn w-full h-10 text-lg md:text-xl xl:text-2xl font-bold rounded-full bg-white text-black border-none shadow-lg shadow-[#dbdde2] capitalize'>
                        Other Amount
                      </button>
                    </div>
                  </div>
                  <div className='py-10 mt-16'>
                    <h1 className=' text-2xl md:text-3xl xl:text-4xl font-bold text-black text-center capitalize'>Make a Difference Today</h1>
                    <div className=' py-5 '>
                      <button className='btn w-full h-12 text-lg md:text-xl xl:text-2xl font-bold rounded-full bg-white text-black border-none shadow-md shadow-[#dbdde2] capitalize'>
                        <AuroraText className=" "> Donate Now</AuroraText>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
