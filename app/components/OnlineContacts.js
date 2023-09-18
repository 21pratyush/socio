"use client"
import Image from 'next/image'
import React from 'react'
import activedot from "@/public/Svg/activedot.svg"
import { onlinepeople } from '../constants/OnlineData'
import { Avatar } from '@nextui-org/react'

const OnlineContacts = () => {
    return (
        <div className='w-[90%] flex flex-col gap-3 overflow-hidden'>
            <div className='flex justify-between items-center '>
                <div className='flex justify-between items-center gap-2'>
                    <h4 className='text-xl font-semibold capitalize'>Online contacts</h4>
                    <Image src={activedot} className='h-[8px] w-[8px]' alt='' />
                </div>
                <div className='flex items-center gap-[6px] cursor-pointer'>
                    <div className='h-[7px] w-[7px] bg-gray-600 bg-opacity-50 rounded-full'></div>
                    <div className='h-[7px] w-[7px] bg-gray-600 bg-opacity-50 rounded-full'></div>
                    <div className='h-[7px] w-[7px] bg-gray-600 bg-opacity-50 rounded-full'></div>
                </div>
            </div>
            <div className='bg-white overflow-y-scroll flex flex-col rounded-lg h-[100%]'>
                {
                    onlinepeople.map((item, index) => {
                        return (
                            <div key={item.id} className='flex border-b-[0.5px] border-b-black py-4 px-5 space-x-5 items-center cursor-pointer border-opacity-30'>
                                <Avatar color='primary' isBordered src={item.img} />
                                <h5>{item.name}</h5>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default OnlineContacts