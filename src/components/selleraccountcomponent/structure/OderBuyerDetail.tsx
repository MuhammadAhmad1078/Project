'use client';

import React from "react";
import { Backbtn, FlexBox, MyMask, Text} from "@/components/commoncomponents";
import { AllorderCustomerDetail } from "./AllorderCustomerDetail";
import { AllOrderPaymentSummary } from "./AllOrderPaymentSummary";
import { OrderBuyerPackage } from "./OrderBuyerPackage";
import { orderlist } from "@/types";

type Props = {
  selectedOrder: orderlist | null;
  setSelectedOrder: (listing: orderlist | null) => void;
};

const OderBuyerDetail: React.FC<Props> = ({ selectedOrder, setSelectedOrder }) => {
  if (!selectedOrder) return null;
    return (
        <div>
            <Backbtn
                onClick={() => setSelectedOrder(null)}
                title={`Order ID: ${selectedOrder.orderId}`}
                childclass="!text-base font-bold"
                subtitle="May 8,2024 at 3:15 pm"
                className="items-start mb-5"
                subClass="mt-2"
                children={
                    <FlexBox gap="gap-2">
                        <Text className="text-[#B1B5C3] text-xs">UET .</Text>     
                        <MyMask
                            accountno="0xabc123...9f4a"
                            className="text-[#B1B5C3] font-normal"
                        />
                    </FlexBox>
                }
            />
            {/* <p className="text-xs text-[#B1B5C3] font-medium">
                Tracking ID : <span className="italic">ID will be received once the order is shipped</span>
            </p> */}
            <OrderBuyerPackage selectedOrder={selectedOrder}/>
            <AllorderCustomerDetail title={'Shipping Details'} />
            <AllOrderPaymentSummary />
        </div>
    );
};

export { OderBuyerDetail };
