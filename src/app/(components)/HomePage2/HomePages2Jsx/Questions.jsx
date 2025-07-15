'use client'

import React, { useEffect, useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../../../../components/ui/accordion"

import { AuroraText } from '../../../../components/magicui/aurora-text'
import { Montserrat } from 'next/font/google';
import { useAuth } from '../../../../../Context/AuthContext/AuthContext'

// ✅ Load the font with explicit weight
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['600',], // choose the weights you want
});


function Questions() {


    const [communication, setCommication] = useState([]);
    const { Questions, setQuestion } = useAuth()


    useEffect(() => {

        fetch('https://speach-and-langauge-responsive.vercel.app/Communiction_Hearing_api')
            .then(res => res.json())
            .then(data => {
                setQuestion(data)
            })

    }, [])



    return (
        <div>
            <div className='max-w-[1536px] mx-auto pb-10 md:pb-20 lg:pb-30 pt-0 md:pt-10'>
                <div className='mt-5 md:mt-10 lg:mt-16 xl:mt-20 grid md:grid-cols-2 px-5 items-center'>
                   

                     <div className=' '>
                        <div className=' sticky pt-0 lg:pt-16 xl:pt-0 text-3xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold capitalize leading-8 md:leading-14 lg:leading-16 xl:leading-24 text-center md:text-left '>
                            <h1 className=''> <AuroraText> Hearing </AuroraText></h1>
                            <h1 className=''> <AuroraText> And </AuroraText></h1>
                            <h1 className=''> <AuroraText> Healthcare  </AuroraText></h1>

                        </div>
                    </div>
                    {/* questions */}

                    <div>
                       
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full px-5"
                            
                        >
                            {Questions?.slice(-10).map((data, index) => (
                                <AccordionItem key={data._id} value={`item-${index}`}>
                                    <AccordionTrigger className={` p-0 font-bold text-[16px] lg:text-lg xl:text-xl  2xl:text-2xl pt-5 pb-1.5${montserrat.className}`}>{data.Title_Name}</AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-4 text-balance">
                                        <p className=" text-[12px] lg:text-sm 2xl:text-lg font-semibold pt-3">{data.Description}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions