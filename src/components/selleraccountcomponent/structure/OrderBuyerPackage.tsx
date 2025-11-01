"use client"

import React from 'react'
import { FlexBox, Heading, MyAvatar, MyCard, Text } from '@/components/commoncomponents'
import { Button } from '@/components/ui/button'
import { orderlist } from '@/types';
import { OrderBuyerPackageTable } from './OrderBuyerPackageTable';

type PackageItem = {
    id: number;
}


interface Props {
  selectedOrder: orderlist | null;
  packages?: PackageItem[];
};

const OrderBuyerPackage:React.FC<Props> = ({ selectedOrder, packages=[1,2] }) => {
  return (
    <FlexBox direction='flex-col' gap='gap-5' >
        {
            packages?.map((items,_)=>
                <MyCard>
                    <FlexBox direction='flex-col' gap='gap-5' className='w-full'>
                        <FlexBox justify="justify-between" items="items-start">
                            <FlexBox direction='flex-col' gap='gap-2'>
                                <Text color='text-[#B1B5C3]' weight='font-medium'>Package {items?.toString()}</Text>
                                <Heading type='pageHeading' title={`#${selectedOrder?.orderId}-${items?.toString()} . ABC Store`}headClass='!text-base !m-0' />
                            </FlexBox>
                            <span
                                className={`text-xs font-normal px-3 py-2 rounded-sm shrink-0 text-white ${
                                    selectedOrder?.status === "Order Placed" ? "bg-[#25A7B0]" : 
                                    selectedOrder?.status === "Processing" ? "bg-[#795AEE]" : 
                                    selectedOrder?.status === "Shipped" ? "bg-[#466FF7]" : 
                                    selectedOrder?.status === "Delivered" ? "bg-[#EE4E68]" : 
                                    selectedOrder?.status === "Order Closed" ? "bg-[#47BB75]" : 
                                    selectedOrder?.status === "Cancelled" ? "bg-[#E2464A]" : 
                                    selectedOrder?.status === "Returned" ? "bg-[#882A2C]" : ''
                                }`}
                            >
                                {selectedOrder?.status}
                            </span>
                        </FlexBox>
                        <FlexBox className='p-2 bg-[#3F4352] rounded-lg w-full' justify="justify-between" items="items-center">
                            <FlexBox gap="gap-3" items="items-center" >
                                <MyAvatar 
                                    url="/assets/images/pr.png"
                                    className='w-10'
                                    imagename='user image'
                                    imgsize='rounded-full'
                                />
                                <div>
                                    <h6 className='text-white text-[15px] font-medium'>Andy Smith</h6>
                                    <p className='m-0 text-[13px] text-[#B1B5C3]'>
                                        Joined Business Hub in 2022
                                    </p>
                                </div>
                            </FlexBox>
                            <Button type='button' className='bg-transparent p-0 cursor-pointer hover:bg-transparent'>
                                <img src="/assets/icons/message.png" className='w-6' alt="" />
                            </Button>
                        </FlexBox>
                        <OrderBuyerPackageTable />
                        <FlexBox direction='flex-col' gap='gap-1'>
                            <FlexBox gap='gap-2' items='items-center'>
                                <Text color='text-[#777E90]' fontSize='text-xs'>Shipping Fee:</Text>
                                <Text color='text-[#FFFFFF]' fontSize='text-xs'>8 UET</Text>
                            </FlexBox>
                            <FlexBox gap='gap-2' items='items-center'>
                                <Text color='text-[#777E90]' fontSize='text-xs'>Tracking:</Text>
                                <Text color='text-[#FFFFFF]' fontSize='text-xs'>Not yet available</Text>
                            </FlexBox>
                            <FlexBox gap='gap-2' items='items-center'>
                                <Text color='text-[#777E90]' fontSize='text-xs'>ETA</Text>
                                <Text color='text-[#FFFFFF]' fontSize='text-xs'>3-6 days</Text>
                            </FlexBox>
                        </FlexBox>
                    </FlexBox>
                </MyCard>
            )
        }
        
    </FlexBox>
  )
}

export {OrderBuyerPackage}