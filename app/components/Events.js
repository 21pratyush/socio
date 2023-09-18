"use client"
import React from 'react'
import img1 from "@/public/Pics/eve1.avif"
import img2 from "@/public/Pics/eve2.avif"
import popcorn from "@/public/Svg/popcorn.svg"
import events from "@/public/Svg/events.svg"
import Image from 'next/image'
import { Avatar, AvatarGroup } from '@nextui-org/react'

const Events = () => {
    return (
        <div className='w-[400px] flex gap-2 overflow-hidden'>
            <div className='h-[280px] bg-white rounded-xl relative'>
                <Image src={img1} className='h-[200px] w-[200px] object-cover rounded-tl-xl rounded-tr-xl' alt='' />
                <div className='absolute top-0 py-8 px-6 flex flex-col gap-4 items-start'>
                    <div className='flex space-x-2 items-center'>
                        <Image src={popcorn} alt='' className='h-[30px] w-[30px]' />
                        <h4 className='text-white font-bold text-xl'>Pop Corn</h4>
                    </div>
                    <div>
                        <h5 className='text-white font-semibold text-sm'>Start watching with
                            friends & family.</h5>
                    </div>
                    <div className=''>
                        <button className='text-slate-800 bg-white text-sm font-medium px-4 py-2 rounded-lg flex items-center'>Watch Now</button>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-[8px] mt-2'>
                    <div>
                        <AvatarGroup isBordered max={3} size='sm' >
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                        </AvatarGroup>
                    </div>
                    <div className='w-full'>
                        <h5 className='text-center text-gray-600 text-opacity-60 text-sm'>35 friends watching now</h5>
                    </div>
                </div>
            </div>
            <div className='h-[280px] bg-white rounded-xl relative'>
                <Image src={img2} className='h-[200px] w-[200px] object-cover rounded-tl-xl rounded-tr-xl' alt='' />
                <div className='absolute top-0 py-8 px-6 flex flex-col gap-4 items-start'>
                    <div className='flex space-x-2 items-center'>
                        <Image src={events} alt='' className='h-[30px] w-[30px]' />
                        <h4 className='text-white font-bold text-xl'>Events</h4>
                    </div>
                    <div>
                        <h5 className='text-white font-semibold text-sm'>Join events near you for free.</h5>
                    </div>
                    <div className=''>
                        <button className='text-slate-800 bg-white text-sm font-medium px-4 py-2 rounded-lg flex items-center'>Explore All</button>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-[8px] mt-2'>
                    <div>
                        <AvatarGroup isBordered max={3} size='sm' >
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                        </AvatarGroup>
                    </div>
                    <div className='w-full'>
                        <h5 className='text-center text-gray-600 text-opacity-60 text-sm'>14 friends
                            going</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events