import React, { useState } from "react";
import { Heading, MyCard, MyTable } from "@/components/commoncomponents";
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
};

type Props = {
  setSelectedOrder: (listing: orderlist | null) => void;
};

const CompletedBuyerTable: React.FC<Props>  = ({setSelectedOrder}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(6);

    const data = allorderData.filter((item)=> item.status === 'Delivered')

    const paginatedData = data.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    const columns = [
        {
            title: "Order ID",
            dataIndex: "orderId",
            key: "orderId",
            render: (_: unknown, record: orderlist) => (
                <p className="font-normal text-[13px]">{record?.orderId}</p>
            ),
        },
        {
            title: "Tracking ID",
            dataIndex: "trackId",
            key: "trackId",
            render: (_: unknown, record: orderlist) => (
                <p className="font-normal text-[13px]">{record?.trackId}</p>
            ),
        },
        {
            title: "Product Image",
            dataIndex: "proImage",
            key: "proImage",
            render: (_: unknown, record: orderlist) => (
                <div className=" flex justify-center">
                    <img src={record.proImage} className="w-10 h-14 object-contain" />
                </div>
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
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (value: orderlist["status"]) => (
                <span
                    className={`text-xs font-normal px-3 py-2 rounded-sm text-white ${
                        value === "Order Placed" ? "bg-[#25A7B0]" : 
                        value === "Processing" ? "bg-[#795AEE]" : 
                        value === "Shipped" ? "bg-[#466FF7]" : 
                        value === "Delivered" ? "bg-[#EE4E68]" : 
                        value === "Order Closed" ? "bg-[#47BB75]" : 
                        value === "Cancelled" ? "bg-[#E2464A]" : 
                        value === "Returned" ? "bg-[#882A2C]" : ''
                    }`}
                    >
                    {value}
                </span>
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
            title: "Chain Coin",
            dataIndex: "chaincoin",
            key: "chaincoin",
            render: (_: unknown, record: orderlist) => (
                <p className="font-normal text-[13px]">{record?.chaincoin}</p>
            ),
        },
        {
            title: "Order Date",
            dataIndex: "date",
            key: "date",
            render: (_: unknown, record: orderlist) => (
                <p className="font-normal text-[13px]">{record?.date}</p>
            ),
        },
    ];


    const handleRowClick = (record: orderlist) => {
        setSelectedOrder(record)
    };

    return (
        <MyCard className="text-white justify-between">
            <Heading type="pageHeading" title="Completed Orders" />
            <MyTable<orderlist>
                columns={columns}
                dataSource={paginatedData}
                rowKey="id"
                scroll={{ x: 1300 }}
                onRow={(record) => ({
                    onClick: () => handleRowClick(record),
                    style: { cursor: 'pointer' }
                })}
                tablebody="!bg-transparent"
                rowClass="!border-b border-b-[#353945]"
                pagination={{
                    current: currentPage,
                    pageSize: pageSize,
                    total: data.length,
                    onChange: (page, size) => {
                        setCurrentPage(page);
                        setPageSize(size);
                    },
                    showSizeChanger: true,
                    //   showTotal: (total) => (
                    //     <span className="text-white">{`Total ${total} items`}</span>
                    //   ),
                }}
            />
        </MyCard>
    );
};

export { CompletedBuyerTable };
