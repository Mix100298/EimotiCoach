
import React from 'react';
import Sidebar from 'components/Sidebar';
import { Box } from '@chakra-ui/react'


const Home = () => {
  return (
    <div className='flex gap-6'>
      <Sidebar />
      <div>
        Hi this is EimotiCoach
        </div>
    </div>
  )
}

export default Home;