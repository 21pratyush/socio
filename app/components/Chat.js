import React from 'react'
import Cam from '@/public/Svg/video.svg'
import Add from '@/public/Svg/user.svg'
import More from '@/public/Svg/dots.svg'
import Messages from './Messages'
import Input from './Input'
import Image from 'next/image'


const Chat = () => {
    return (
        <div className='chat'>
            <div className="chatInfo">
                <span>Angela</span>
                <div className="chatIcons">
                    <Image className='chat_icons' src={Cam} alt="" />
                    <Image className='chat_icons' src={Add} alt="" />
                    <Image className='chat_icons' src={More} alt="" />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}

export default Chat