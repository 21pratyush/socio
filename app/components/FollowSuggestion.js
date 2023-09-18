"use client"
import React from 'react'
import tick from "@/public/Svg/bluetick.svg"
import { Avatar } from '@nextui-org/react'
import Image from 'next/image'

const FollowSuggestion = () => {
    return (
        <div className='w-[400px] flex flex-col gap-3'>
            <div className='flex justify-between items-center '>
                <div className='flex justify-between items-center gap-2'>
                    <h4 className='text-xl font-semibold capitalize'>Who to Follow</h4>
                </div>
                <div className='flex items-center gap-[6px] cursor-pointer'>
                    <div className='h-[7px] w-[7px] bg-gray-600 bg-opacity-50 rounded-full'></div>
                    <div className='h-[7px] w-[7px] bg-gray-600 bg-opacity-50 rounded-full'></div>
                    <div className='h-[7px] w-[7px] bg-gray-600 bg-opacity-50 rounded-full'></div>
                </div>
            </div>
            <div className='flex flex-col gap-2 bg-white rounded-lg'>
                <div className='flex justify-between items-center px-6 py-3 border-b-[0.5px] border-b-black border-opacity-30'>
                    <div className='flex items-center space-x-3'>
                        <Avatar src='https://i.pravatar.cc/150?u=a04258a2462d826712d' isBordered color='default' />
                        <h5>Thomas Ben</h5>
                        <Image src={tick} alt='' />
                    </div>
                    <div>
                        <button className='flex gap-2 items-center bg-blue-300 p-[10px] px-6 rounded-xl bg-opacity-50 cursor-pointer text-sm text-blue-600 font-semibold'>Follow</button>
                    </div>
                </div>
                <div className='flex justify-between items-center px-6 pt-2 pb-3 '>
                    <div className='flex items-center space-x-3'>
                        <Avatar src='https://i.pravatar.cc/150?u=a04258114e29026708c' isBordered color='default' />
                        <h5>Sarah Pierre</h5>
                        <Image src={tick} alt='' />
                    </div>
                    <div>
                        <button className='flex gap-2 items-center bg-blue-300 p-[10px] px-6 rounded-xl bg-opacity-50 cursor-pointer text-sm text-blue-600 font-semibold'>Follow</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FollowSuggestion