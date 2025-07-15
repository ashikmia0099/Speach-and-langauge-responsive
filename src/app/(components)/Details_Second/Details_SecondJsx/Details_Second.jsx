import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

import detailsImage from '../../../../../public/images/bannerimg.jpg'
import Image from 'next/image'

function Details_Second() {
  return (
     <div className='max-w-[1536px] mx-auto pt-16'>
                <div className=' px-[5%] pb-20'>
                    {/* button section */}
                    <div>
                        <button className='btn h-14 px-6 shadow-2xs rounded-full mt-5 bg-[#84C2DB] border-none text-black text-2xl font-bold flex items-center justify-center'>
                            <span className='pt-1'><FaArrowLeft /></span>
                            Back
                        </button>
                    </div>
                    {/* text section */}
                    <div className=' pt-10'>
                        <h1 className={`w-[70%] text-3xl md:text-4xl lg:text-5xl  font-semibold uppercase leading-8 md:leading:10 lg:leading-16 goudy-bookletter-1911-regular text-center lg:text-left px-5  pb-10`}>
                            <span className='text-[#000000]'>The Society of Speech & Language </span>
                        </h1>
    
    
                    </div>
                    {/* image section */}
                    <div className=' pb-10'>
                        <Image src={detailsImage} className=' rounded-2xl h-[700px]'></Image>
                    </div>
                    {/* grid section */}
                    <div className=''>
                       
                        {/* grid middle section */}
                        <div className=' col-span-5  px-8 overflow-auto pt-2'>
                            
                            <h3 className=' text-2xl font-bold pb-5'>Lorem description From </h3>
                             <p className=' text-lg font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui perspiciatis quis repellendus commodi delectus dolorem. Tempore rerum, ex ducimus necessitatibus nemo ad ullam corporis accusamus quaerat ratione? Laborum officiis doloribus, voluptas atque voluptatem fugiat veritatis ipsum modi inventore minima assumenda nihil nam dolorem tempora autem aut architecto maxime totam perspiciatis velit, esse, veniam corrupti! Sit totam non rerum, aliquam quos natus nulla, minus, omnis mollitia vero molestiae incidunt a cupiditate quod autem amet aspernatur dolore suscipit qui saepe unde maxime at? Maiores, cumque consectetur ab quis sapiente commodi soluta, delectus deserunt amet magnam, ducimus quaerat eveniet. Voluptates iste ex atque quod, similique sint aspernatur magni aut nesciunt eaque. Ratione officia modi, minima nihil iusto blanditiis harum quaerat praesentium perspiciatis repellendus consectetur quos nulla quidem consequuntur sequi delectus qui aut repudiandae obcaecati. Iure assumenda aliquam </p>
                            
                            
                            
                        </div>
                        {/* grid right section */}
                       
                    </div>
                </div>
            </div>
  )
}

export default Details_Second