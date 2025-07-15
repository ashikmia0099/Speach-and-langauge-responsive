'use client'
import React, { useEffect } from 'react'
import { useAuth } from '../../../../../Context/AuthContext/AuthContext';

export default function Donation_Card() {
    const { donationMedium, setdonationMedium } = useAuth();


    useEffect(() => {
        fetch('https://speach-and-langauge-responsive.vercel.app/Donation_Medium_api')
            .then(res => res.json())
            .then(data => {
                setdonationMedium(data)
            })
    }, [])

    console.log("donation medium", donationMedium)


    return (
        <div className=' pb-10 '>
            <div className='max-w-[1536px] mx-auto '>
                <div className=' grid md:grid-cols-2 gap-y-10 xl:gap-y-22 gap-0 md:gap-10 xl:gap-20 px-5 xl:px-36 pb-16 xl:pb-36 pt-5 md:pt-10'>

                    {/* phone */}
                    {
                        donationMedium?.slice(-10).map((data) => (
                            <div key={data._id} className='px-5 xl:px-10 py-6 rounded-2xl shadow-xl shadow-[#91aab4]'>
                                <div className='h-16 w-16 bg-[#cfeefab7] rounded-sm flex items-center justify-center'>
                                  
                                    <img src={data.Choose_Image} alt={data.Bank_or_Mfs_Name} className='' />
                                </div>
                                <h4 className='text-2xl font-bold text-black pt-3'>{data.Bank_or_Mfs_Name}</h4>
                                <p className='text-[16px] lg:text-lg font-semibold leading-6 pt-3'>{data.Short_Summery}</p>
                                <div className='pt-4 space-y-1.5'>
                                    <h4 className='text-lg lg:text-xl font-bold text-[#0881b1]'>{data.Bank_or_Mfs_Number_1 || ''}</h4>
                                    <h4 className='text-lg lg:text-xl font-bold text-[#0881b1]'>{data.Bank_or_Mfs_Number_2 || ''}</h4>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>
        </div>
    )
}
