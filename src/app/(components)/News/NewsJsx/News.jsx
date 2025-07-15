'use client';

import Image from 'next/image';
import { AuroraText } from '../../../../components/magicui/aurora-text';
import { Montserrat } from 'next/font/google';
import { useEffect, useState } from 'react';
import { useAuth } from '../../../../../Context/AuthContext/AuthContext';
import Link from 'next/link';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['600'],
});

function News() {
    const { all_news, set_All_news } = useAuth();

    const [visibleCount, setVisibleCount] = useState(12);
    const [selectedNews, setSelectedNews] = useState(null);

    useEffect(() => {
        fetch('https://speach-and-langauge-responsive.vercel.app/News_api')
            .then(res => res.json())
            .then(data => {
                const dataWithIds = data
                    .map((item, index) => ({ id: index + 1, ...item }))
                    .sort((a, b) => new Date(b.PostTime) - new Date(a.PostTime)); 
                set_All_news(dataWithIds);
            });
    }, []);

    return (
        <div className='max-w-[1596px] mx-auto bg-white'>
            <div className='border-b-2'>
                <h1 className={`text-3xl md:text-6xl lg:text-6xl xl:text-8xl font-extrabold capitalize leading-10 md:leading-14 lg:leading-20 xl:leading-28 text-center px-5 md:px-[10%] xl:px-[20%] pt-7 lg:pt-16`}>
                    <AuroraText>Our All Update & Latest news</AuroraText>
                </h1>
                <p className={`px-5 md:px-[10%] xl:px-[15%] text-[16px] md:text-lg xl:text-2xl leading-7 xl:leading-9 text-center py-10 ${montserrat.className}`}>
                    Stay informed with the latest news, updates, and insights from SSLT. Discover new events, announcements, and stories that impact your professional journey in speech, language, and hearing healthcare.
                </p>
            </div>

            {/* Card Section */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 gap-y-14 pb-10 pt-20 px-5 '>
                {all_news.slice(0, visibleCount).map((newdata) => (
                    <div className='' key={newdata._id}>
                        <div className=''>
                            <div className='relative'>
                                <img src={newdata.AboutImage} alt={newdata.AboutBannerTitle} className='h-[250px] w-full object-cover' />
                                <div className={`absolute z-20 items-center justify-center h-24 w-24 bg-[#84C2DB] flex flex-col top-4 right-4 font-bold text-black ${montserrat.className}`}>
                                    <span className='text-5xl'>{new Date(newdata.PostTime).getDate()}</span>
                                    <span className='text-lg'>{new Date(newdata.PostTime).toLocaleString('en-US', { month: 'short' })}</span>
                                </div>
                            </div>
                            <div className='py-3 text-center bg-[#F3F3F3] px-3 h-[200px] flex flex-col justify-between'>
                                <h1 className={`pl-1 pr-2 text-xl font-bold pt-4 capitalize ${montserrat.className}`}>
                                    {newdata.AboutBannerTitle}
                                </h1>
                                <div className='pb-3'>
                                    <Link href={`/News/${newdata._id}`}>
                                        <button className='btn rounded-full bg-[#84C2DB] border-none shadow-none px-10 text-xl font-bold text-black'>
                                            See More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Load More Button */}
            {visibleCount < all_news.length && (
                <div className='flex justify-center pb-16'>
                    <button
                        onClick={() => setVisibleCount(prev => prev + 3)}
                        className='btn h-14 px-10 shadow-2xs rounded-full mt-5 bg-[#84C2DB] border-none text-black text-lg font-bold flex items-center justify-center'
                    >
                        See More
                    </button>
                </div>
            )}

            {/* Modal */}
            {selectedNews && (
                <div className="modal modal-open" role="dialog">
                    <div className="bg-white modal-box">
                        <h3 className="text-lg font-bold">{selectedNews.newstitle}</h3>
                        <p className="py-4">{selectedNews.description || 'No additional description available.'}</p>
                        <div className="modal-action">
                            <button
                                onClick={() => setSelectedNews(null)}
                                className='btn h-10 px-10 shadow-2xs rounded-full mt-5 bg-[#84C2DB] border-none text-black text-lg font-bold flex items-center justify-center'
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default News;
