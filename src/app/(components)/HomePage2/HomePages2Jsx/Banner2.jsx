'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoArrowForwardSharp } from 'react-icons/io5'
import { useAuth } from '../../../../../Context/AuthContext/AuthContext'
import Marquee from "react-fast-marquee";

function Banner2() {
    const [isClient, setIsClient] = useState(false)
    const { second_banner_image, setSecBannerImage } = useAuth()
    const [alternatedSlides, setAlternatedSlides] = useState([])

    useEffect(() => {
        fetch('https://speach-and-langauge-responsive.vercel.app/Banner_sec_api')
            .then(res => res.json())
            .then(data => {
                setSecBannerImage(data)
                organizeSlides(data)
            })
    }, [])

    useEffect(() => {
        setIsClient(true)
    }, [])

    const organizeSlides = (data) => {
        const singles = data.filter(item => item.Selected_type === 'Single')
        const doubles = data.filter(item => item.Selected_type === 'Double')
        const mixed = []

        const maxLength = Math.max(singles.length, doubles.length)
        for (let i = 0; i < maxLength; i++) {
            if (singles[i]) mixed.push(singles[i])
            if (doubles[i]) mixed.push(doubles[i])
        }

        setAlternatedSlides(mixed)
    }

    if (!isClient) return null

    return (
        <div className="pt-10 xl:pt-16 overflow-hidden">
            <Marquee speed={100} gradient={false} pauseOnHover={true}>
                {alternatedSlides.map((item, index) => (
                    <div key={index} className="mx-4 w-[350px] md:w-[400px] shrink-0">
                        {item.Selected_type === 'Single' ? (
                            <div className="relative rounded-2xl overflow-hidden">
                                <img
                                    src={item.Choose_Single_Type_Image}
                                    alt={item.Doctor_Name || 'Doctor Image'}
                                    className="h-[600px] w-full object-cover rounded-2xl"
                                />
                                <div className="absolute bottom-0 w-full px-4 pb-5 pt-60 bg-gradient-to-t from-[#232a38] to-[#232a3800]">
                                    <h1 className="text-3xl font-bold text-white">{item.Doctor_Name}</h1>
                                    <p className="text-white text-xl font-semibold ">{item.Doctor_Position}</p>
                                    <p className="text-white text-lg">{item.Working_place}</p>
                                    <Link href={`/${item._id}`}>
                                        <button className="btn mt-4 border-none h-12 px-5 rounded-full bg-[#84C2DB] text-black text-base font-bold flex items-center justify-center">
                                            Details <span className="pl-2"><IoArrowForwardSharp /></span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-4 h-700px]">
                                {item.Choose_Dual_Type_Image_1 && (
                                    <img
                                        src={item.Choose_Dual_Type_Image_1}
                                        alt="Image 1"
                                        className="h-[340px] w-[350px] md:w-[400px] object-cover rounded-2xl"
                                    />
                                )}
                                {item.Choose_Dual_Type_Image_2 && (
                                    <img
                                        src={item.Choose_Dual_Type_Image_2}
                                        alt="Image 2"
                                        className="h-[340px] w-[350px] md:w-[400px] object-cover rounded-2xl"
                                    />
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </Marquee>
        </div>
    )
}

export default Banner2
