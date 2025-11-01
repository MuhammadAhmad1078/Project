import React from 'react';
import { FlexBox, Heading, MyCard, Text } from '@/components/commoncomponents';
import { paymentsummaryData } from '@/components/data';
const AllOrderPaymentSummary = () => {
    return (
        <div className='mt-5'>
            <Heading type='pageHeading' title='Payment Summary' />
            <MyCard className='border-[#173D40] bg-transparent'>
                <div className={`grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5`}>
                    {
                        paymentsummaryData?.map((items,index)=>
                            <div key={index}>
                                <Text color='text-[#777E90]' fontSize='text-sm'>{items.title}</Text>
                                <Text fontSize='text-[13px]' color='text-white'>{items.subtitle}</Text>
                            </div>
                        )
                    }
                </div>
            </MyCard>
            <FlexBox gap='gap-3' className='p-4 bg-[#3F4352] rounded-lg mt-4' items='items-center'>
                <Heading className='text-[15px] text-[#CFC3C3]'>Total Charges:</Heading> <Heading headClass='!m-0' type='pageHeading' title='360 UET' />
            </FlexBox>
        </div>
    );
};

export { AllOrderPaymentSummary };
