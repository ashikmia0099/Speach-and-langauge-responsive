import React from 'react'

import banner1 from '../../../public/images/doctropation.png'
import Image from 'next/image'
import { NeonGradientCard } from "../../components/magicui/neon-gradient-card";


function GolsSection() {
    return (
        <div className='max-w-[1596px]  mx-auto'>
            <div>
                {/* image section */}

                <h1 className=' text-6xl font-bold text-center text-[#84C2DB] uppercase'>Message from the President:</h1>
                
                <NeonGradientCard className="w-full items-center justify-center text-center p-0 bg-white/5 backdrop-blur-sm">
                
                    <div className=' bg-[#E3F7FF] backdrop-blur-sm rounded-2xl w-full'>
                        <Image src={banner1} className=' mx-auto h-full rounded-2xl'></Image>
                    </div>

                   
                
                </NeonGradientCard>

                <div className=' -mt-40 w-full h-60 rounded-2xl px-[10%] flex items-center'>
                        <div className=' w-full h-60 rounded-2xl px-[10%] border-4 z-10 bg-white/45 backdrop-blur-sm  py-6'>
                            
                            <p className=' text-lg font-semibold text-center pt-4'>
                                Seamlessly mesh frictionless services with long-term high-impact processes. Proactively parallel task intuitive paradigms and B2B synergy. Globally brand front-end technologies vis-a-vis robust value. Uniquely create compelling users after worldwide communities. Uniquely productize parallel.
                            </p>
                        </div>

                    </div>
                

            </div>
        </div>
    )
}

export default GolsSection