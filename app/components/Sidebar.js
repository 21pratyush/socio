"use client"
import Image from 'next/image'
import React from 'react'
import facebook from "@/public/Svg/facebook.svg"
import add from "@/public/Svg/add.svg"
import bookmark from "@/public/Svg/bookmark.svg"
import calendar from "@/public/Svg/calendar.svg"
import category from "@/public/Svg/category.svg"
import help from "@/public/Svg/help.svg"
import Like from "@/public/Svg/Like.svg"
import play from "@/public/Svg/play.svg"
import setting from "@/public/Svg/setting.svg"
import videos from "@/public/Svg/videos.svg"


const Sidebar = () => {
    return (
        <div className='min-h-screen w-[8vh] bg-white flex justify-between items-center flex-col py-3 border-r border-r-gray-400 border-opacity-30'>
            <div className='flex flex-col justify-center space-y-8 items-center'>
                <div>
                    <Image src={facebook} alt='logo' className='h-[52px] w-[52px] object-contain cursor-pointer' />
                </div>
                <div className='flex flex-col items-center gap-8'>
                    <Image src={calendar} alt='logo' className='h-[38px] w-[38px] object-contain cursor-pointer' />
                    <Image src={bookmark} alt='logo' className='h-[38px] w-[38px] object-contain cursor-pointer' />
                    <Image src={play} alt='logo' className='h-[38px] w-[38px] object-contain cursor-pointer' />
                    <Image src={Like} alt='logo' className='h-[38px] w-[38px] object-contain cursor-pointer' />
                    <Image src={videos} alt='logo' className='h-[38px] w-[38px] object-contain cursor-pointer' />
                    <Image src={help} alt='logo' className='h-[38px] w-[38px] object-contain cursor-pointer' />
                    <Image src={setting} alt='logo' className='h-[38px] w-[38px] object-contain cursor-pointer' />
                    <Image src={category} alt='logo' className='h-[38px] w-[38px] object-contain cursor-pointer' />
                </div>
            </div>
            <div>
                <Image src={add} alt='logo' className='h-[60px] w-[60px] object-contain cursor-pointer' />
            </div>
        </div>
    )
}

export default Sidebar