"use client";


import { AuroraText } from '../../../../components/magicui/aurora-text'
import { Montserrat } from 'next/font/google';

// ✅ Load the font with explicit weight
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600',], // choose the weights you want
});


import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';
import About_Section_3 from './About_Section_3';
import About_Section_2 from './About_Section_2';
import { useAuth } from '../../../../../Context/AuthContext/AuthContext';

import { Marquee } from "../../../../components/magicui/marquee";
import { cn } from "@/lib/utils";



const ReviewCard = ({ img }) => {
  return (
    <figure
      className={cn(
        "relative h-96 w-full md:w-80 lg:w-full xl:w-80 overflow-hidden rounded-xl",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <img src={img} alt="Marquee slide" className="w-full h-full object-cover rounded-lg" />
    </figure>
  );
};


function About_Section_1() {


  const { about_all_Image, setabout_all_Image, title_text, setall_title_text } = useAuth();
  const [apiImages, setApiImages] = useState([]);




const selectedTypeTwoImages = apiImages.slice(-20);


  // ✅ Split into two separate rows
  const mid = Math.ceil(selectedTypeTwoImages.length / 2);
  const firstRow = selectedTypeTwoImages.slice(0, mid);
  const secondRow = selectedTypeTwoImages.slice(mid);


  // fetch all titel text

  useEffect(() => {
    fetch('https://speach-and-langauge-responsive.vercel.app/About_Title_Text_api')
      .then(res => res.json())
      .then(data => {
        setall_title_text(data)
      })
  }, [])

  console.log("all text ", title_text)


  // fetch all image

  useEffect(() => {
    fetch('https://speach-and-langauge-responsive.vercel.app/About_Slide_api')
      .then(res => res.json())
      .then(data => {
        setabout_all_Image(data)
        setApiImages(data);
      })
  }, [])

    console.log('marque about images', apiImages)







  return (
    <div className='bg-gradient-to-t from-[#ffffff] via-[#ffffff] to-[#ffffff83] pb-10 md:pb-16  xl:pb-32'>
      <div className='max-w-[1596px] mx-auto px-5  lg:px-10 lg:-mt-28 lg:pt-32 '>
        <div className=' grid md:grid-cols-2 md:pb-40 lg:pb-20 xl:pb-40 pt-10 lg:pt-20  gap-20 md:gap-5 lg:gap-10 xl:gap-10 '>
          {/* left site */}

          {
            title_text.slice(-1).map((data, index) => (
              <div className=' p-3 lg:p-10 rounded-2xl h-full lg:h-[630px] bg-[#C6E2EF] backdrop-blur-sm hover:shadow-lg shadow-[#404e5a]'>
                <div>
                  <h1 className={`text-sm lg:text-[16px] xl:text-xl text-center lg:inline-flex  font-bold capitalize leading-10  bg-[#84C2DB] border-none rounded-full lg:px-5 shadow-none text-black `}>
                    {data.Title_Text_One}
                  </h1>


                  <h1 className={` text-lg  xl:text-2xl  font-bold capitalize leading-6 lg:leading-7 xl:leading-8 pt-10 pb-10 text-center lg:text-left`}>
                    <AuroraText>{data.Title_Text_Two}</AuroraText>
                  </h1>

                </div>
                <div>
                  <p className=' text-sm lg:text-lg font-medium  text-center lg:text-left'>
                    {data.Description}
                  </p>
                </div>
              </div>
            ))
          }



          <div className="relative md:flex h-[550px] lg:h-[630px] w-full md:flex-row items-center justify-center overflow-hidden">
            <div>
              <Marquee pauseOnHover vertical className="[--duration:10s]">
                {firstRow.map((item) => (
                  <ReviewCard key={item._id} img={item.Choose_Image} />
                ))}
              </Marquee>
            </div>
            <div className=' block md:hidden lg:block'>
              <Marquee reverse pauseOnHover vertical className="[--duration:10s] ">
                {secondRow.map((item) => (
                  <ReviewCard key={item._id} img={item.Choose_Image} />
                ))}
              </Marquee>
            </div>

            {/* Gradient overlays for fade effect */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
          </div>
        </div>

      </div>
      <About_Section_3></About_Section_3>
      <About_Section_2></About_Section_2>
    </div>
  )
}

export default About_Section_1