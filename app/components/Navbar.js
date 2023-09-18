import Image from 'next/image'
import React from 'react'
import search from "@/public/Svg/search.svg"
import avtar from "@/public/Pics/avtar.avif"

const Navbar = () => {
    return (
        <div className='w-full h-[8vh] bg-neutral-100 border-b border-b-gray-400 border-opacity-30 flex '>
            <div className='w-[70%] flex justify-end items-center space-x-8'>
                <div className='border-t-[4px] border-t-blue-500 h-full flex items-center px-3 w-fit '>
                    <h5>Home</h5>
                </div>
                <div className='border-t-[4px] border-t-blue-500 h-full flex items-center px-3 w-fit '>
                    <h5>Notification</h5>
                </div>
                <div className='border-t-[4px] border-t-blue-500 h-full flex items-center px-3 w-fit '>
                    <h5>Watch</h5>
                </div>
                <div className='border-t-[4px] border-t-blue-500 h-full flex items-center px-3 w-fit '>
                    <h5>Marketplace</h5>
                </div>
                <div className='border-t-[4px] border-t-blue-500 h-full flex items-center px-3 w-fit '>
                    <h5>Groups</h5>
                </div>
                <div className='border-t-[4px] border-t-blue-500 h-full flex items-center px-3 w-fit '>
                    <h5>Messenger</h5>
                </div>
                <div className='border-t-[4px] border-t-blue-500 h-full flex items-center px-3 w-fit '>
                    <h5>
                        Live
                    </h5>
                </div>
            </div>
            <div className=' w-[30%] flex justify-end items-center space-x-5 pr-8'>
                <Image src={search} alt='searchicon' className='h-[30px] w-[30px] object-contain cursor-pointer' />
                <div className='h-[50px] w-[50px] border-2 border-blue-600 rounded-full   overflow-hidden'>
                    <Image src={avtar} alt='searchicon' className='h-[100%] w-[100%] cursor-pointer object-cover rounded-full ' />
                </div>
            </div>
        </div>
    )
}

export default Navbar