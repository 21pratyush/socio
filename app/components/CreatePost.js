// "use client"
// import Image from 'next/image'
// import React, { useState } from 'react'
// import cross from "@/public/Svg/cross.svg"
// import "react-quill/dist/quill.bubble.css";
// import { Global } from '../context/GlobalContext';
// import { Avatar, } from '@nextui-org/react';
// import dynamic from 'next/dynamic';
// import photo from "@/public/Svg/photo.svg"

// const DynamicPicker = dynamic(() => import('emoji-mart').then((mod) => mod.Picker), {
//     ssr: false, // Disable server-side rendering for this component
// });

// const CreatePost = () => {
//     // const [value, setValue] = useState("");
//     const { setopencreatepost, closepostmodal } = Global()
//     const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//     const [text, setText] = useState('');


//     const handleEmojiClick = (emoji) => {
//         // Insert the selected emoji into the textarea at the current cursor position
//         const textarea = document.getElementById('custom-textarea');
//         const start = textarea.selectionStart;
//         const end = textarea.selectionEnd;
//         const newText =
//             text.substring(0, start) + emoji.native + text.substring(end);
//         setText(newText);
//         setShowEmojiPicker(false);
//         textarea.focus();
//     };



//     return (
//         <div className='h-[92vh] w-[100vw] bg-black bg-opacity-30 flex items-center justify-center' >
//             <div className='h-[600px] w-[600px] bg-white rounded-md'>
//                 <div className='flex items-center justify-center relative py-4'>
//                     <h1 className='text-lg font-medium capitalize'>create post</h1>
//                     <div className='absolute right-3 cursor-pointer h-[35px] w-[35px] bg-blue-300 bg-opacity-25 rounded-full flex items-center justify-center'>
//                         <Image src={cross} alt='' onClick={closepostmodal} />
//                     </div>
//                 </div>
//                 <hr />
//                 <div className='px-6 w-full py-3 flex flex-col gap-2'>
//                     <div className='flex items-center space-x-4'>
//                         <div>
//                             <Avatar isBordered />
//                         </div>
//                         <div className='flex flex-col  items-start w-full'>
//                             <h5 className='text-base font-semibold capitalize'>sagar dabas</h5>
//                             <div className="custom-select">
//                                 <select className="" id="custom-options">
//                                     <option value="" data-icon="🌐">Public</option>
//                                     <option value="" data-icon="👥">Everyone</option>
//                                     <option value="" data-icon="📝">For Post</option>
//                                 </select>
//                             </div>
//                         </div>
//                     </div>
//                     <div className=''>
//                         <textarea className='w-full text-lg capitalize custom-textarea' name="" id="" cols="25" rows="10" placeholder='Whats on your mind Sagar?'></textarea>
//                     </div>
//                     <div className='h-[40px] w-full border border-black'></div>
//                 </div>
//                 <div className='px-6 space-y-3'>
//                     <div className='h-[50px] w-full border border-black border-opacity-30 rounded-md flex items-center justify-between px-3'>
//                         <div>
//                             <h5>Add to your post</h5>
//                         </div>
//                         <div className='flex items-center gap-2'>
//                             <Image src={photo} alt='' className='h-[30px] w-[30px] mix-blend-multiply cursor-pointer' />
//                             <Image src={photo} alt='' className='h-[30px] w-[30px] mix-blend-multiply cursor-pointer' />
//                             <Image src={photo} alt='' className='h-[30px] w-[30px] mix-blend-multiply cursor-pointer' />
//                             <Image src={photo} alt='' className='h-[30px] w-[30px] mix-blend-multiply cursor-pointer' />
//                             <Image src={photo} alt='' className='h-[30px] w-[30px] mix-blend-multiply cursor-pointer' />
//                         </div>
//                     </div>
//                     <button className='bg-blue-500 text-white text-base font-medium w-full h-[40px] text-center capitalize rounded'>Post</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default CreatePost