


'use client'

import React, { useEffect, useState } from 'react'
// import { AuroraText } from '../../../../components/magicui/aurora-text';
import { AuroraText } from '../../components/magicui/aurora-text';
import { Montserrat } from 'next/font/google';
import { useAuth } from '../../../Context/AuthContext/AuthContext';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['600'],
});


function Vission_mission_object_dynamic_data({ id }) {


    const [objects, setObject] = useState([])
    const { mission_vission_object, setmission_vission_object } = useAuth()
    const [singledata, setSingleData] = useState(null)

    useEffect(() => {
        fetch('https://speach-and-langauge-responsive.vercel.app/Mission_vission_object_api')
            .then(res => res.json())
            .then(data => setmission_vission_object(data))
            .catch(err => console.error('Error fetching banner data:', err))
    }, [])

    useEffect(() => {
        if (mission_vission_object.length > 0 && id) {
            const found = mission_vission_object.find(data => data._id?.toString() === id)
            setSingleData(found)
            console.log('Found banner data:', found)
        }
    }, [mission_vission_object, id])



    if (!singledata) return null;


    // object data



    console.log('this is object', objects)



    return (
        <div className='max-w-[1596px] mx-auto bg-white'>
            <div className='border-b-2'>
                <h1 className={`text-3xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold uppercase leading-10 md:leading-14 lg:leading-20 xl:leading-28 text-center px-5 md:px-[10%] xl:px-[20%] pt-7 lg:pt-16`}>
                    <AuroraText>SSLT  {singledata.Title}</AuroraText>
                </h1>
                <p className={`px-5 md:px-[10%] xl:px-[15%] text-[16px] md:text-lg xl:text-2xl leading-7 xl:leading-9 text-center py-10 ${montserrat.className}`}>
                    {singledata.Short_Overview}
                </p>
            </div>

            {/* grid section */}
            <div className='grid grid-cols-7 pt-20 pb-20'>
                {/* grid  left section */}
                <div className=' col-span-2  px-5'>
                    <h1 className=' text-2xl font-bold  py-2 pb-6'>Table Of Content : </h1>

                    <div className=' pl-2 pr-6 space-y-4'>

                        <h1 className=' text-lg font-semibold border-b-2 text-[#B6B3B1] border-black py-2 px-2'>{singledata.Description_Title}</h1>

                        {
                            singledata.dynamicDescriptions?.map((allobject, index) => (
                                <div key={index}>
                                    <h1 className=' text-lg font-semibold border-b-2 text-[#B6B3B1] border-black py-2 px-2'>{allobject.title}</h1>

                                </div>
                            ))
                        }

                    </div>
                </div>
                {/* grid middle section */}
                <div className=' col-span-5  px-8 overflow-auto pt-2'>
                    <div >
                        <h3 className=' text-2xl font-bold pb-5'>{singledata.Description_Title} </h3>
                        <p className=' text-lg font-semibold'> {singledata.Description} </p>

                    </div>
                    {
                        singledata.dynamicDescriptions?.map((allobject, index) => (
                            <div key={index}>
                                <h3 className=' text-2xl font-bold pb-5 pt-5'>{allobject.title} </h3>
                                <p className=' text-lg font-semibold '> {allobject.text} </p>

                            </div>
                        ))
                    }

                </div>
                {/* grid right section */}

            </div>



        </div>
    )
}

export default Vission_mission_object_dynamic_data