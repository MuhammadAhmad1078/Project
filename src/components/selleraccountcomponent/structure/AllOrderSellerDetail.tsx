'use client';

import React, { useState } from "react";
import { Backbtn, FlexBox, Heading, MyDropdown, Text} from "@/components/commoncomponents";
import { AllOrderDetailTable } from "./AllOrderDetailTable";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { AllorderCustomerDetail } from "./AllorderCustomerDetail";
import { AllOrderPaymentSummary } from "./AllOrderPaymentSummary";
import { MarkShipModal, OrderOutOfStockModal } from "../modal";

type orderlist = {
  id: string;
  orderId: string;
  trackId: string;
  proImage: string;
  proName: string;
  status: string;
  price: string;
  quantity: string;
  totalcost: string;
  chaincoin: string;
  date: string;
};

type Props = {
  selectedOrder: orderlist | null;
  setSelectedOrder: (listing: orderlist | null) => void;
};



const AllOrderSellerDetail: React.FC<Props> = ({ selectedOrder, setSelectedOrder }) => {
  if (!selectedOrder) return null;

    const [statusItem, setStatusItem] = useState("order_placed");
    const [ statusdelivered, setStatusDelivered ] = useState(false)
    const [ stockmodal, setStockModal ] = useState(false)
    const status = [
        { label: "Order Placed", value: "order_placed" },
        { label: "Processing", value: "processing" },
        { label: "Shipped", value: "shipped" },
        { label: "Delivered", value: "delivered" },
        { label: "Cancelled", value: "cancelled" },
        { label: "Out of Stock", value: "outofstock" },
    ];

    const statusChange = (item: { label: string; value: string }) => {
        setStatusItem(item.value);
        if(item.value === 'shipped'){
            setStatusDelivered(true)
        } else if(item.value === 'outofstock'){
            setStockModal(true)
        } else{
            console.log('item value',item)
        }
    };
    return (
        <div>
            <FlexBox gap="gap-10" items="items-start" justify="justify-between">
                <Backbtn
                    onClick={() => setSelectedOrder(null)}
                    title={`Order ID: ${selectedOrder.orderId}`}
                    childclass="!text-base font-bold"
                    subtitle="May 8,2024 at 3:15 pm"
                    className="items-start"
                />
                {/* <span
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
                </span> */}
                <MyDropdown
                    defaultLabel="Order Placed"
                    items={status}
                    onSelect={statusChange}
                    className={`font-normal !text-[13px] ${
                        statusItem === "order_placed"
                        ? "!bg-[#25A7B0]"
                        : statusItem === "processing"
                        ? "!bg-[#795AEE]"
                        : statusItem === "shipped"
                        ? "!bg-[#466FF7]"
                        : statusItem === "delivered"
                        ? "!bg-[#EE4E68]"
                        : statusItem === "cancelled"
                        ? "!bg-[#E2464A]"
                        : statusItem === "outofstock"
                        ? "!bg-[#da5257]"
                        : ""
                    }`}
                />
            </FlexBox>
            <FlexBox className='p-2 my-5 bg-[#0C666A] rounded-lg' justify="justify-between" items="items-center">
                <FlexBox gap="gap-3" items="items-center">
                    <Avatar>
                        <AvatarImage src="/assets/images/pr.png" className='w-10' />
                        <AvatarFallback>Profile</AvatarFallback>
                    </Avatar>
                    <div>
                         <Heading weight='font-medium' fontSize='text-[15px]'>
                            Andy Smith
                        </Heading>
                        <Text fontSize='text-[13px]' color='text-[#B1B5C3]' className='m-0'>
                            Joined Business Hub in 2021
                        </Text>
                    </div>
                </FlexBox>
                <Button type='button' className='bg-transparent p-0 cursor-pointer hover:bg-transparent'>
                    <img src="/assets/icons/message.png" className='w-6' alt="" />
                </Button>
            </FlexBox>
            <AllOrderDetailTable />
            <AllorderCustomerDetail title={'Customer Details'} />
            <AllOrderPaymentSummary />

            <MarkShipModal 
                open={statusdelivered}
                onClose={()=>setStatusDelivered(false)}
            />
            <OrderOutOfStockModal 
                open={stockmodal}
                onClose={()=>setStockModal(false)}
            />
        </div>
    );
};

export { AllOrderSellerDetail };
