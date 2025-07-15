'use client';

import React, { useEffect } from 'react'

import { Montserrat } from 'next/font/google';
import { useAuth } from '../../../../../Context/AuthContext/AuthContext';

// ✅ Load the font with explicit weight
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['500',], // choose the weights you want
});


function Mission_Three_banner() {


    const { home_three_banner_data, sethome_three_banner_data } = useAuth();




    useEffect(() => {
        fetch("http://localhost:3000/Three_Banner_api")
            .then(res => res.json())
            .then(data => {
                sethome_three_banner_data(data)
            })
    }, [])


    console.log("all three data", home_three_banner_data)



    // id wise data find

    // akhane selected_type wise last data filter kora holo

    const LastItemBySelectedId = ['One', 'Two', 'Three'].map(type => {
        const filtered_Data = home_three_banner_data.filter(item => item.Selected_type === type);
        return filtered_Data[filtered_Data.length - 1];
    }).filter(Boolean)





    return (
        <div className='bg-white'>
            <div className='relative '>
                {
                    LastItemBySelectedId.map((item) => {

                        {/* grid secion 1 */ }
                        if (item.Selected_type === 'One') {
                            return (
                                <div key={item._id} className=' pt-5  max-w-[1536px] mx-auto px-5 '>
                                    <div className=' grid md:grid-cols-2 gap-0 md:gap-x-5 lg:gap-10 xl:gap-16 2xl:gap-32 md:items-center'>
                                        {/* text part */}

                                        <div className='flex items-center justify-center'>
                                            <div >
                                                <h1 className={` text-3xl lg::text-4xl font-bold capitalize leading-8 lg:leading-10 pt-5 md:pt-10 lg:pt-20 pr-0 xl:pr-[10%] text-black text-center md:text-left`}>
                                                    {item.Title_Banner_One}
                                                </h1>
                                                <p className={`text-sm  lg:text-[16px] xl:text-lg font-bold text-center md:text-left py-10 pr-0 xl:pr-[15%] text-black ${montserrat.className}`}>
                                                    {item.Description}
                                                </p>

                                            </div>
                                        </div>

                                        {/* image part */}
                                        <div className=' bg-[#84c2dbb7] rounded-xl p-2 md:p-5 lg:p-7 xl:p-10  rounded-tl-[100px] lg:rounded-tl-[170px] xl:rounded-tl-[220px] h-full md:h-[450px] lg:h-full  rounded-br-[150px] lg:rounded-br-[220px]  shadow-lg  hover:shadow-xl hover:shadow-[#404e5a93] shadow-[#598a9e]'>

                                            <img src={item.Choose_Event_Image_One} className=" rounded-tl-[100px] lg:rounded-tl-[170px] xl:rounded-tl-[200px] h-[300px] md:h-[400px] lg:h-full w-full  object-cover shadow-xl shadow-[#38393a9d]" />
                                        </div>

                                    </div>

                                </div>
                            )
                        }


                        {/* grid secion 2 */ }
                        {
                            if (item.Selected_type === 'Two') {
                                return (
                                    <div key={item._id} className=' pt-24 md:pt-10 lg:pt-20 xl:pt-24 max-w-[1536px] mx-auto px-5  '>
                                        <div className=' md:grid md:grid-cols-2 gap-0 md:gap-x-5 lg:gap-5 xl:gap-16 flex flex-col-reverse md:flex-none  items-center'>

                                            {/* image part */}
                                            <div className=' bg-[#84c2dbb7] rounded-bl-[350px] rounded-tl-[350px] rounded-tr-[350px] p-2 md:p-5 xl:p-10 shadow-lg  hover:shadow-xl hover:shadow-[#404e5a93] shadow-[#598a9e] h-full    md:h-[360px] lg:h-[450px] xl:h-full'>

                                                <img src={item.Choose_Event_Image_Two} alt="" className="h-[250px] md:h-[320px] lg:h-full w-full rounded-2xl object-cover rounded-bl-[350px] rounded-tl-[350px] rounded-tr-[350px]" />
                                            </div>
                                            {/* text part */}

                                            <div className='flex items-center justify-center lg:pl-10 xl:px-16 '>
                                                <div >
                                                    <h1 className={`text-3xl md:text-4xl font-bold capitalize leading-8 lg:leading-10 pt-5 md:pt-10 lg:pt-20 text-center md:text-left text-black`}>
                                                        {item.Title_Banner_Two}
                                                    </h1>
                                                    <p className={` text-sm lg:text-[16px] xl:text-lg  font-semibold text-black text-center md:text-left py-10  ${montserrat.className}`}>
                                                        {item.Description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        }



                        {/* grid secion 3 */ }

                        {
                            if (item.Selected_type === 'Three') {
                                return (

                                    <div key={item._id} className=' pt-5 lg:pt-20 xl:pt-24 max-w-[1536px] mx-auto px-5 '>
                                        <div className=' grid md:grid-cols-2 gap-0 md:gap-x-5 lg:gap-5 xl:gap-16 2xl:gap-32 items-center'>
                                            {/* text part */}

                                            <div className='flex items-center justify-center'>
                                                <div >
                                                    <h1 className={` text-3xl lg:text-4xl font-bold capitalize leading-8 lg:leading-10 pt-5 md:pt-10 lg:pt-20 pr-0 xl:pr-[15%] text-black text-center md:text-left`}>
                                                        {item.Title_Banner_Three}
                                                    </h1>
                                                    <p className={`text-sm lg:text-[16px] xl:text-lg font-bold text-center md:text-left py-10 pr-0 xl:pr-[15%] text-black ${montserrat.className}`}>
                                                        {item.Description}

                                                    </p>

                                                </div>
                                            </div>

                                            {/* image part */}
                                            <div className=' bg-[#84c2dbb7] rounded-xl rounded-tl-[100px] lg:rounded-tl-[220px] rounded-br-[100px] lg:rounded-br-[220px] p-2 md:p-5 xl:p-10  shadow-lg  hover:shadow-xl hover:shadow-[#404e5a93] shadow-[#598a9e] h-full md:md:h-[440px] lg:h-full'>
                                                <img src={item.Choose_Event_Image_Three} className=" rounded-tl-[100px] lg:rounded-tl-[200px] h-[300px] md:h-[400px] lg:h-[520px] xl:h-[600px] rounded-br-[100px] lg:rounded-br-[200px]  w-full rounded-2xl object-cover border-t-8 border-r-8 "></img>
                                            </div>

                                        </div>

                                    </div>
                                )
                            }
                        }



                    })
                }
            </div>
        </div>
    )
}

export default Mission_Three_banner