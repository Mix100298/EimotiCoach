import React from "react";
import { BiHappy } from 'react-icons/bi';
import { Heading } from '@chakra-ui/react';

const Header = () => {
    return (
        <div className='bg-header sticky top-0 z-50'>
            <div className='mx-auto'>
                <div className='flex h-20 pt-4 pb-4 pr-8 pl-2 items-center gap-4 bg-[#000000] text-white'>
                    <BiHappy size={38} />
                    <Heading size='lg' fontSize='32px'>EimoitCoach</Heading>
                </div>
            </div>
        </div>
    )
}

export default Header;