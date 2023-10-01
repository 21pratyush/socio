"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Animex from "@/public/Svg/Animex.svg"
import add from "@/public/Svg/add.png"
import Home from "@/public/Svg/Home.svg"
import search from "@/public/Svg/search.png"
import message from "@/public/Svg/message.png"
import avtar from "@/public/Pics/avtar.jpeg"
import { Global } from '../context/GlobalContext'
import { Avatar } from '@nextui-org/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'




const Sidebar = () => {
    const { openpostmodal } = Global()
    return (
        <>
            <div className='min-h-screen w-[25vh] px-4  flex justify-between  flex-col py-3 '>
                <div className='flex flex-col  space-y-8 '>
                    <div className='flex items-center justify-start pl-2'>
                        <Image src={Animex} alt='logo' className='h-[52px] w-[140px] object-contain cursor-pointer' />
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className="rounded-3xl p-2 pt-3  hover:bg-gray-50 hover:bg-opacity-10">
                            <Link href={"/"}>
                                <button>
                                    <li class=" flex items-center gap-4">
                                        <Image src={Home} alt='logo' className='h-[34px] w-[34px] object-contain cursor-pointer' />
                                        <p class=" font-semibold text-[24px] text-[#262626] font-sans">Home</p>
                                    </li>
                                </button>
                            </Link>
                        </div>
                        <div class="rounded-3xl p-2 pt-3  hover:bg-gray-50 hover:bg-opacity-10">
                            <button>
                                <li class=" flex items-center gap-4">
                                    <Image src={search} alt='logo' className='h-[38px] w-[38px] object-cover cursor-pointer' />
                                    <p class=" font-semibold text-[24px] text-[#262626] font-sans">Quest </p>
                                </li>
                            </button>
                        </div>
                        <div class="rounded-3xl p-2 pt-3  hover:bg-gray-50 hover:bg-opacity-10">
                            <Link href={"/convo"}>
                                <button>
                                    <li class=" flex items-center gap-4">
                                        <Image src={message} alt='logo' className='h-[38px] w-[38px] object-cover cursor-pointer' />
                                        <p class=" font-semibold text-[24px] text-[#262626] font-sans">Convo</p>
                                    </li>
                                </button>
                            </Link>
                        </div>
                        <div class="rounded-3xl p-2 pt-3  hover:bg-gray-50 hover:bg-opacity-10">
                            <button>
                                <li class=" flex items-center gap-4">
                                    <Image src={add} alt='logo' className='h-[38px] w-[38px] object-cover cursor-pointer' />
                                    <p class=" font-semibold text-[24px] text-[#262626] font-sans">Studio</p>
                                </li>
                            </button>
                        </div>
                        <div class="rounded-3xl p-2 pt-3  hover:bg-gray-50 hover:bg-opacity-10">
                            <Link href={"/profile"}>
                                <button>
                                    <li class=" flex items-center justify-center gap-4">
                                        <Avatar size='md' isBordered color='primary' src="https://images.unsplash.com/photo-1687360440747-cafed773d446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3687&q=80" />
                                        <p class=" font-semibold text-[24px] text-[#262626] font-sans">Avtar</p>
                                    </li>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar