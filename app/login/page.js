"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import welcome from "@/public/Pics/login.png";
import logo from "@/public/Svg/Animex.svg";
import { useRouter } from 'next/navigation';

const Login = () => {

    const [user, setuser] = useState("")
    const [password, setpassword] = useState("")

    const router = useRouter()

    const handlelogin = (e) => {
        e.preventDefault()
        if (user.length > 0 && password.length > 0) {
            router.push("/")
        }
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center relative overflow-hidden">
            <Image src={welcome} alt="Welcome" className="w-full h-full object-fill " />
            <div className='absolute flex flex-col items-center justify-center gap-12'>
                <Image src={logo} className='py-3' alt='' />
                <form className='flex flex-col w-[450px] gap-8'>
                    <input value={user} onChange={(e) => setuser(e.target.value)} type="text" name="" id="" className='h-[50px] focus:outline-none rounded-md px-4' placeholder='username' />
                    <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" name="" id="" className='h-[50px] focus:outline-none rounded-md px-4' placeholder='password' />
                    <p className='text-[#EA0024] text-sm font-bold text-end hover:underline cursor-pointer'>forgot password</p>
                    <button className='w-full bg-[#F47B8D] text-[#fff] py-3 rounded-2xl' onClick={handlelogin}>Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login