import React from 'react';
import Layout from '/components/Layout';
import { Box, Flex, Spacer, Wrap, Image, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

let menu = {
    bgColor: '#222222',
    width: '500px',
    height: '300px',
    marginTop: '36px',
    padding: "15px 15px 15px 15px",
}

let boxText = {
    bgColor: '#FFFFFF',
    width: '400px',
    marginLeft: '10px',
    marginTop: '8px',
}

function Boxmenu({ headding, text }) {
    return (
        <Box sx={menu} boxShadow='lg' p='6' rounded='md'>
            <Image align='center' alt="Picture" height='75%' width='100%' rounded='md' />
            <Box sx={boxText}>
                <Heading align="left" color="#3E3C6E" size='xl'>{headding}</Heading>
                <Text align="left">{text}</Text>
            </Box>
        </Box>
    )
}

export default Boxmenu;