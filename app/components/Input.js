import React from 'react'
import Img from '@/public/Svg/image.svg'
import Attach from '@/public/Svg/attachment.svg'
import Image from 'next/image'

const Input = () => {
    return (
        <div className='input'>
            <input type="text" placeholder='Type something...' />
            <div className="send">
                <Image src={Attach} alt="" />
                <input type="file" style={{ display: "none" }} id="file" />
                <label htmlFor="file">
                    <Image src={Img} alt="" />
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Input