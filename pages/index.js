import React from 'react';
import Sidebar from 'components/Sidebar';
import { Box } from '@chakra-ui/react'


const Home = () => {
  return (
    <div className='flex'>
      <Sidebar />
      
        <Box bg='gray' w='100%' p={4} color='white' h='500px'>
          This is the Box
        </Box>
      
    </div>
  )
}

export default Home;