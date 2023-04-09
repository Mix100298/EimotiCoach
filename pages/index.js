import React from 'react';
import Layout from '/components/Layout';
import { Box } from '@chakra-ui/react';
import Link from 'next/link';

const Home = () => {
  return (
    <div >
      <Layout >
        <div >
          <Box bg='#333333' w='100%' p={4} color='white' h='1500px'>
            This is a Home Page
          </Box>
        </div>
      </Layout>
    </div>
  )
}

export default Home;