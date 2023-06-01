import React from 'react';
import Layout from '/components/Layout';
import { Box, Flex, Spacer, Wrap, Image, Heading, Text } from '@chakra-ui/react';
import Boxmenu from '/components/Boxmenu';
import Link from 'next/link';

const Home = () => {

  let line = {
    bgColor: '#000000',
    width: '100%',
    marginTop: '12px',
    height: '2px',
  }

  return (
    <div >
      <Layout >
        <div >
          <Heading color='#3E3C6E' size='4xl'>Head test</Heading>
          <Box sx={line}></Box>
          <Wrap align='center' justify='center' spacingX='36px' spacingY='36px' marginTop='36px'>
            <Boxmenu headding='Head 1' text='Read more here 1' />
            <Boxmenu headding='Head 2' text='Read more here 2' />
            <Boxmenu headding='Head 3' text='Read more here 3' />
            <Boxmenu headding='Head 4' text='Read more here 4' />
            <Boxmenu headding='Head 5' text='Read more here 5' />
          </Wrap>
        </div>
      </Layout>
    </div>
  )
}

export default Home;