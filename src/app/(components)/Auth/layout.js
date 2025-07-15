import React from 'react'
import Authfiles from './AuthJsx/Authfiles'


function AuthLayout({ children }) {
    return (
        <div className="bg-[#191919]">
            <div className=' grid grid-cols-2 max-w-[1596px] mx-auto  px-4 lg:px-10 xl:10 py-20 max-h-screen'>
            <div className='  '>
                <Authfiles></Authfiles>
            </div>
            <div className='  '>
                <main>
                    {children}
                </main>
            </div>
        </div>
        </div>
    )
}

export default AuthLayout