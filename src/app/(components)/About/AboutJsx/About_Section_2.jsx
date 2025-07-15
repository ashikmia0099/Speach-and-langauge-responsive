'use client'
import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import { useAuth } from '../../../../../Context/AuthContext/AuthContext';



function About_Section_2() {


  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };


  const { banner_last_image, setbanner_last_image, last_banner_text, setlast_banner_text } = useAuth();




  useEffect(() => {
    fetch("http://localhost:3000/About_Last_Banner_Imge_api")
      .then(res => res.json())
      .then(data => {
        setbanner_last_image(data)
      })
  }, [])


  console.log("all three data", banner_last_image)






  // fetch all text and  title data

  useEffect(() => {
    fetch('http://localhost:3000/Last_banner_text_api')
      .then(res => res.json())
      .then(data => {
        setlast_banner_text(data)
      })
  }, [])

  console.log("all text ", last_banner_text)




  return (
    <div className='max-w-[1596px] mx-auto px-5  lg:px-10 mt-20  xl:mt-40'>
      <div className='grid lg:grid-cols-2 pb-20 gap-10 xl:gap-20'>
        {/* left */}


        <div className=' p-3 md:p-5 xl:p-10 rounded-2xl shadow-lg  hover:shadow-lg hover:shadow-[#404e5a93] shadow-[#598b9ea4]'>
          {
            banner_last_image.length > 0 && (
              <img src={banner_last_image[banner_last_image.length - 1]?.AboutImage} className=' h-full lg:h-[800px] w-full rounded-2xl' alt="" />
            )
          }

        </div>

        {/* right */}
        <div className='grid grid-rows-4 gap-y-5'>
          {
            last_banner_text.slice(-4).map((data, index) => {
              const words = data.Description?.split(' ') || [];
              const shortText = words.slice(0, 30).join(' ');
              const remainingText = words.slice(30).join(' ');
              const isExpanded = expandedIndex === index;

              return (
                <div key={index}>
                  <h2 className=' text-lg  xl:text-2xl capitalize font-bold btn bg-[#84C2DB] border-none rounded-full px-5 text-black shadow-md hover:shadow-md hover:shadow-[#404e5a93] shadow-[#598a9e]'>
                    {data.Title}
                  </h2>
                  <p className=' text-sm md:text-[16px] lg:text-sm xl:text-lg font-medium pt-10'>
                    {shortText}
                    {!isExpanded && words.length > 30 && '... '}
                    {isExpanded && (
                      <span className='inline'>
                        {' '}
                        {remainingText}
                      </span>
                    )}
                    {words.length > 30 && (
                      <button
                        onClick={() => toggleExpand(index)}
                        className='text-blue-500 underline ml-2'
                      >
                        {isExpanded ? 'See less' : 'See more'}
                      </button>
                    )}
                  </p>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default About_Section_2;
