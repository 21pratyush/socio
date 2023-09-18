"use client"
import React from 'react'
import { Avatar, AvatarGroup, } from "@nextui-org/react";
import Image from 'next/image';
import phone from "@/public/Svg/phone.svg"
import video from "@/public/Svg/videocall.svg"

const GroupVideoCall = () => {
    return (
        <div className='bg-white w-[90%] px-4 py-8 flex- flex-col space-y-6 rounded-xl'>
            <div>
                <AvatarGroup isBordered max={2}>
                    <Avatar color='primary' src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                    <Avatar color='secondary' src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                    <Avatar color='success' src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                </AvatarGroup>
            </div>
            <div className=''>
                <h4 className='text-center font-semibold text-lg'>Jessica’s Wedding Plan</h4>
                <h5 className='text-center text-sm font-normal text-gray-500 mt-2'>Active Now</h5>
            </div>
            <div className='flex justify-around items-center gap-2 '>
                <div className='flex gap-2 items-center bg-blue-300 p-[10px] rounded-xl bg-opacity-50 cursor-pointer'>
                    <Image src={phone} alt='' className='h-[25px] w-[25px]' />
                    <h5 className='text-sm text-blue-600 font-semibold'>Call Group</h5>
                </div>
                <div className='flex gap-2 items-center bg-blue-300 p-[10px] rounded-xl bg-opacity-50 cursor-pointer'>
                    <Image src={video} alt='' className='h-[25px] w-[25px]' />
                    <h5 className='text-sm text-blue-600 font-semibold'>Video Call</h5>
                </div>
            </div>
        </div>
    )
}

export default GroupVideoCall