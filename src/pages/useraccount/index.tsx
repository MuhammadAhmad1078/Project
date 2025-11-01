'use client';

import React from 'react';
import { CustomBreadCrumb } from '@/components/commoncomponents';
import { AccountTab } from '@/components/UserAccountComponents';


const UserAccountPage = () => {
  const path = [
    { name: 'User Account', path: '/' }
  ];

  return (
    <div className='bg-[#081516] pb-20 pt-[30px]'>
        <div className='md:w-[90%] w-[95%] mx-auto mt-30'>
            <CustomBreadCrumb
                basename='Home'
                homepath='/browseproducts'
                endname='Dashboard'
                breadcrumb={path}
            />
            <AccountTab />
        </div>
    </div>
  );
};

export default UserAccountPage;
