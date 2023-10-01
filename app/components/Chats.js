import React from 'react'
import Image from 'next/image'
import { userchat } from '../constants/UserChatdata'

const Chats = () => {
    return (
        <div className='chats'>
            {
                userchat.map((item) => {
                    return (
                        <div key={item.id} className='userChat '>
                            <div className='flex gap-3 items-center'>
                                <Image src={item.userimg} alt="" />
                                <div className="userChatInfo">
                                    <span>{item.name}</span>
                                    <p>{item.message}</p>
                                </div>
                            </div>
                            <div>
                                <h4>{item.lastsendmessage}</h4>
                            </div>

                        </div>
                    )
                })
            }


        </div>
    )
}

export default Chats