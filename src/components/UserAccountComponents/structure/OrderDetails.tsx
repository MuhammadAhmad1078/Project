import React from 'react';
import { OrderrecordData } from '@/components/data';
import { FlexBox, MyCard, Text } from '@/components/commoncomponents';
const OrderDetails = () => {
    return (
        <div>
            <MyCard className='border-[#173D40] bg-transparent rounded-sm my-5 gap-2'
                title='Order Detail'
                footer={
                    <FlexBox justify='justify-between ' className='border-t border-[#173D40] mt-4 w-full pt-4'>
                        <Text color='text-[#777E90]'>Total</Text>
                        <div className='text-end'>
                            <Text color='text-[#777E90]'>Paid by Cash on Delivery</Text>
                            <Text color='text-white' weight='font-medium'>2005 UET</Text>
                        </div>
                    </FlexBox>
                }
            >
                
                <div className='px-3'>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                        {
                            OrderrecordData?.map((items,index)=>
                                <div key={index}>
                                    <Text color='text-[#777E90]'>{items.title}</Text>
                                    <Text color='text-white' fontSize='text-[13px]'>{items.desc}</Text>
                                </div>
                            )
                        }
                    </div>
                </div>
                
            </MyCard>
        </div>
    );
};

export { OrderDetails };
