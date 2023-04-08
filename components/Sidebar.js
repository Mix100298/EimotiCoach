import React from 'react';

import { AiFillHome } from 'react-icons/ai';
import { BiHappyBeaming, BiMeh, BiSad, BiTired } from 'react-icons/bi';
import { HiMenuAlt1, HiOutlineMusicNote } from 'react-icons/hi';
import { RiMovieLine } from 'react-icons/ri';
import { MdOutlineLocalActivity } from 'react-icons/md';
import { GoBook } from 'react-icons/go';
import Link from 'next/link';
import { useState } from "react";

const Sidebar = () => {

    const menuItems = [
        { id: 1, label: 'Home', icon: <AiFillHome color='#FFFFFF' />, link: '/' },
        { id: 2, label: 'Radical', icon: <BiHappyBeaming color='#99FF66' />, link: '/', matgin: true },
        { id: 3, label: 'Bored', icon: <BiMeh color='#FFFF00' />, link: '/' },
        { id: 4, label: 'Bad', icon: <BiSad color='#FFA500' />, link: '/' },
        { id: 5, label: 'Sad', icon: <BiTired color='#FF4500' />, link: '/' },
        { id: 6, label: 'Movie', icon: <RiMovieLine color='#FF4500' />, link: '/', matgin: true },
        { id: 7, label: 'Music', icon: <HiOutlineMusicNote color='#FFA500' />, link: '/' },
        { id: 8, label: 'Book', icon: <GoBook color='#1E90FF' />, link: '/' },
        { id: 9, label: 'Activity', icon: <MdOutlineLocalActivity color='#FFFF00' />, link: '/' },
        { id: 10, label: 'EimoitCoach', icon: <GoBook />, link: '/', matgin: true },
    ];

    const [open, setOpen] = useState(false);

    return (
        <div className=''>
            <div className={`bg-[#000000] min-h-screen  text-white ${open ? 'w-20' : 'w-72'} duration-700 sticky top-0 pt-2`} >
                <div className='py-3 flex justify-end px-4'>
                    <HiMenuAlt1 className={`cursor-pointer hover:bg-[#333333] rounded-md ${open ? ' ' : 'rotate-180'} `}
                        onClick={() => setOpen(!open)}
                        size={40}
                    />
                </div>
                <div className='mt-4 flex flex-col gap-4 px-3' >
                    {menuItems.map(({ id: Icon, ...menu }) => {
                        return (
                            <Link href={menu.link} className={`${menu.matgin && 'mt-4'} flex items-center text-3xl gap-4 font-medium p-2 
                            hover:bg-[#12314e] rounded-md ml-2`} >
                                <div>{menu.icon}</div>
                                <h2 className={`${open ? ' ' : 'transition delay-500 '} ml-5 text-xl whitespace-pre duration-700 
                               ${open && 'opacity-0 translate-x-12 overflow-hidden transition duration-1000'}`}
                                >
                                    {menu.label}</h2>
                            </Link>)
                    })}
                </div>
            </div>
        </div>
    )

}

export default Sidebar;