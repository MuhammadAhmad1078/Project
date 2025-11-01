import React from "react";
import { FlexBox, Heading, MyCard, MyTable, MyTooltip, Text } from "@/components/commoncomponents";
import { allorderData } from "@/components/data";

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
    variant: string;
};


const AllOrderDetailTable = () => {
   
    const data = allorderData.slice(0,3)

    const columns = [
        {
            title: "P.Image",
            dataIndex: "proImage",
            key: "proImage",
            render: (_: unknown, record: orderlist) => (
                <FlexBox items="items-center" justify="justify-between" gap="20" className="w-[90px]">
                    <MyTooltip 
                        title='Mark as Out of Stock'
                    >
                        <img src={'/assets/icons/mark-outstock.png'} className="w-6" alt="out of stock" />
                    </MyTooltip>
                    <FlexBox justify="justify-center">
                        
                        <img src={record.proImage} className="w-10 h-14 object-contain" />
                    </FlexBox>
                </FlexBox>
            ),
        },
        {
            title: "Product Name",
            dataIndex: "proName",
            key: "proName",
            width: 300,
            render: (_: unknown, record: orderlist) => (
                <p className="overflow-hidden text-[13px] [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] font-normal">{record?.proName}</p>
            ),
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            render: (_: unknown, record: orderlist) => (
                <p className="font-normal text-[13px]">{record?.price}</p>
            ),
        },
        {
            title: "Quantity",
            dataIndex: "quantity",
            key: "quantity",
            render: (_: unknown, record: orderlist) => (
                <p className="font-normal text-[13px]">{record?.quantity}</p>
            ),
        },
        {
            title: "Total Cost",
            dataIndex: "totalcost",
            key: "totalcost",
            render: (_: unknown, record: orderlist) => (
                <p className="font-normal text-[13px]">{record?.totalcost}</p>
            ),
        },
        {
            title: "Variants",
            dataIndex: "variant",
            key: "variant",
            render: (_: unknown, record: orderlist) => (
                <p className="font-normal text-[13px]">{record?.variant}</p>
            ),
        },
    ];

    return (
        <>
            <FlexBox items="items-center" gap="gap-3" justify="justify-between">
                <Heading type='pageHeading' title='Order Details' headClass="!m-0" />
                <Text fontSize="text-xs" color="text-[#B1B5C3]" weight="font-medium">
                    Tracking ID : <span className="italic">ID will be received once the order is shipped</span>
                </Text>
            </FlexBox>
            <MyCard className="mt-4 text-white justify-between">
                <MyTable<orderlist>
                    columns={columns}
                    dataSource={data}
                    rowKey="id"
                    scroll={{ x: 800 }}
                    tablebody="!bg-transparent"
                    rowClass="!border-b border-b-[#353945]"
                />
            </MyCard>
        </>
    );
};

export { AllOrderDetailTable };
