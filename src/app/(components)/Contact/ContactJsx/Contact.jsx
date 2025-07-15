'use client'
import React, { useEffect } from 'react'

import { AuroraText } from '../../../../components/magicui/aurora-text'
import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'


import { Montserrat } from 'next/font/google';
import { useAuth } from '../../../../../Context/AuthContext/AuthContext';

// ✅ Load the font with explicit weight
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['600',], // choose the weights you want
});


function Contact() {


    const { contactData, setContactData } = useAuth();

    // fetch all contact data

    useEffect(() => {

        fetch("https://speach-and-langauge-responsive.vercel.app/Contact_api")
            .then(res => res.json())
            .then(data => {

                setContactData(data)

            })
    }, []);





    // akhane selected_type wise last data filter kora holo


    const LastItemBySelected_type = ['One', 'Two', 'Three', 'Four'].map(type => {

        const filtered_Data = contactData.filter(item => item.Selected_type === type)
        return filtered_Data[filtered_Data.length - 1];
    }).filter(Boolean);


    return (
        <div className='max-w-[1596px] mx-auto bg-white'>
            <div >

                <h1 className={` text-3xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold capitalize leading-10 md:leading-14 lg:leading-20 xl:leading-28 text-center px-5 md:px-[10%] xl:px-[20%] pt-16`}>
                    <AuroraText>We Have love from You</AuroraText>
                </h1>
                <p className={` px-5 md:px-[10%] xl:px-[15%] text-[16px] md:text-xl xl:text-2xl leading-7 xl:leading-9 text-center capitalize py-10 ${montserrat.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odit nam laudantium officiis corporis earum suscipit quia repudiandae enim voluptate, eaque repellendus asperiores molestias facere, sit ducimus odio accusantium quidem.</p>
            </div>

            <div className=' grid md:grid-cols-2 gap-y-10 xl:gap-y-22 gap-0 md:gap-10 xl:gap-20 px-5 xl:px-36 pb-16 xl:pb-36 pt-10 lg:pt-20'>

                {/* phone */}

                {
                    LastItemBySelected_type.map((item) => {

                        if (item.Selected_type === "One") {
                            return (
                                <div key={item._id} className='px-5 xl:px-10 py-6 rounded-2xl shadow-xl shadow-[#91aab4] '>
                                    <div className=' h-16 w-16 bg-[#cfeefab7] rounded-sm flex items-center justify-center'>
                                        <FaPhoneAlt className=' text-3xl text-[#11aeec]' />
                                    </div>
                                    <h4 className=' text-2xl font-bold text-black pt-3 capitalize'>{item.Title_Text_One}</h4>
                                    <p className=' text-[16px] lg:text-lg font-semibold leading-6 pt-3'>{item.Description} </p>
                                    <div className=' pt-4 space-y-1.5'>
                                        <h4 className=' text-lg lg:text-xl font-bold text-[#0881b1]'>
                                            +88{item.Phone_One}
                                        </h4>
                                        <h4 className=' text-lg lg:text-xl font-bold text-[#0881b1]'>
                                            +88{item.Phone_Two}
                                        </h4>
                                    </div>
                                </div>
                            )
                        }


                        // email

                        if (item.Selected_type === "Two") {
                            return (

                                <div key={item._id} className='px-5 xl:px-10 py-6 rounded-2xl shadow-xl shadow-[#91aab4] '>
                                    <div className=' h-16 w-16 bg-[#cfeefab7] rounded-sm flex items-center justify-center'>
                                        <MdOutlineEmail className=' text-3xl text-[#11aeec]' />
                                    </div>
                                    <h4 className=' text-2xl font-bold text-black pt-3 capitalize'>{item.Title_Text_One}</h4>
                                    <p className=' text-[16px] lg:text-lg font-semibold leading-6 pt-3'>{item.Description}</p>
                                    <div className=' pt-4 space-y-1.5'>
                                        <h4 className=' text-lg lg:text-xl font-bold text-[#0881b1]'>
                                            {item.Email_One}
                                        </h4>
                                        <h4 className=' text-lg lg:text-xl font-bold text-[#0881b1]'>
                                            {item.Email_Two}
                                        </h4>
                                    </div>
                                </div>
                            )
                        }


                        // Location

                        if (item.Selected_type === "Three") {
                            return (

                                <div key={item._id} className='px-5 xl:px-10 py-6 rounded-2xl shadow-xl shadow-[#91aab4] '>
                                    <div className=' h-16 w-16 bg-[#cfeefab7] rounded-sm flex items-center justify-center'>
                                        <FaMapMarkerAlt className=' text-3xl text-[#11aeec]' />
                                    </div>
                                    <h4 className=' text-2xl font-bold text-black pt-3 capitalize'>{item.Title_Text_One}</h4>
                                    <p className=' text-[16px] lg:text-lg font-semibold leading-6 pt-3'>{item.Description} </p>
                                    <div className=' pt-4 space-y-1.5'>
                                        <h4 className=' text-lg lg:text-xl font-bold text-[#0881b1]'>
                                            {item.Location}
                                        </h4>
                                    </div>
                                </div>
                            )
                        }



                        // time

                        if (item.Selected_type === "Four") {
                            return (

                                <div key={item._id} className='px-5 xl:px-10 py-6 rounded-2xl shadow-xl shadow-[#91aab4] '>
                                    <div className=' h-16 w-16 bg-[#cfeefab7] rounded-sm flex items-center justify-center'>
                                        <FaRegClock className=' text-3xl text-[#11aeec]' />
                                    </div>
                                    <h4 className=' text-2xl font-bold text-black pt-3 capitalize'>{item.Title_Text_One}</h4>
                                    <p className=' text-[16px] lg:text-lg font-semibold leading-6 pt-3'>{item.Description} </p>
                                    <div className=' pt-4 space-y-1.5'>
                                        <h4 className=' text-lg lg:text-xl font-bold text-[#0881b1]'>
                                            {item.Opening_Day}
                                        </h4>
                                        <h4 className=' text-lg lg:text-xl font-bold text-[#0881b1]'>
                                            {item.Opening_Time}
                                        </h4>
                                    </div>
                                </div>
                            )
                        }



                    })
                }












            </div>
        </div>
    )
}

export default Contact