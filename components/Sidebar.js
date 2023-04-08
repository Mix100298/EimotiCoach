import React from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import { AiFillHome } from 'react-icons/ai';
import { GoBook } from 'react-icons/go';
import Link from 'next/link';
import { useState } from "react";
import { IoLogoAngular } from 'react-icons/io';

const Sidebar = () => {

    const menuItems = [
        { id: 1, label: 'Home', icon: <AiFillHome />, link: '/' },
        { id: 2, label: 'Radical', icon: <IoLogoAngular />, link: '/', matgin: true },
        { id: 3, label: 'Bored', icon: <GoBook />, link: '/' },
        { id: 4, label: 'Bad', icon: <GoBook />, link: '/' },
        { id: 5, label: 'Sad', icon: <GoBook />, link: '/' },
        { id: 6, label: 'Movie', icon: <GoBook />, link: '/', matgin: true },
        { id: 7, label: 'Music', icon: <GoBook />, link: '/' },
        { id: 8, label: 'Book', icon: <GoBook />, link: '/' },
        { id: 9, label: 'Activity', icon: <GoBook />, link: '/' },
        { id: 10, label: 'EimoitCoach', icon: <GoBook />, link: '/', matgin: true },
    ];

    const [open, setOpen] = useState(false);

    return (
      <div className=''>
            <div className={`bg-[#000000] min-h-screen px-4 text-white ${open ? 'w-20' : 'w-72'} duration-700 sticky top-0 `} >
                <div className='py-3 flex justify-end'>
                    <HiMenuAlt1 className={`cursor-pointer hover:bg-[#333333] rounded-md ${open ? ' ' : 'rotate-180'}`}
                        onClick={() => setOpen(!open)}
                        size={38}
                    />
                </div>
                <div className='mt-4 flex flex-col gap-4 ' >
                    {menuItems.map(({ id: Icon, ...menu }) => {
                        return (
                            <Link href={menu.link} className={`${menu.matgin && 'mt-5'} flex items-center text-lg gap-4 font-medium p-2 hover:bg-[#12314e] rounded-md ml-2`} >
                                <div className='text-2xl'>{menu.icon}</div>
                                <h2 className={`${open ? ' ' : 'transition delay-500 '} ml-5 text-xl whitespace-pre duration-700 
                               ${open && 'opacity-0 translate-x-8 overflow-hidden transition duration-300'}`}
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