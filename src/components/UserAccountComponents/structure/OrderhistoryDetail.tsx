import React from 'react'
import Link from 'next/link';
import { orderhistoryData } from '@/components/data';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { OrderhistoryAddress } from './OrderhistoryAddress';
import { OrderDetails } from './OrderDetails';
import { FlexBox, Heading, MyCard } from '@/components/commoncomponents';

const OrderhistoryDetail = () => {

    const singledetail = orderhistoryData?.slice(0, 1)
  return (
    <div>
        <MyCard className='border-[#173D40] bg-transparent rounded-sm my-5'
            header={
                <FlexBox items='items-center' justify='justify-between' className='border-b border-[#0C666A]'>
                    <Heading type='pageHeading' title='Mr. John Trader' />
                    <Link href={'/'} className='text-[#466FF7] text-sm font-normal border-b border-[#466FF7] pb-1'>
                        Chat with Seller
                    </Link>
                </FlexBox>
            }
        >
            
            <div className='p-3'>
                <Table className='min-w-[1000px] font-normal'>
                    <TableBody className="bg-[#0E1414]">
                        {
                            singledetail?.map((data,index)=>
                                <TableRow className='border-[#0C666A] hover:bg-transparent cursor-pointer' key={index}>
                                    <TableCell className='w-[400px]'>
                                        <div className='flex items-center gap-4'>
                                            <div className='p-3 border border-[#0C666A] shrink-0'>
                                                <img src={data?.img} className='w-12 h-16 object-contain' alt="iPhone" />
                                            </div>
                                            <p className='text-[13px] text-white text-wrap'>
                                                {
                                                    data?.title
                                                }
                                            </p>
                                        </div>
                                    </TableCell>
                                    <TableCell className=" w-[100px]">
                                        <span className="text-[#777E90] text-sm">{data?.price}</span>                         
                                    </TableCell>                        
                                    <TableCell className='w-[80px]'>
                                        <span className="text-[#777E90]  text-sm">{data?.quantity}</span> 
                                    </TableCell>
                                    <TableCell className='w-[80px]'>
                                        {
                                            data?.status === 1 ?
                                            <span className="bg-[#2C221C] py-2 px-4 rounded-3xl text-[#F5693D] text-[13px]">
                                            To Review
                                            </span>:
                                            data?.status === 2 ?
                                            <span className="bg-[#0C3021] py-2 px-4 rounded-3xl text-[#22C55E] text-[13px]">
                                            To Received
                                            </span>:
                                            data?.status === 3 ?
                                            <span className="bg-[#112338] py-2 px-4 rounded-3xl text-[#466FF7] text-[13px]">
                                            To Ship
                                            </span>:
                                            <span className="bg-[#2A3536] py-2 px-4 rounded-3xl text-[#E8E8E8] text-[13px]">Cancelled</span>
                                        }
                                    </TableCell>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </div>
        </MyCard>
        <OrderhistoryAddress />
        <OrderDetails />
    </div>
  )
}

export {OrderhistoryDetail}