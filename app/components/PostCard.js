"use client"
import { Avatar } from '@nextui-org/react'
import like from "@/public/Svg/like.svg"
import comment from "@/public/Svg/comment.svg"
import send from "@/public/Svg/send.svg"
import bookmark from "@/public/Svg/bookmark.svg"
import Image from 'next/image'


const PostCard = ({ text, time, name, img, avtar }) => {
    return (
        <div className={img ? ' w-full bg-white flex flex-col space-y-3 p-6 gap-1 rounded-lg' : " w-full bg-white flex flex-col space-y-1 p-6 rounded-lg gap-3"}>
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

            {img && <div
                className="bg-cover bg-center bg-no-repeat h-[400px] w-full rounded-xl"
                style={{ backgroundImage: `url(${img})` }}
            >
            </div>}

            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <Image src={like} className='h-[30px] w-[30px] object-contain' alt='' />
                    <Image src={comment} className='h-[28px] w-[28px] object-contain' alt='' />
                    <Image src={send} className='h-[32px] w-[32px] object-contain' alt='' />
                </div>
                <div>
                    <Image src={bookmark} className='h-[30px] w-[30px] object-contain' alt='' />
                </div>
            </div>
            <div>
                <div class="space-y-1 text-sm">
                    <div>
                        <p class="text-black cursor-pointer">37,103 likes</p>
                    </div>
                    <div>
                        <p class="text-black cursor-pointer">rvcjinsta Noah Schnapp!</p>
                    </div>
                    <div>
                        <p class="text-gray-500 cursor-pointer">View all 400 comments</p>
                    </div>
                    <div class="flex space-x-2 text-xs">
                        <p class="text-gray-500 cursor-pointer">1 HOUR AGO</p>
                        <p class="text-black cursor-pointer">See translation</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard