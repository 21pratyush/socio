import React from 'react'
import Chatbar from '../components/Chatbar'
import Chat from '../components/Chat'
import "@/app/styles/styles.scss"


const Convo = () => {
    return (
        <div className='home'>
            <div className="container1">
                <Chatbar />
                <Chat />
            </div>
        </div>
    )
}

export default Convo