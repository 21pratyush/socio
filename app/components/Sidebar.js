import Image from 'next/image'
import React from 'react'
import facebook from "@/public/Svg/facebook.svg"

const Sidebar = () => {
    return (
        <div className='min-h-screen w-[8vh] bg-neutral-200'>
            <div>
                <div>
                    <Image src={facebook} alt='logo' className='' />
                </div>
                <div></div>
            </div>
            <div></div>
        </div>
    )
}

export default Sidebar