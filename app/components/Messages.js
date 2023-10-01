import React from 'react'
import Message from './Message'
import Image from 'next/image'
import demo10 from "@/public/Pics/demo10.png"
import { dummymessages } from '../constants/usermessage'

const Messages = () => {
    return (
        <div className='messages'>
            <div className='userInfoContainer'>
                <Image className='userInfoimg rounded-full' src={demo10} alt='' />
                <h4>Angela Khadka</h4>
                <h5>View profile</h5>
            </div>
            <div>
                {
                    dummymessages.map((item, index) => {
                        return (
                            <Message key={index} img={item.content} Message={item.message} />
                        )
                    })
                }


            </div>
        </div>

    )
}

export default Messages