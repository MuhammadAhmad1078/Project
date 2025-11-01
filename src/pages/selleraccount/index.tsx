'use client';

import React from 'react';
import { Backbtn, ButtonSecondary, CustomBreadCrumb } from '@/components/commoncomponents';
import { SellerAccountTab } from '@/components/selleraccountcomponent';
import { PlusIcon } from 'lucide-react';


const SellerAccountPage = () => {

  return (
    <div className='bg-[#081516] pb-20 pt-[30px]'>
        <div className='md:w-[90%] w-[95%] mx-auto mt-30'>
            <CustomBreadCrumb
                basename='Home'
                homepath='/browseproducts'
                endname='Business Hub Profile'
            />
            <div className='flex justify-between items-center mt-8'>
                <Backbtn onClick={()=>{}} childclass='!text-base font-bold'>
                    Business Hub Profile
                </Backbtn>
                <ButtonSecondary className='flex items-center gap-2'>
                    <PlusIcon className='w-5' /> Sell a new product
                </ButtonSecondary>
            </div>
            <SellerAccountTab />
        </div>
    </div>
  );
};

export default SellerAccountPage;
