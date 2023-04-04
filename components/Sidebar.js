import React from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import { AiFillHome } from 'react-icons/ai';
import { GoBook } from 'react-icons/go';
import Link from 'next/link';
import classNames from 'classnames';
import { useRouter } from "next/router";
import { useState, useMemo } from "react";
import { IoLogoAngular } from 'react-icons/io';
import { Heading, Button, ButtonGroup, Box, Flex } from '@chakra-ui/react'

// {menu.link} 

const Sidebar = () => {

    const menuItems = [
        { id: 1, label: "Home", icon: <AiFillHome/>, link: "/" , test: <GoBook/> },
        { id: 2, label: "Happy", icon: <GoBook/>, link: "/" },
        { id: 3, label: "Sad", icon: <IoLogoAngular/>, link: "/" },
    ]; 

    return ( 
        <div>
            <div className='bg-[#000000] min-h-screen w-72 text-white px-4' >
                <div className='py-3 flex justify-end'> 
                <HiMenuAlt1 size={38} className='cursor-pointer hover:bg-[#333333] rounded-md'/>
                </div>
                <div className='mt-4 flex flex-col gap-4' >
                {menuItems.map(({ id: Icon, ...menu }) => {
                    return (                
                      <Link href={menu.link} className='flex items-center text-lg gap-4 font-medium p-2 hover:bg-[#12314e] rounded-md' >  
                      <div className='text-3xl' >{menu.icon}</div>
                      <h2 >{menu.label}</h2>
                  </Link>)})}
                </div> 
            </div>
        </div>
    )

}

export default Sidebar;


/*const Sidebar = () => {
    const [toggleCollapse, setToggleCollapse] = useState(false);
    const [isCollapsible, setIsCollapsible] = useState(false);

    const wrapperClasses = classNames(
        'bg-[#000000] h-auto min-h-screen text-white pt-8 pb-4 flex flex-col justify-between ',
        {
            ["w-72"]: !toggleCollapse,
            ["w-20"]: toggleCollapse,
        }
    );

    const collapseIconClasses = classNames(
        'p-4 rounded absolute right-0',
        {
            "rotate-180": toggleCollapse,
        }
    );

    const onMouseOver = () => {
        setIsCollapsible(!isCollapsible);
    };

    const handleSidebarToggle = () => {
        setToggleCollapse(!toggleCollapse);
    };

    const menuItems = [
        { id: 1, label: "Home", icon: GoBook, link: "/" },
        { id: 2, label: "Happy", icon: MdOutlineDashboard, link: "/" },
        { id: 3, label: "Sad", icon: IoLogoAngular, link: "/" },
    ]; 

    return <div className={wrapperClasses}
        style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}>
        <div className='py-3 flex justify-end'>

            <div className='flex items-center pl-1 gap-4 relative'>
                <div className='flex items-center pl-1 gap-4'>
                </div>
                <Button
                    className={collapseIconClasses}
                    onClick={handleSidebarToggle}
                >
                    <HiMenuAlt3 size={48} />
                </Button>
            </div>
            <div>    
            </div>/<div >
                {menuItems.map(({ icon: Icon, ...menu }) => {
                    return ( 
                        <div>
                            {menu.label}
                        </div> )})}
                    </div>
            <div >          
        </div> 
    </div>
    </div>

}*/
