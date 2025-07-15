'use client'
import React, { useEffect, use, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import Image from 'next/image'
import { useAuth } from '../../../../../Context/AuthContext/AuthContext';
import { useParams, useRouter } from 'next/navigation'

function Details() {
    const { all_news, set_All_news } = useAuth();
    const [singleNews, setSingleNews] = useState(null);

    const params = useParams();
    const router = useRouter();
    const id = params?.id;


    useEffect(() => {
        fetch('https://speach-and-langauge-responsive.vercel.app/News_api')
            .then(res => res.json())
            .then(data => {
                const dataWithIds = data.map((item, index) => ({ id: index + 1, ...item }));
                set_All_news(dataWithIds);
            });
    }, []);

    console.log('all news', all_news)



    useEffect(() => {
        if (all_news.length > 0 && id) {
            const found = all_news.find(news => news._id === id)
            setSingleNews(found);
        }
    }, [all_news, id]);



    if (!singleNews) {
        return <div className='text-center text-2xl pt-20'>Loading News...</div>;
    }

    console.log(all_news)

    return (
        <div className='max-w-[1536px] mx-auto pt-5  lg:pt-16'>
            <div className='px-5 lg:px-[5%] pb-20'>
                {/* Back button */}
                

                {/* Title */}
                <div className=' pt-10'>
                    <h1 className=' w-full lg:w-[70%] text-3xl md:text-4xl lg:text-5xl font-semibold uppercase leading-8 text-center lg:text-left px-0 lg:px-5 pb-10'>
                        <span className='text-[#000000]'>{singleNews?.AboutBannerTitle} </span>
                    </h1>
                </div>

                {/* Image */}
                <div className=' pb-10'>
                    <img
                        src={singleNews?.AboutImage}
                        alt='news-image'
                        className='rounded-2xl h-[300px] md:h-[400px] lg:h-[550px] xl:h-[700px] w-full object-cover'
                    />
                </div>

                {/* Description */}
                <div className=' col-span-5 px-2 md:px-3 lg:px-8 overflow-auto pt-2'>
                    <h3 className=' text-2xl font-bold pb-5'>{singleNews?.AboutBannerTitle}</h3>
                    <p className=' text-lg font-semibold'>
                        {singleNews?.Description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Details;
