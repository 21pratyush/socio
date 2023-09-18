"use client"
import { Avatar } from '@nextui-org/react'
import React from 'react'

const StoryCard = ({ img, name, bgimg }) => {
    return (
        <div
            className="relative bg-cover bg-center bg-no-repeat h-[300px] w-[180px] rounded-xl cursor-pointer"
            style={{ backgroundImage: `url(${bgimg})` }}
        >
            <div className='absolute bottom-[80px] left-[38%]'>
                <Avatar src={img} isBordered color='primary' className='h-[45px] w-[45px]' />
            </div>
            <div className='absolute bottom-[30px] w-full'>
                <h5 className='text-white text-center font-medium text-xl'>{name}</h5>
            </div>
        </div>
    )
}

export default StoryCard