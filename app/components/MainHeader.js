import React from 'react'
import arr from "@/public/Svg/UpArrow.svg"
import Image from 'next/image'

const MainHeader = () => {
    return (
        <div className='w-[95%]  py-4 relative  bg-white rounded-xl  cursor-pointer'>
            <h5 className='text-center text-xl text-[#788292] font-light'>
                What’s on you mind, Paul?
            </h5>
            <Image src={arr} alt='' className='absolute top-4 right-5 cursor-pointer' />
        </div>
    )
}

export default MainHeader