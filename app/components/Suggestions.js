import React from 'react'
import avtar from "@/public/Pics/avtar.jpeg"
import Image from 'next/image'

const Suggestions = () => {
    return (
        <div class=" w-[500px]  rounded-lg">
            <div class="py-3 flex space-x-3 justify-between px-1">
                <div className='flex items-center justify-start gap-3'>
                    <button>
                        <Image
                            class="w-[60px] h-[60px] rounded-full"
                            src={avtar}
                            alt=""
                        />
                    </button>
                    <div class="">
                        <a href="">
                            <p class="text-black text-sm">Anime_234@</p>
                            <p class="text-black">Anime</p>
                        </a>
                    </div>
                </div>
                <div>
                    <a href="">
                        <p class="ml-[180px] mt-4 text-black text-sm hover:text-white">
                            Switch
                        </p>
                    </a>
                </div>
            </div>
            <div className='bg-white px-3 py-1 rounded-tr-md rounded-tl-md'>
                <div class="py-3">
                    <ul class="flex justify-between">
                        <li class="text-black">Suggestion for you</li>
                        <a href="">
                            <li class="mr-[2px] text-sm text-black hover:text-gray-400">
                                See all
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
            <div class="space-y-2 bg-white px-3">
                <div class="flex space-x-3 justify-between">
                    <div className='flex items-center justify-start gap-3'>
                        <button>
                            <Image
                                class="w-[60px] h-[60px] rounded-full"
                                src={avtar}
                                alt=""
                            />
                        </button>
                        <div>
                            <a href="/">
                                <p class="text-black text-sm">shubham_10_singh</p>
                            </a>
                            <p class="text-xs w-max text-gray-500">
                                Followed by suodrifabeal + 12 more
                            </p>
                        </div>
                    </div>

                    <div>
                        <a href="">
                            <p class="ml-[100px] text-sm text-blue-500 hover:text-black">
                                Follow
                            </p>
                        </a>
                    </div>
                </div>
                <div class="flex space-x-3 justify-between">
                    <div className='flex items-center justify-start gap-3'>
                        <button>
                            <Image
                                class="w-[60px] h-[60px] rounded-full"
                                src={avtar}
                                alt=""
                            />
                        </button>
                        <div>
                            <a href="/">
                                <p class="text-black text-sm">rohan_gujjar.13</p>
                            </a>
                            <p class="text-xs w-max text-gray-500">
                                Followed by _.adityasinghrajput._ + 6 m
                            </p>
                        </div>
                    </div>

                    <div>
                        <a href="">
                            <p
                                class="ml-[75px] text-sm text-blue-500 object-cover hover:text-black"
                            >
                                Follow
                            </p>
                        </a>
                    </div>
                </div>
                <div class="flex space-x-3 justify-between">
                    <div className='flex items-center justify-start gap-3'>
                        <button>
                            <Image
                                class="w-[60px] h-[60px] rounded-full"
                                src={avtar}
                                alt=""
                            />
                        </button>
                        <div>
                            <a href="">
                                <p class="text-black text-sm">_jangra_aman</p>
                            </a>
                            <p class="text-xs w-max text-gray-500">
                                Followed by _.adityasinghrajput._ + 7 m
                            </p>
                        </div>
                    </div>

                    <div>
                        <a href="">
                            <p class="ml-[76px] text-sm text-blue-500 hover:text-black">
                                Follow
                            </p>
                        </a>
                    </div>
                </div>
                <div class="flex space-x-3 justify-between">
                    <div className='flex items-center justify-start gap-3'>
                        <button>
                            <Image
                                class="w-[60px] h-[60px] rounded-full"
                                src={avtar}
                                alt=""
                            />
                        </button>

                        <div class="flex flex-col justify-center items-center">
                            <div class="items-center">
                                <a href="">
                                    <p class="text-black text-sm">ad_anshdeep</p>
                                </a>
                                <p class="text-xs w-max text-gray-500">
                                    Followed by vanditanandal + 3 more
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <a href="">
                            <p class="ml-[96px] text-sm text-blue-500 hover:text-black">
                                Follow
                            </p>
                        </a>
                    </div>
                </div>
                <div class="flex space-x-3 justify-between">
                    <div className='flex items-center justify-start gap-3'>
                        <button>
                            <Image
                                class="w-[60px] h-[60px] rounded-full"
                                src={avtar}
                                alt=""
                            />
                        </button>

                        <div class="flex flex-col justify-center items-center">
                            <a href="">
                                <p class="text-black text-sm">_fusiondesign_</p>
                            </a>
                            <p class="text-xs min-w-full text-gray-500">Suggested for you</p>
                        </div>
                    </div>

                    <div>
                        <p class="ml-[188px] text-sm text-blue-500 hover:text-black">
                            Follow
                        </p>
                    </div>
                </div>
            </div>
            <div class="py-4 space-y-2 text-gray-500 bg-white px-3 rounded-bl-md rounded-br-md">
                <footer>
                    <ul class="flex space-x-2 text-[12px] pt-3">
                        <a href="">
                            <li class="hover:underline hover:underline-offset-4">About.</li>
                        </a>
                        <a href="">
                            <li class="hover:underline hover:underline-offset-4">Help.</li>
                        </a>
                        <a href="">
                            <li class="hover:underline hover:underline-offset-4">Press.</li>
                        </a>
                        <a href="">
                            <li class="hover:underline hover:underline-offset-4">API.</li>
                        </a>
                        <a href="">
                            <li class="hover:underline hover:underline-offset-4">Jobs.</li>
                        </a>
                        <a href="">
                            <li class="hover:underline hover:underline-offset-4">
                                Privacy.
                            </li>
                        </a>
                        <a href="">
                            <li class="hover:underline hover:underline-offset-4">Terms.</li>
                        </a>
                    </ul>
                    <ul class="flex space-x-2 text-sm">
                        <a href="">
                            <li class="hover:underline hover:underline-offset-4">
                                Locations.
                            </li>
                        </a>
                        <a href="">
                            <li class="hover:underline hover:underline-offset-4">
                                Language
                            </li>
                        </a>
                    </ul>
                </footer>
                <div>
                    <p class="text-[12px] pt-3">&copf;2023 INSTAGRAM FROM META</p>
                </div>
            </div>
        </div>
    )
}

export default Suggestions