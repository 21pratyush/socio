"use client"
import Image from 'next/image'
import React from 'react'
import search from "@/public/Svg/search.svg"
import { Avatar } from '@nextui-org/react'

const Navbar = () => {
    return (
        <div className='w-full h-[8vh] bg-white border-b border-b-gray-400 border-opacity-30 flex '>
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
                <Avatar className='cursor-pointer' color="primary" isBordered src={"https://media.istockphoto.com/id/1348369701/photo/metaverse-digital-cyber-world-technology-man-with-virtual-reality-vr-goggle-playing-ar.jpg?s=2048x2048&w=is&k=20&c=s_wJgoHpWXi_d0n9WKL3OdGTMAXRvOvKJ62kErqVeU4="} />
            </div>
        </div>
    )
}

export default Navbar