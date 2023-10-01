import Link from 'next/link'
import leftarr from "@/public/Svg/leftarr.svg"
import Image from 'next/image'

const Navbar = () => {


    return (
        <div className='navbar'>
            <div className='flex items-center gap-4'>
                <Link href="/">
                    <div className="  flex items-center justify-center ">
                        <Image src={leftarr} className=" h-[34px] w-[34px] cursor-pointer " alt="" />
                    </div>
                </Link>
                <span className="logo">Messages</span>
            </div>
            <div className="user">
                <h5>1 Request</h5>
            </div>
        </div>
    )
}

export default Navbar