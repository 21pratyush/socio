import React from 'react'
import PostCard from './PostCard'
import { posts } from '../constants/PostData'

const Post = () => {
    return (
        <div className='w-[90%] overflow-y-scroll'>
            <div className='flex flex-col gap-4'>
                {
                    posts.map((item) => {
                        return (
                            <PostCard key={item.id} name={item.name} text={item?.text} img={item?.img} avtar={item?.avtar} time={item?.time} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Post