"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import cross from "@/public/Svg/cross.svg"
import "react-quill/dist/quill.bubble.css";
import ReactQuill from 'react-quill';
import { Global } from '../context/GlobalContext';
import { Avatar, Select, SelectItem } from '@nextui-org/react';
import { type } from '../constants/posttype';

const CreatePost = () => {
    const [value, setValue] = useState("");
    const { setopencreatepost, closepostmodal } = Global()
    return (
        <div className='h-[92vh] w-[100vw] bg-black bg-opacity-30 flex items-center justify-center' >
            <div className='h-[600px] w-[600px] bg-white rounded-md'>
                <div className='flex items-center justify-center relative py-4'>
                    <h1 className='text-lg font-medium capitalize'>create post</h1>
                    <div className='absolute right-3 cursor-pointer h-[35px] w-[35px] bg-blue-300 bg-opacity-25 rounded-full flex items-center justify-center'>
                        <Image src={cross} alt='' onClick={closepostmodal} />
                    </div>
                </div>
                <hr />
                <div className='px-6 w-full py-2 flex flex-col gap-2'>
                    <div className='flex items-center space-x-3'>
                        <div>
                            <Avatar isBordered />
                        </div>
                        <div className='flex flex-col space-y-3 items-start w-full'>
                            <h5 className='text-lg font-semibold capitalize'>sagar dabas</h5>
                            <Select
                                label="View"
                                placeholder="Select an animal"
                                className="max-w-[200px] text-smm"
                                defaultSelectedKeys={["public"]}
                                size='lg'

                            >
                                {type.map((item) => (
                                    <SelectItem key={item.view} >
                                        {item.view}
                                    </SelectItem>
                                ))}

                            </Select>
                        </div>
                    </div>
                    <div className='h-[200px] overflow-hidden'>
                        <ReactQuill
                            className=""
                            theme="bubble"
                            value={value}
                            onChange={setValue}
                            placeholder="What's on your mind Sagar?"
                        />
                    </div>
                </div>
                <div className='h-[300px] bg-blue-500 w-full'>
                    hii
                </div>
            </div>
        </div>
    )
}

export default CreatePost