import React from "react";
import { FlexBox, MyTable } from "@/components/commoncomponents";
import { allorderData } from "@/components/data";
import { orderlist } from "@/types";

const OrderBuyerPackageTable = () => {
   
    const data = allorderData.slice(0,3)

    const columns = [
        {
            title: "P.Image",
            dataIndex: "proImage",
            key: "proImage",
            render: (_: unknown, record: orderlist) => (
                <FlexBox justify="justify-center">    
                    <img src={record.proImage} className="w-10 h-14 object-contain" />
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
        <MyTable<orderlist>
            columns={columns}
            dataSource={data}
            rowKey="id"
            scroll={{ x: 800 }}
            tablebody="!bg-transparent"
            rowClass="!border-b border-b-[#353945] text-white"
        />
    );
};

export { OrderBuyerPackageTable };
