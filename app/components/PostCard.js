"use client"
import { Avatar } from '@nextui-org/react'
import React from 'react'


const PostCard = ({ text, time, name, img, avtar }) => {
    return (
        <div className={img ? 'h-[600px] w-full bg-white flex flex-col space-y-3 p-6 gap-1 rounded-lg' : "h-[300px] w-full bg-white flex flex-col space-y-3 p-6 rounded-lg gap-6"}>
            <div className='flex justify-between items-center'>
                <div className='flex items-start space-x-4'>
                    <div>
                        {avtar ? (<Avatar size='lg' isBordered color='primary' src={avtar} />) : (<Avatar size='lg' isBordered color='primary' showFallback name={name} />)}
                    </div>
                    <div>
                        <h4 className='text-lg font-semibold'>{name}</h4>
                        <h5 className='text-sm text-gray-800 text-opacity-50'>{time}</h5>
                    </div>
                </div>
                <div className='flex gap-1 items-center cursor-pointer'>
                    <div className='h-[6px] w-[6px] bg-gray-500 bg-opacity-40 rounded-full'></div>
                    <div className='h-[6px] w-[6px] bg-gray-500 bg-opacity-40 rounded-full'></div>
                    <div className='h-[6px] w-[6px] bg-gray-500 bg-opacity-40 rounded-full'></div>
                </div>
            </div>
            <div>
                <h5>{text}</h5>
            </div>
            <div>
                {img && <div
                    className="bg-cover bg-center bg-no-repeat h-[400px] w-full rounded-xl"
                    style={{ backgroundImage: `url(${img})` }}
                >
                </div>}
            </div>
        </div>
    )
}

export default PostCard