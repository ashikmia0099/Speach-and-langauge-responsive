'use client';

import React, { useEffect } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { IoArrowForwardSharp } from 'react-icons/io5';


import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import { useAuth } from '../../../../../Context/AuthContext/AuthContext';

// ✅ Load the font with explicit weight
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['500',], // choose the weights you want
});


function Mission() {


    const { healthCare, setHealthCare, } = useAuth();

    useEffect(() => {

        fetch('https://speach-and-langauge-responsive.vercel.app/Communication_HelthCare_api')
            .then(res => res.json())
            .then(data => {
                setHealthCare(data);
            })

    }, [])

    console.log('health care api', healthCare)

    return (

        <div className=''>
            <div className='  mt-5'>

                {/* pagination section */}
                <div className=''>

                    <div className=" pb-20  mx-auto">
                     
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',

                            }}
                            e

                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                640: {
                                    slidesPerView: 1.5,
                                },
                                1024: {
                                    slidesPerView: 1.8,
                                },
                            }}

                            centeredSlides={true}        // Center active slide
                            spaceBetween={20}            // Space between slides
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                                 
                                pauseOnMouseEnter: true,
                            }}
                       

                            loop={healthCare.length > 3}
                            pagination={{
                                clickable: true,

                            }}
                             observer={true}
                             observeParents={true}

                            modules={[Autoplay, Pagination]}
                            className="mySwiper"
                            
                        >

                            {
                                healthCare.map((health, index) => (
                                    <SwiperSlide className='rounded-2xl px-2 md:px-0'>
                                        <div className=' relative'>

                                            <img src={health.Choose_Image} alt="Slide 1" className=" h-[400px]   xl:h-[650px] w-full rounded-xl " />
                                            <div className=' px-5 xl:px-10 absolute  bottom-0 pb-5 xl:pb-7 '>
                                                <h1 className=' text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold py-2 xl:py-5 text-white capitalize'>{health.Title_Name}</h1>
                                                <h3 className='text-[12px] md:text-sm xl:text-lg 2xl:text-xl pb-5 font-semibold text-white'>
                                                    {health.Over_View.split(' ').slice(0, 20).join(' ')}...
                                                </h3>

                                                <Link href={`/${health._id}`}>
                                                    <button className='btn h-8 lg:h-10 xl:h-14 px-2 md:px-4 lg:px-6 shadow-2xs rounded-full  bg-[#ffffff] border-none text-black text-sm md:text-lg font-bold flex items-center justify-center'>
                                                        See More <span className='pt-1'><IoArrowForwardSharp /></span>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>

                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>


                </div>

                {/* grid seciton */}

            </div>


        </div>
    )
}

export default Mission