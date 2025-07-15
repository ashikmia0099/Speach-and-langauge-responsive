'use client';

import React, { useEffect } from 'react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import { useAuth } from '../../../../../Context/AuthContext/AuthContext';

// ✅ Load the font with explicit weight
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['500',], // choose the weights you want
});

function About_Section_3() {


    const { all_three_banner, setall_three_banner } = useAuth();



    useEffect(() => {
        fetch("https://speach-and-langauge-responsive.vercel.app/About_Three_Banner_api")
            .then(res => res.json())
            .then(data => {
                setall_three_banner(data)
            })
    }, [])


    console.log("all three data", all_three_banner)



    // id wise data find

    // akhane selected_type wise last data filter kora holo

    const LastItemBySelectedId = ['One', 'Two', 'Three'].map(type => {
        const filtered_Data = all_three_banner.filter(item => item.Selected_type === type);
        return filtered_Data[filtered_Data.length - 1];
    }).filter(Boolean)




    return (
        <div className=''>
            <div className='relative '>
                {
                    LastItemBySelectedId.map((item) => {

                        {/* grid secion 1 */ }
                        if (item.Selected_type === 'One') {
                            return (
                                <div key={item._id} className=' pt-5  max-w-[1536px] mx-auto px-5 '>
                                    <div className=' grid lg:grid-cols-2 gap-0 lg:gap-5 xl:gap-16 2xl:gap-32'>
                                        {/* text part */}

                                        <div className='flex items-center justify-center'>
                                            <div >
                                                <h1 className={` text-3xl xl:text-4xl font-bold capitalize leading-10 md:leading-12 pt-5 md:pt-10 lg:pt-20 pr-0 lg:pr-[10%] text-black text-center lg:text-left`}>
                                                    {item.Title_Banner}
                                                </h1>
                                                <p className={`text-sm md:text-lg lg:text-sm xl:text-lg font-bold text-center lg:text-left py-10 pr-0 lg:pr-[15%] text-black ${montserrat.className}`}>
                                                    {item.Description}
                                                </p>

                                            </div>
                                        </div>

                                        {/* image part */}
                                        <div className=' bg-[#84c2dbb7] rounded-xl p-2 md:p-5 xl:p-10 rounded-tl-[100px] md:rounded-tl-[220px] rounded-br-[100px]  md:rounded-br-[300px] shadow-lg  hover:shadow-xl hover:shadow-[#404e5a93] shadow-[#598a9e] h-[250px] md:h-[500px] lg:h-full'>

                                            <img src={item.Choose_Image} className=" rounded-tl-[100px] md:rounded-tl-[200px] h-full  w-full  object-cover shadow-xl shadow-[#38393a9d]" />
                                        </div>

                                    </div>

                                </div>
                            )
                        }


                        {/* grid secion 2 */ }
                        {
                            if (item.Selected_type === 'Two') {
                                return (
                                    <div key={item._id} className=' pt-24 max-w-[1536px] mx-auto px-5 hidden lg:block'>
                                        <div className=' grid grid-cols-2 gap-0 lg:gap-5 xl:gap-16 '>

                                            {/* image part */}
                                            <div className=' bg-[#84c2dbb7] rounded-bl-[350px] rounded-tl-[350px] rounded-tr-[350px] p-2 md:p-5 xl:p-10 shadow-lg  hover:shadow-xl hover:shadow-[#404e5a93] shadow-[#598a9e]'>
                                                <img src={item.Choose_Image} alt="" className="h-full w-full rounded-2xl object-cover rounded-bl-[350px] rounded-tl-[350px] rounded-tr-[350px]" />
                                            </div>
                                            {/* text part */}

                                            <div className='flex items-center justify-center lg:pl-10 xl:px-16 '>
                                                <div >
                                                    <h1 className={`text-3xl xl:text-4xl font-bold capitalize leading-10 md:leading-12 pt-5 md:pt-10 lg:pt-20 text-left text-black`}>
                                                        {item.Title_Banner}
                                                    </h1>
                                                    <p className={` text-sm md:text-lg lg:text-sm xl:text-lg   font-semibold text-black text-left py-10  ${montserrat.className}`}>
                                                        {item.Description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        }



                        {/* mobile device */ }

                        {
                            if (item.Selected_type === 'Two') {
                                return (
                                    <div key={item._id} className=' pt-5 lg:pt-24 max-w-[1536px] mx-auto px-5 pb-10 md:pb-0 block lg:hidden'>
                                        <div className=' grid lg:grid-cols-2 gap-0 lg:gap-32'>
                                            {/* text part */}

                                            <div className='flex items-center justify-center'>
                                                <div >
                                                    <h1 className={` text-3xl md:text-4xl  lg:text-6xl font-bold capitalize leading-10 md:leading-12 lg:leading-16 pt-5 md:pt-10 lg:pt-20 pr-0 lg:pr-[15%] text-black text-center lg:text-left`}>
                                                        {item.Title_Banner}
                                                    </h1>
                                                    <p className={`text-sm md:text-lg lg:text-xl xl:text-2xl font-bold text-center lg:text-left py-10 pr-0 lg:pr-[15%] text-black ${montserrat.className}`}>
                                                        {item.Description}
                                                    </p>

                                                </div>
                                            </div>

                                            {/* image part */}
                                            <div className=' bg-[#84c2dbb7] rounded-xl p-2 md:p-5  xl:p-10 shadow-lg lg:shadow-2xl shadow-[#84C2DB]'>

                                                <img src={item.Choose_Image} alt="" className="h-full w-full rounded-2xl object-cover" />
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

                                    <div key={item._id} className=' pt-5 lg:pt-24 max-w-[1536px] mx-auto px-5 '>
                                        <div className=' grid lg:grid-cols-2 gap-0 lg:gap-5 xl:gap-16 2xl:gap-32'>
                                            {/* text part */}

                                            <div className='flex items-center justify-center'>
                                                <div >
                                                    <h1 className={` text-3xl xl:text-4xl font-bold capitalize leading-10 md:leading-12 pt-5 md:pt-10 lg:pt-20 pr-0 lg:pr-[15%] text-black text-center lg:text-left`}>
                                                       {item.Title_Banner}
                                                    </h1>
                                                    <p className={`text-sm md:text-lg lg:text-sm xl:text-lg font-bold text-center lg:text-left py-10 pr-0 lg:pr-[15%] text-black ${montserrat.className}`}>
                                                        {item.Description}

                                                    </p>

                                                </div>
                                            </div>

                                            {/* image part */}
                                            <div className=' bg-[#84c2dbb7] rounded-xl rounded-tl-[100px] md:rounded-tl-[220px] rounded-br-[100px] md:rounded-br-[220px] p-2 md:p-5 xl:p-10  shadow-lg  hover:shadow-xl hover:shadow-[#404e5a93] shadow-[#598a9e] '>
                                                <img src={item.Choose_Image} className=" rounded-tl-[100px] md:rounded-tl-[200px] h-[300px] md:h-[500px] xl:h-[600px] rounded-br-[100px] lg:rounded-br-[200px]  w-full rounded-2xl object-cover border-t-8 border-r-8 "></img>
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

export default About_Section_3