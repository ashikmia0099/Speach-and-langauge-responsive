'use client'
import React, { useEffect } from 'react'
import { AuroraText } from '../../components/magicui/aurora-text'
import { InteractiveHoverButton } from "../../components/magicui/interactive-hover-button";

import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Marquee } from "../../components/magicui/marquee";

import AOS from 'aos';
import 'aos/dist/aos.css';

// images 


import WhatDoctorSay from '../WhatDoctorSay/WhatDoctorSay';
import GlobalCurrentSetution from '../GlobalCurrentSetution/GlobalCurrentSetution';


function Banner() {

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with duration
    }, []);


    const files = [
        {
            name: "bitcoin.pdf",
            body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
        },
        {
            name: "finances.xlsx",
            body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
        },
        {
            name: "logo.svg",
            body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
        },
        {
            name: "keys.gpg",
            body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
        },
        {
            name: "seed.txt",
            body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
        },
    ];

    const features = [
        {
            Icon: FileTextIcon,
            name: "Save your files",
            description: "We automatically save your files as you type.",
            href: "#",
            cta: "Learn more",
            className: "col-span-3 lg:col-span-1",
            background: (
                <Marquee
                    pauseOnHover
                    className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
                >
                    {files.map((f, idx) => (
                        <figure
                            key={idx}
                            className={cn(
                                "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
                                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                                "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
                            )}
                        >
                            <div className="flex flex-row items-center gap-2">
                                <div className="flex flex-col">
                                    <figcaption className="text-sm font-medium dark:text-white ">
                                        {f.name}
                                    </figcaption>
                                </div>
                            </div>
                            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
                        </figure>
                    ))}
                </Marquee>
            ),
        },
        {
            Icon: BellIcon,
            name: "Notifications",
            description: "Get notified when something happens.",
            href: "#",
            cta: "Learn more",
            className: "col-span-3 lg:col-span-2",
        },
        {
            Icon: Share2Icon,
            name: "Integrations",
            description: "Supports 100+ integrations and counting.",
            href: "#",
            cta: "Learn more",
            className: "col-span-3 lg:col-span-2",
        },
        {
            Icon: CalendarIcon,
            name: "Calendar",
            description: "Use the calendar to filter your files by date.",
            className: "col-span-3 lg:col-span-1",
            href: "#",
            cta: "Learn more",
            background: (
                <div
                    className="w-full h-full bg-[url(/images/doctor2.jpg)] bg-bottom bg-no-repeat rounded-xl"

                />
            ),
        },
    ];

    return (
        <div className="max-w-[1596px]  mx-auto ">


            {/* Text Section */}
            <div className='bg-[url(/images/bannerimg.jpg)]  min-w-full bg-cover bg-no-repeat pb-60'>
                <h1 className='text-9xl font-bold text-center mx-[20%] pt-20 leading-40'>
                     <span className=' text-[#84C2DB]'>THE RIGHT BLEND MAKES</span> <br /> <AuroraText>ALL THE DIFFERENCE.</AuroraText>
                </h1>
                <p className='text-xl mx-[15%] text-center mt-7 leading-8 font-semibold pb-6'>
                    From Communities to Courses to Podcasts, the right Kajabi blend helps grow your audience, boost engagement, and build revenue. Take the quiz and we’ll help you find your perfect blend.
                </p>
                <div
                    className="w-full h-full bg-cover bg-center rounded-xl  bg-[url(/images/heroimages/ssltLogo.jpg)] ">
                </div>
                <div className='flex mx-auto justify-center pb-16'>
                    <InteractiveHoverButton className="bg-[#84C2DB] border-none hover:border-none text-[#AEDBEC] text-xl">
                        Get Membership
                    </InteractiveHoverButton>
                </div>
            </div>
            <div className=" overflow-hidden">
                <div className="absolute  -ml-[300px] -z-0 w-full h-full overflow-hidden">
                    <svg
                        className="w-[2500px] h-[878px]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 2143 878"
                        fill="none"
                    >
                        <path
                            d="M1465.49 217.927C1323.86 113.574 952.428 70.317 677.582 254.514C457.312 402.135 321.808 688.83 128 749.597M1465.48 217.927C1656.5 353.5 1821.26 652.244 2015.06 713.01"
                            stroke="url(#paint0_linear_2073_11849)"
                            strokeWidth="255.385"
                            strokeLinecap="round"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_2073_11849"
                                x1="773.238"
                                y1="-17.6838"
                                x2="796.893"
                                y2="429.298"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>

            <div className='bg-gradient-to-b from-[#c9f0ff] to-[#ffffff]'  >
                <div className='   grid grid-cols-4 gap-10 px-5 '>
                    <div className=' h-[450px] -mt-60 ' data-aos="fade-up">
                        <img src="/ssltimg/doctor1.jpg" className="h-full w-full rounded-xl" alt="Doctor" />

                    </div>
                    <div className=' h-[450px] -mt-40 ' data-aos="fade-up">
                        <img src="/ssltimg/doctor2.jpg" className="h-full w-full rounded-xl" alt="Doctor" />

                    </div>
                    <div className=' h-[450px] -mt-60' data-aos="fade-up">
                        <img src="/ssltimg/doctor3.jpg" className="h-full w-full rounded-xl" alt="Doctor" />

                    </div>
                    <div className=' h-[450px] -mt-40 ' data-aos="fade-up">
                        <img src="/ssltimg/doctor4.jpg" className="h-full w-full rounded-xl" alt="Doctor" />

                    </div>
                </div>


                {/* global current setution */}
                <div className=' pt-20'>
                    <GlobalCurrentSetution></GlobalCurrentSetution>
                </div>

                {/* What Doctor Say */}


                <div>
                    <WhatDoctorSay></WhatDoctorSay>
                </div>
            </div>






           
        </div>
    );
}

export default Banner;
