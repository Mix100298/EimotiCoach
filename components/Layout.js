import React from 'react';
import Sidebar from 'components/Sidebar';

const Layout = () => {
    return (
      <div className='h-screen flex flex-row justify-start'>
        <Sidebar />
        <div>
        </div>
      </div>
    )
  }

  export default Layout;