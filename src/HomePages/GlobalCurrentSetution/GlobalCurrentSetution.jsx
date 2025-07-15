'use client'


import { NumberTicker } from "../../components/magicui/number-ticker";
import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";
import { Timeline } from "../../components/ui/timeline";

import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import image1 from '../../../public/ssltimg/doctor1.jpg'
import image2 from '../../../public/ssltimg/doctor2.jpg'
import image3 from '../../../public/ssltimg/doctor3.jpg'
import image4 from '../../../public/ssltimg/doctor3.jpg'
import Image from "next/image";


// import required modules




function GlobalCurrentSetution() {
    return (
        <div className="max-w-[1596px]  mx-auto bg-[#b4e5f815] bg-gradient-to-b from-[#187c9b00] via-[#d3f3ff] to-[#3788a600]">

            {/* Text Section */}
            <div className=' py-16 '>
                <h1 className=' text-6xl font-bold text-center uppercase'>Global current Setution</h1>
                <p className=' w-[60%] text-center mx-auto py-6 leading-7 text-xl font-medium text-[#303131]'>Quisque sollicitudin, nunc sit amet ullamcorper lobortis, lorem ante vehicula felis, non elementum dui magna nec leo. Quisque et sapien metus. Fusce sodales mauris a ligula aliquet tincidunt. Sed congue enim at tellus ullamcorper commodo quis eget dui.</p>
            </div>
            <div className=' px-5 pb-20'>
                <div className=' grid grid-cols-3 border-t-8 border-x-4 border-b-2 border-[#a0ddf5] rounded-xl'>
                    <div className=' h-64  items flex items-center justify-center'>
                        <div className=' text-center'>
                            <h1 className=' text-7xl font-bold'>
                                <span>
                                    <NumberTicker
                                        value={60}
                                        className="whitespace-pre-wrap  tracking-tighter text-black dark:text-white"
                                    />
                                </span>
                                <span>
                                    %
                                </span>
                            </h1>

                            <p className=' px-5 py-5 text-xl font-medium '>Continually conceptualize 24/7 innovation and error-free leadership. Competently actualize web-enabled functionalities rather than effective value. Globally innovate.</p>
                        </div>
                    </div>
                    <div className=' h-64 border-l-2 border-[#a0ddf5] items flex items-center justify-center'>
                        <div className=' text-center'>
                            <h1 className=' text-7xl font-bold'>
                                <NumberTicker
                                    value={2600}
                                    className="whitespace-pre-wrap  tracking-tighter text-black dark:text-white"
                                />
                            </h1>
                            <p className=' px-5 py-5 text-xl font-medium'>Continually conceptualize 24/7 innovation and error-free leadership. Competently actualize web-enabled functionalities rather than effective value. Globally innovate.</p>
                        </div>
                    </div>
                    <div className=' h-64  items border-l-2 border-[#a0ddf5] flex items-center justify-center'>
                        <div className=' text-center'>
                            <h1 className=' text-7xl font-bold'>
                                <NumberTicker
                                    value={600}
                                    className="whitespace-pre-wrap  tracking-tighter text-black dark:text-white"
                                />
                            </h1>
                            <p className=' px-5 py-5 text-xl font-medium'>Continually conceptualize 24/7 innovation and error-free leadership. Competently actualize web-enabled functionalities rather than effective value. Globally innovate.</p>
                        </div>
                    </div>


                </div>
            </div>

            {/* carusel scroll */}

            <div className="px-5">

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper px-5"
                >
                    <SwiperSlide>
                        <Image src={image1} className=" h-96 w-full" ></Image>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src={image2} className="h-96 w-full"></Image>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src={image3} className=" h-96 w-full"></Image>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src={image4} className="h-96 w-full"></Image>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src={image2} className=" h-96 w-full"></Image>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src={image3} className=" h-96 w-full"></Image>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src={image4} className=" h-96 w-full"></Image>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src={image1} className=" h-96 w-full"></Image>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src={image3} className=" h-96 w-full"></Image>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src={image2} className=" h-96 w-full"></Image>
                    </SwiperSlide>



                </Swiper>

            </div>

        </div >
    )
}

export default GlobalCurrentSetution