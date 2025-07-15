'use client'
import React, { useEffect } from 'react'
import { LampContainer } from "../../../../components/ui/lamp";
import { AuroraText } from '../../../../components/magicui/aurora-text'
import { TracingBeam } from "../../../../components/ui/tracing-beam"
import { useAuth } from '../../../../../Context/AuthContext/AuthContext';



function OurTeacher() {

  const{ourEvent, setourEvent} = useAuth();


  useEffect(()=>{

    fetch('https://speach-and-langauge-responsive.vercel.app/Community_api')
    .then(res=> res.json())
    .then(data =>{
      setourEvent(data);
    })
  },[])


  console.log("our event", ourEvent)


    return (
        <div className=' -mb-[50px] lg:-mb-[200px]'>
            <LampContainer className=" pt-72 rounded-none">
                <div className=' pt-32 pb-20'>
                    <AuroraText className="pt-40 text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-extrabold text-center uppercase"> Our <br /> <span>Community Event</span></AuroraText>
                </div>

                <div className=' max-w-[1536px] mx-auto '>
                    <TracingBeam className="px-6 ">
                        <div className=" pl-5  pt-4 w-full">
                            {ourEvent.slice(-4).map((item, index) => (
                                <div key={item._id} className="mb-10">
                                    
                                        <button className=' btn w-fit shadow-2xs bg-[#84C2DB] rounded-full text-black text-[16px] md:text-lg lg:text-xl font-semibold border-none'>{item.Event_Title_1}</button>

                                    <p className=" text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-white w-full my-5">
                                        {item.Event_Title_2}
                                    </p>

                                    <div className="text-sm  prose prose-sm dark:prose-invert text-white">
                                        <img src={item.Choose_Image} alt="blog thumbnail "  className="rounded-lg mb-10  w-full" />
                                    </div>
                                    <div>
                                        <p className=' text-white w-full text-[12px] md:text-[16px] lg:text-lg'>
                                        {item.Description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TracingBeam>
                </div>
            </LampContainer>
        </div>
    )
}

export default OurTeacher