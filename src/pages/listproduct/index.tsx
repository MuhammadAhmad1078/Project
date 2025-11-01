import React from 'react'
import { CustomBreadCrumb, FlexBox, Heading } from '@/components/commoncomponents'
import { StepsForm } from '@/components/listproductcomponents';


const ListProductPage = () => {

    return (
        <div className='bg-[#081516] pb-20 pt-[30px]'>
          <div className=' md:w-[90%] w-[95%] mx-auto mt-20'>
            <CustomBreadCrumb 
              basename='Home'
              homepath='/browseproducts'
              endname='List a Product'
            />
            <FlexBox direction='flex-col' className='mt-5'>
              <Heading type='pageHeading' title='List a new product' headClass='!text-[#25A7B0] !m-0' />
              <Heading color='text-[#777E90]' fontSize='text-[13px]'>Tell us what you offer. Complete the steps to build a service that helps you connect with the right clients.</Heading>
            </FlexBox>
            <StepsForm />
          </div>
        </div>
    )
}

export default ListProductPage