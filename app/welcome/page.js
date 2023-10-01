import React from 'react';
import welcome from "@/public/Pics/welcome.png";
import logo from "@/public/Svg/Animex.svg";
import logo1 from "@/public/Pics/logo1.png"
import Image from 'next/image';

const Welcome = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center relative overflow-hidden">
            <Image src={welcome} alt="Welcome" className="w-full h-full object-cover" />
            <Image src={logo} className='absolute left-[17%] top-[58%] h-[120px] w-[320px] object-fill' alt='' />
            <Image src={logo1} className='absolute left-[14%] top-[20%] h-[400px] w-[400px] object-contain' alt='' />
        </div>
    );
};

export default Welcome;
