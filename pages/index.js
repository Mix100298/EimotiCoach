import React from 'react';
import Sidebar from 'components/Sidebar';
import Layout from 'components/Layout';
import { Box } from '@chakra-ui/react';
import { HiMenuAlt1 } from 'react-icons/hi';

const index = () => {
  return (
    <Layout >
        <Box bg='tomato' w='100%' p={4} color='white' h='1500px'>
          This is the Box
        </Box>

    </Layout>
  )
}

export default index;