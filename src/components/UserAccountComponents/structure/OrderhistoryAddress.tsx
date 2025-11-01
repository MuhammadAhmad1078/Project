import React from 'react';
import { orderhistoryaddressData } from '@/components/data/orderhistoryaddressData';
import { MyCard, Text } from '@/components/commoncomponents';
const OrderhistoryAddress = () => {


    return (
        <div>
            <MyCard className='border-[#173D40] bg-transparent rounded-sm my-5 gap-2 text-white'
                title='Address'
            >
                
                <div className='px-3'>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                        {
                            orderhistoryaddressData?.map((items,index)=>
                                <div key={index}>
                                    <Text color='text-[#777E90]' >{items.title}</Text>
                                    <Text color='text-white' fontSize='text-[13px]' >{items.desc}</Text>
                                </div>
                            )
                        }
                    </div>
                </div>
            </MyCard>
        </div>
    );
};

export { OrderhistoryAddress };
