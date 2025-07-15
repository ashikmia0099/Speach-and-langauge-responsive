'use client'
import React, { useEffect } from 'react'
import { NeonGradientCard } from "../../components/magicui/neon-gradient-card";
import { IoArrowForwardSharp } from 'react-icons/io5';
import Link from 'next/link';
import { AuroraText } from '../../components/magicui/aurora-text'
import { useAuth } from '../../../Context/AuthContext/AuthContext';



function Pesident_General_Speach_Section() {




    const { founding_member, setFoundingMember } = useAuth()

    useEffect(() => {
        fetch('http://localhost:3000/Founding_Member_api')
            .then(res => res.json())
            .then(data => {
                setFoundingMember(data)

            })
    }, [])


    console.log('founding_member', founding_member)


    return (
        <div className='max-w-[1596px]  mx-auto px-5'>
            <div className=' pb-40'>
                <h1 className={` pt-0 lg:pt-16 xl:pt-0 text-3xl md:text-6xl lg:text-8xl font-extrabold capitalize leading-10  md:leading-14 lg:leading-16 xl:leading-24 pb-14 text-center lg:text-left `}>
                    <AuroraText>Message From</AuroraText>
                </h1>
                {/* image section */}

                <div className=' grid lg:grid-cols-2 gap-10'>
                    {
                        founding_member.filter(item => item.Selected_type === "Pesident").slice(-1).map((data, index) => (
                            <NeonGradientCard key={data._id} className="  bg-white/5 backdrop-blur-sm  flex flex-col">

                                <div className=' flex-grow'>
                                    <h1 className=' text-2xl md:text-3xl lg:text-4xl font-bold  text-[#84C2DB] uppercase'> <AuroraText>the President</AuroraText> </h1>
                                    <h1 className=' text-xl  lg:text-2xl font-bold  text-[#000000] py-5'> Dear Members and Visitors,
                                    </h1>
                                    <p className=' text-sm md:text-[16px] lg:text-lg xl:text-xl font-semibold py-5'>
                                        {data.Description?.split(' ').slice(0, 30).join(' ')}...
                                    </p>
                                </div>
                                <div>
                                    <Link href="/Member-Message">
                                        <button className="btn bg-white h-10 lg:h-12 xl:h-14 px-6 shadow-none rounded-full mt-3 md:mt-5 hover:bg-[#84C2DB] border-none text-black text-[16px] md:text-lg font-bold flex items-center justify-center">
                                            Learn More
                                            <span className="pt-1 pl-2">
                                                <IoArrowForwardSharp />
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                            </NeonGradientCard>
                        ))
                    }

                    {
                        founding_member.filter(item => item.Selected_type === "Secretary").slice(-1).map((data, index) => (
                            <NeonGradientCard key={data._id} className="  bg-white/5 backdrop-blur-sm">

                                <h1 className=' text-2xl md:text-3xl lg:text-4xl font-bold  text-[#84C2DB] uppercase'> <AuroraText>the General Secretary</AuroraText> </h1>
                                <h1 className=' text-xl  lg:text-2xl font-bold  text-[#000000] py-5'> Dear Members and Colleagues,</h1>
                                <p className=' text-sm md:text-[16px] lg:text-lg xl:text-xl font-semibold py-5'>
                                    {data.Description?.split(' ').slice(0, 30).join(' ')}...
                                </p>
                                <div className=' flex items-center gap-14'>

                                    <div>
                                        <Link href={'/Member-Message'}> 
                                        <button className="btn bg-white h-10 lg:h-12 xl:h-14 px-6 shadow-none rounded-full mt-3 md:mt-5 hover:bg-[#84C2DB] border-none text-black text-[16px] md:text-lg font-bold flex items-center justify-center">
                                            Learn More <span className='pt-1 pl-2'><IoArrowForwardSharp /></span>
                                        </button>
                                        </Link>
                                    </div>
                                </div>
                            </NeonGradientCard>
                        ))
                    }

                </div>





            </div>
        </div>
    )
}

export default Pesident_General_Speach_Section