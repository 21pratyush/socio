import React from 'react'
import Image from 'next/image'
import demo1 from "@/public/Pics/demo1.avif"


const Message = ({ img, Message }) => {
    return (


        <div className='message owner'>
            <div className="messageInfo">
                <Image src={demo1} alt="" />
                <span>Just Now</span>
            </div>
            <div className="messageContent">
                {Message && <p>{Message}</p>}
                {img && <Image src={img} alt="" />}
            </div>
        </div>

    )
}

export default Message