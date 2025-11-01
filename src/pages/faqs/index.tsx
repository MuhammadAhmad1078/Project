import React from 'react'
import { CustomBreadCrumb, FlexBox, Heading } from '@/components/commoncomponents'
import { FaqsTabs } from '@/components/FaqsComponent'

const FaqsPage = () => {

    return (
        <div className='bg-[#081516] pb-20 pt-[30px]'>
            <div className='md:w-[90%] w-[95%] mx-auto mt-20'>
                <FlexBox direction='flex-col' gap='gap-12'>
                    <CustomBreadCrumb 
                        basename='Home'
                        homepath='/browseproducts'
                        endname='FAQs'
                    />
                    <FlexBox direction='flex-col' gap='gap-0'>
                        <Heading type="pageHeading" title="FAQs" headClass="text-xl" />
                        <FaqsTabs/>
                    </FlexBox>
                </FlexBox>
            </div>
        </div>
    )
}

export default FaqsPage