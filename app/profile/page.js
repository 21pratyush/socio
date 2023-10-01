"use client"
import { useState } from "react"
import Image from "next/image"
import heart from "@/public/Svg/like1.svg"
import comment from "@/public/Svg/comment1.svg"
import ptag from "@/public/Svg/ptag.svg"
import post from "@/public/Svg/posts.svg"
import saved from "@/public/Svg/bookmark.svg"
import { data } from "@/app/constants/userpostdata"
import { data1 } from "@/app/constants/userpostdata"
import { data3 } from "@/app/constants/userpostdata"
import demo from "@/public/Pics/demo.avif"
import leftarr from "@/public/Svg/leftarr.svg"
import Link from "next/link"

const Profile = () => {
    const [userpost, setuserpost] = useState(true)
    const [savedpost, setsavedpost] = useState(false)
    const [tagged, settagged] = useState(false)

    const userposthandle = () => {
        setuserpost(true);
        setsavedpost(false);
        settagged(false)
    }

    const savedposthandle = () => {
        setuserpost(false);
        setsavedpost(true);
        settagged(false)
    }

    const taggedposthandle = () => {
        setuserpost(false);
        setsavedpost(false);
        settagged(true)
    }



    return (
        <main class="relative">
            <Link href="/">
                <div className="fixed h-[50px] w-[50px] bg-white bg-opacity-25 flex items-center justify-center top-6 left-6 rounded-full">
                    <Image src={leftarr} className=" h-[34px] w-[34px] cursor-pointer " alt="" />
                </div>
            </Link>
            <div class="lg:w-8/12 lg:mx-auto mb-8">
                <header class="flex flex-wrap items-center p-4 md:py-8">
                    <div class="md:w-3/12 md:ml-16 cursor-pointer">

                        <Image
                            class="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full border-2 border-pink-600 p-1"
                            src={demo}
                            alt="profile"
                        />
                    </div>

                    <div class="w-8/12 md:w-7/12 ml-4">
                        <div class="md:flex md:flex-wrap md:items-center mb-4 gap-12">
                            <h2 class="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
                                UserName
                            </h2>
                            <a
                                href="#"
                                class="bg-blue-600 px-5 py-2 text-white font-semibold text-sm rounded block text-center sm:inline-block"
                            >Follow
                            </a>
                        </div>


                        <ul class="hidden md:flex space-x-8 mb-4">
                            <li className="flex items-center gap-1">
                                <span class="font-semibold">6</span>
                                <span>posts</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <span class="font-semibold">50.5k</span>
                                <span>followers</span>

                            </li>
                            <li className="flex items-center gap-1">
                                <span class="font-semibold">10</span>
                                <span>following</span>
                            </li>
                        </ul>


                        <div class="hidden md:block">
                            <h1 class="font-semibold">Animterix</h1>
                            <span class="bioclass">Social Media App </span>
                            <p>
                                animterix is a soical media platform based for anime fans.
                            </p>
                            <span><strong>www.animterix.com</strong></span>
                        </div>
                    </div>


                    <div class="md:hidden text-sm my-2">
                        <h1 class="font-semibold">Animterix</h1>
                        <span class="bioclass">Social Media App</span>
                        <p>
                            animterix is a soical media platform based for anime fans.
                        </p>
                    </div>
                </header>


                <div class="px-px md:px-3">
                    <ul
                        class="flex md:hidden justify-around space-x-8 border-t text-center p-2 text-gray-600 leading-snug text-sm"
                    >
                        <li>
                            <span class="font-semibold text-gray-800 block">6</span>
                            posts
                        </li>

                        <li>
                            <span class="font-semibold text-gray-800 block">50.5k</span>
                            followers
                        </li>
                        <li>
                            <span class="font-semibold text-gray-800 block">10</span>
                            following
                        </li>
                    </ul>
                    <br />
                    <br />

                    <ul
                        class="flex items-center justify-around md:justify-center space-x-12 uppercase tracking-widest font-semibold text-xs text-gray-600 border-t"
                    >
                        <li
                            class={userpost ? "md:border-t  md:border-gray-700 md:-mt-px md:text-black" : " md:-mt-px md:text-gray-700"}
                        >
                            <a class=" p-3 flex items-center gap-2" href="#" onClick={userposthandle}>
                                <Image src={post} alt="" />
                                <span class="hidden md:inline">post</span>
                            </a>
                        </li>
                        <li class={savedpost ? "md:border-t md:border-gray-700 md:-mt-px md:text-black" : " md:-mt-px md:text-gray-700"}>
                            <a class="p-3 flex items-center gap-2" href="#" onClick={savedposthandle}>
                                <Image src={saved} className="h-[24px] w-[24px] object-contain" alt="" />
                                <span class="hidden md:inline">Saved</span>
                            </a>
                        </li>
                        <li class={tagged ? "md:border-t md:border-gray-700 md:-mt-px md:text-black" : "0 md:-mt-px md:text-gray-700"}>
                            <a class="p-3 flex items-center gap-2" href="#" onClick={taggedposthandle}>
                                <Image src={ptag} className="h-[24px] w-[24px] object-contain" alt="" />
                                <span class="hidden md:inline">tagged</span>
                            </a>
                        </li>
                    </ul>
                    {userpost && (<div class="flex flex-wrap -mx-px md:-mx-3">
                        {
                            data.map((item, index) => {
                                return (
                                    <div key={item.id} class="w-1/3 p-px md:px-3">
                                        <a href="#">
                                            <article
                                                class="post bg-gray-100 text-white relative pb-full md:mb-6"
                                            >

                                                <Image
                                                    class="w-full h-full absolute left-0 top-0 object-cover"
                                                    src={item.img}
                                                    alt="image"
                                                />

                                                <i class="fas fa-square absolute right-0 top-0 m-1"></i>

                                                <div
                                                    class="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute left-0 top-0 hidden"
                                                >
                                                    <div
                                                        class="flex justify-center items-center space-x-4 h-full"
                                                    >
                                                        <span class="p-2 flex items-center gap-1">
                                                            <Image src={heart} alt="" />
                                                            <span>{item.likes}K</span>
                                                        </span>

                                                        <span class="p-2 flex items-center gap-1">
                                                            <Image src={comment} alt="" />
                                                            {item.comments}
                                                        </span>
                                                    </div>
                                                </div>
                                            </article>
                                        </a>
                                    </div>
                                )
                            })
                        }

                    </div>) || savedpost && (<div class="flex flex-wrap -mx-px md:-mx-3">
                        {
                            data1.map((item, index) => {
                                return (
                                    <div key={item.id} class="w-1/3 p-px md:px-3">
                                        <a href="#">
                                            <article
                                                class="post bg-gray-100 text-white relative pb-full md:mb-6"
                                            >

                                                <Image
                                                    class="w-full h-full absolute left-0 top-0 object-cover"
                                                    src={item.img}
                                                    alt="image"
                                                />

                                                <i class="fas fa-square absolute right-0 top-0 m-1"></i>

                                                <div
                                                    class="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute left-0 top-0 hidden"
                                                >
                                                    <div
                                                        class="flex justify-center items-center space-x-4 h-full"
                                                    >
                                                        <span class="p-2 flex items-center gap-1">
                                                            <Image src={heart} alt="" />
                                                            <span>{item.likes}K</span>
                                                        </span>

                                                        <span class="p-2 flex items-center gap-1">
                                                            <Image src={comment} alt="" />
                                                            {item.comments}
                                                        </span>
                                                    </div>
                                                </div>
                                            </article>
                                        </a>
                                    </div>
                                )
                            })
                        }

                    </div>) || tagged && (<div class="flex flex-wrap -mx-px md:-mx-3">
                        {
                            data3.map((item, index) => {
                                return (
                                    <div key={item.id} class="w-1/3 p-px md:px-3">
                                        <a href="#">
                                            <article
                                                class="post bg-gray-100 text-white relative pb-full md:mb-6"
                                            >

                                                <Image
                                                    class="w-full h-full absolute left-0 top-0 object-cover"
                                                    src={item.img}
                                                    alt="image"
                                                />

                                                <i class="fas fa-square absolute right-0 top-0 m-1"></i>

                                                <div
                                                    class="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute left-0 top-0 hidden"
                                                >
                                                    <div
                                                        class="flex justify-center items-center space-x-4 h-full"
                                                    >
                                                        <span class="p-2 flex items-center gap-1">
                                                            <Image src={heart} alt="" />
                                                            <span>{item.likes}K</span>
                                                        </span>

                                                        <span class="p-2 flex items-center gap-1">
                                                            <Image src={comment} alt="" />
                                                            {item.comments}
                                                        </span>
                                                    </div>
                                                </div>
                                            </article>
                                        </a>
                                    </div>
                                )
                            })
                        }

                    </div>)}
                </div>
            </div>
        </main>
    )
}

export default Profile