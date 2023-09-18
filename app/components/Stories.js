import React from 'react'
import { stories } from '../constants/Stories'
import StoryCard from './StoryCard'

const Stories = () => {
    return (
        <div className='w-[400px] flex flex-col gap-3 overflow-hidden'>
            <div className='flex justify-between items-center '>
                <div className='flex justify-between items-center gap-2'>
                    <h4 className='text-xl font-semibold capitalize'>Stories</h4>
                </div>
                <div className='flex items-center gap-[6px] cursor-pointer'>
                    <div className='h-[7px] w-[7px] bg-gray-600 bg-opacity-50 rounded-full'></div>
                    <div className='h-[7px] w-[7px] bg-gray-600 bg-opacity-50 rounded-full'></div>
                    <div className='h-[7px] w-[7px] bg-gray-600 bg-opacity-50 rounded-full'></div>
                </div>
            </div>
            <div className='flex overflow-x-scroll gap-3'>
                {
                    stories.map((item) => {
                        return (
                            <div key={item.id} className=''>
                                <StoryCard key={item.id} img={item.img} name={item.name} bgimg={item.bgimg} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Stories