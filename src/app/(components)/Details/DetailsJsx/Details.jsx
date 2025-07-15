import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

// import detailsImage from '../../../../../public/images/bannerimg.jpg'
import Image from 'next/image'

function Details() {
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
                    <h1 className={`w-[55%] text-3xl md:text-4xl lg:text-5xl  font-semibold uppercase leading-8 md:leading:10 lg:leading-16 goudy-bookletter-1911-regular text-center lg:text-left px-5 `}>
                        <span className='text-[#000000]'>The Society of Speech & Language Therapists (SSLT) is a non-political</span>
                    </h1>


                    <p className={` w-[50%] text-[16px] md:text-lg lg:text-lg xl:text-xl px-5 font-semibold mt-10 text-center lg:text-left pb-14 `}>
                        The Society of Speech & Language Therapists (SSLT) is a non-political, voluntary official professional body committed to advancing education, training, and ethical practice in communication, hearing, and swallowing healthcare in Bangladesh. Established in 2017 and recognized by the Bangladesh Government
                    </p>

                </div>
                {/* image section */}
                <div className=' pb-10'>
                    {/* <Image src={detailsImage} className=' rounded-2xl h-[700px]'></Image> */}
                </div>
                {/* grid section */}
                <div className='grid grid-cols-7 pt-20 h-[100vh]'>
                    {/* grid  left section */}
                    <div className=' col-span-2  px-5'>
                       <h1 className=' text-2xl font-bold  py-2 pb-6'>Table Of Content : </h1>

                       <div className=' pl-2 pr-6 space-y-4'>
                            <h1 className=' text-lg font-semibold border-b-2 text-[#B6B3B1] border-black py-2'>This is new Bangladesh</h1>
                            <h1 className=' text-lg font-semibold border-b-2 text-[#B6B3B1] border-black py-2'>This is new Bangladesh</h1>
                            <h1 className=' text-lg font-semibold border-b-2 text-[#B6B3B1] border-black py-2'>This is new Bangladesh</h1>
                            <h1 className=' text-lg font-semibold border-b-2 text-[#B6B3B1] border-black py-2'>This is new Bangladesh</h1>

                       </div>
                    </div>
                    {/* grid middle section */}
                    <div className=' col-span-5  px-8 overflow-auto pt-2'>
                        
                        <h3 className=' text-2xl font-bold pb-5'>Lorem description From </h3>
                         <p className=' text-lg font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui perspiciatis quis repellendus commodi delectus dolorem. Tempore rerum, ex ducimus necessitatibus nemo ad ullam corporis accusamus quaerat ratione? Laborum officiis doloribus, voluptas atque voluptatem fugiat veritatis ipsum modi inventore minima assumenda nihil nam dolorem tempora autem aut architecto maxime totam perspiciatis velit, esse, veniam corrupti! Sit totam non rerum, aliquam quos natus nulla, minus, omnis mollitia vero molestiae incidunt a cupiditate quod autem amet aspernatur dolore suscipit qui saepe unde maxime at? Maiores, cumque consectetur ab quis sapiente commodi soluta, delectus deserunt amet magnam, ducimus quaerat eveniet. Voluptates iste ex atque quod, similique sint aspernatur magni aut nesciunt eaque. Ratione officia modi, minima nihil iusto blanditiis harum quaerat praesentium perspiciatis repellendus consectetur quos nulla quidem consequuntur sequi delectus qui aut repudiandae obcaecati. Iure assumenda aliquam </p>
                        
                        <h3 className=' text-2xl font-bold py-5'>Lorem description From </h3>
                         <p className=' text-lg font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui perspiciatis quis repellendus commodi delectus dolorem. Tempore rerum, ex ducimus necessitatibus nemo ad ullam corporis accusamus quaerat ratione? Laborum officiis doloribus, voluptas atque voluptatem fugiat veritatis ipsum modi inventore minima assumenda nihil nam dolorem tempora autem aut architecto maxime totam perspiciatis velit, esse, veniam corrupti! Sit totam non rerum, aliquam quos natus nulla, minus, omnis mollitia vero molestiae incidunt a cupiditate quod autem amet aspernatur dolore suscipit qui saepe unde maxime at? Maiores, cumque consectetur ab quis sapiente commodi soluta, delectus deserunt amet magnam, ducimus quaerat eveniet. Voluptates iste ex atque quod, similique sint aspernatur magni aut nesciunt eaque. Ratione officia modi, minima nihil iusto blanditiis harum quaerat praesentium perspiciatis repellendus consectetur quos nulla quidem consequuntur sequi delectus qui aut repudiandae obcaecati. Iure assumenda aliquam </p>
                        <h3 className=' text-2xl font-bold py-5'>Lorem description From </h3>
                         <p className=' text-lg font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui perspiciatis quis repellendus commodi delectus dolorem. Tempore rerum, ex ducimus necessitatibus nemo ad ullam corporis accusamus quaerat ratione? Laborum officiis doloribus, voluptas atque voluptatem fugiat veritatis ipsum modi inventore minima assumenda nihil nam dolorem tempora autem aut architecto maxime totam perspiciatis velit, esse, veniam corrupti! Sit totam non rerum, aliquam quos natus nulla, minus, omnis mollitia vero molestiae incidunt a cupiditate quod autem amet aspernatur dolore suscipit qui saepe unde maxime at? Maiores, cumque consectetur ab quis sapiente commodi soluta, delectus deserunt amet magnam, ducimus quaerat eveniet. Voluptates iste ex atque quod, similique sint aspernatur magni aut nesciunt eaque. Ratione officia modi, minima nihil iusto blanditiis harum quaerat praesentium perspiciatis repellendus consectetur quos nulla quidem consequuntur sequi delectus qui aut repudiandae obcaecati. Iure assumenda aliquam </p>
                        <h3 className=' text-2xl font-bold py-5'>Lorem description From </h3>
                         <p className=' text-lg font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui perspiciatis quis repellendus commodi delectus dolorem. Tempore rerum, ex ducimus necessitatibus nemo ad ullam corporis accusamus quaerat ratione? Laborum officiis doloribus, voluptas atque voluptatem fugiat veritatis ipsum modi inventore minima assumenda nihil nam dolorem tempora autem aut architecto maxime totam perspiciatis velit, esse, veniam corrupti! Sit totam non rerum, aliquam quos natus nulla, minus, omnis mollitia vero molestiae incidunt a cupiditate quod autem amet aspernatur dolore suscipit qui saepe unde maxime at? Maiores, cumque consectetur ab quis sapiente commodi soluta, delectus deserunt amet magnam, ducimus quaerat eveniet. Voluptates iste ex atque quod, similique sint aspernatur magni aut nesciunt eaque. Ratione officia modi, minima nihil iusto blanditiis harum quaerat praesentium perspiciatis repellendus consectetur quos nulla quidem consequuntur sequi delectus qui aut repudiandae obcaecati. Iure assumenda aliquam </p>
                        <h3 className=' text-2xl font-bold py-5'>Lorem description From </h3>
                         <p className=' text-lg font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui perspiciatis quis repellendus commodi delectus dolorem. Tempore rerum, ex ducimus necessitatibus nemo ad ullam corporis accusamus quaerat ratione? Laborum officiis doloribus, voluptas atque voluptatem fugiat veritatis ipsum modi inventore minima assumenda nihil nam dolorem tempora autem aut architecto maxime totam perspiciatis velit, esse, veniam corrupti! Sit totam non rerum, aliquam quos natus nulla, minus, omnis mollitia vero molestiae incidunt a cupiditate quod autem amet aspernatur dolore suscipit qui saepe unde maxime at? Maiores, cumque consectetur ab quis sapiente commodi soluta, delectus deserunt amet magnam, ducimus quaerat eveniet. Voluptates iste ex atque quod, similique sint aspernatur magni aut nesciunt eaque. Ratione officia modi, minima nihil iusto blanditiis harum quaerat praesentium perspiciatis repellendus consectetur quos nulla quidem consequuntur sequi delectus qui aut repudiandae obcaecati. Iure assumenda aliquam </p>
                        <h3 className=' text-2xl font-bold py-5'>Lorem description From </h3>
                         <p className=' text-lg font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui perspiciatis quis repellendus commodi delectus dolorem. Tempore rerum, ex ducimus necessitatibus nemo ad ullam corporis accusamus quaerat ratione? Laborum officiis doloribus, voluptas atque voluptatem fugiat veritatis ipsum modi inventore minima assumenda nihil nam dolorem tempora autem aut architecto maxime totam perspiciatis velit, esse, veniam corrupti! Sit totam non rerum, aliquam quos natus nulla, minus, omnis mollitia vero molestiae incidunt a cupiditate quod autem amet aspernatur dolore suscipit qui saepe unde maxime at? Maiores, cumque consectetur ab quis sapiente commodi soluta, delectus deserunt amet magnam, ducimus quaerat eveniet. Voluptates iste ex atque quod, similique sint aspernatur magni aut nesciunt eaque. Ratione officia modi, minima nihil iusto blanditiis harum quaerat praesentium perspiciatis repellendus consectetur quos nulla quidem consequuntur sequi delectus qui aut repudiandae obcaecati. Iure assumenda aliquam </p>
                        <h3 className=' text-2xl font-bold py-5'>Lorem description From </h3>
                         <p className=' text-lg font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui perspiciatis quis repellendus commodi delectus dolorem. Tempore rerum, ex ducimus necessitatibus nemo ad ullam corporis accusamus quaerat ratione? Laborum officiis doloribus, voluptas atque voluptatem fugiat veritatis ipsum modi inventore minima assumenda nihil nam dolorem tempora autem aut architecto maxime totam perspiciatis velit, esse, veniam corrupti! Sit totam non rerum, aliquam quos natus nulla, minus, omnis mollitia vero molestiae incidunt a cupiditate quod autem amet aspernatur dolore suscipit qui saepe unde maxime at? Maiores, cumque consectetur ab quis sapiente commodi soluta, delectus deserunt amet magnam, ducimus quaerat eveniet. Voluptates iste ex atque quod, similique sint aspernatur magni aut nesciunt eaque. Ratione officia modi, minima nihil iusto blanditiis harum quaerat praesentium perspiciatis repellendus consectetur quos nulla quidem consequuntur sequi delectus qui aut repudiandae obcaecati. Iure assumenda aliquam </p>
                        <h3 className=' text-2xl font-bold py-5'>Lorem description From </h3>
                         <p className=' text-lg font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui perspiciatis quis repellendus commodi delectus dolorem. Tempore rerum, ex ducimus necessitatibus nemo ad ullam corporis accusamus quaerat ratione? Laborum officiis doloribus, voluptas atque voluptatem fugiat veritatis ipsum modi inventore minima assumenda nihil nam dolorem tempora autem aut architecto maxime totam perspiciatis velit, esse, veniam corrupti! Sit totam non rerum, aliquam quos natus nulla, minus, omnis mollitia vero molestiae incidunt a cupiditate quod autem amet aspernatur dolore suscipit qui saepe unde maxime at? Maiores, cumque consectetur ab quis sapiente commodi soluta, delectus deserunt amet magnam, ducimus quaerat eveniet. Voluptates iste ex atque quod, similique sint aspernatur magni aut nesciunt eaque. Ratione officia modi, minima nihil iusto blanditiis harum quaerat praesentium perspiciatis repellendus consectetur quos nulla quidem consequuntur sequi delectus qui aut repudiandae obcaecati. Iure assumenda aliquam </p>
                        
                    </div>
                    {/* grid right section */}
                   
                </div>
            </div>
        </div>
    )
}

export default Details