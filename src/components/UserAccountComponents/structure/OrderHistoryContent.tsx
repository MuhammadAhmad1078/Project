import React, { useState } from 'react';
import { ButtonSecondary, FlexBox, HeadWithBtn, MySelect } from '@/components/commoncomponents';
import { OrderhistoryTable } from './OrderhistoryTable';

const OrderHistoryContent = () => {

    const [showdetail, setShowDetail] = useState(false)

    return (
        <div>
            {
                !showdetail ? 
                <>
                    <HeadWithBtn
                        title='Order History'
                    />
                    <FlexBox items='items-center' gap='gap-4' className='mt-4'>
                        <MySelect 
                            withoutForm
                            name="order"
                            className='md:w-[180px] w-full border-0 font-normal bg-[#23262F] min-h-[43px] rounded-lg'
                            placeholder='Select order'
                            options={[
                                {
                                    id:1,
                                    name: 'All Orders'
                                },
                            ]}
                        />
                        <MySelect 
                            withoutForm
                            name="status"
                            className='md:w-[180px] w-full border-0 font-normal bg-[#23262F] min-h-[43px] rounded-lg'
                            placeholder='Select status'
                            options={[
                                {
                                    id:1,
                                    name: 'Select Status'
                                },
                                {
                                    id:2,
                                    name: 'Recevied'
                                },
                                {
                                    id:3,
                                    name: 'Ship'
                                },
                                {
                                    id:4,
                                    name: 'Review'
                                },
                                {
                                    id:5,
                                    name: 'Cancel'
                                },
                            ]}
                        />
                    </FlexBox>
                </>
                :
                <FlexBox gap='gap-5'>
                    <ButtonSecondary onClick={()=>setShowDetail(false)} className='p-2'>
                        <img src="/assets/icons/ar-lft.png" width={20} className='rotate-[180deg]' alt="" />
                    </ButtonSecondary>
                    <HeadWithBtn
                        title='Order History'
                    />
                </FlexBox>
            }
            <OrderhistoryTable {...{showdetail, setShowDetail}} />
        </div>
    );
};

export { OrderHistoryContent };
