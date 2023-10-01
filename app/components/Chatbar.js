import React from 'react'
import Navbar from "./Navbar"
import Chats from "./Chats"


const Chatbar = () => {
    return (
        <div className='sidebar'>
            <Navbar />
            <Chats />
        </div>
    )
}

export default Chatbar