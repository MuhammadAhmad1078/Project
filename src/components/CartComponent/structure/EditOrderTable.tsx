'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { carttableData } from '@/components/data';
import {
    Backbtn,
  ButtonSecondaryOutline,
  FlexBox,
  Heading,
  MyTable,
  QuantityCounter,
  Text
} from '@/components/commoncomponents';

type cartList = {
  id: number;
  title: string;
  img: string;
  price: string;
  subtotal: string;
};

const EditOrderTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const router = useRouter();

  const paginatedData = carttableData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleQuantityChange = (id: number, newQty: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: newQty,
    }));
  };

  const columns = [
    {
        title: "Products",
        dataIndex: "products",
        key: "products",
        render: (_: unknown, record: cartList) => (
            <FlexBox items='items-center'>
                <Button variant="ghost" size="icon" className="hover:bg-transparent cursor-pointer">
                    <img src="/assets/icons/remove.png" alt="Remove" className="h-5 w-5" />
                </Button>
                <div className="flex items-center gap-4">
                    <div className="p-3 border border-[#0C666A] shrink-0">
                    <img src={record.img} className="w-12 h-16 object-contain" alt={record.title} />
                    </div>
                    <Text fontSize='text-[13px]'>{record.title}</Text>
                </div>
            </FlexBox>
        ),
    },
    {
        title: "Price",
        dataIndex: "price",
        key: "price",
        render: (_: unknown, record: cartList) => (
            <Text weight='font-normal' fontSize='text-[13px]'>{record.price}</Text>
        ),
    },
    {
        title: "Quantity",
        dataIndex: "quantity",
        key: "quantity",
        render: (_: unknown, record: cartList) => (
            <QuantityCounter
            value={quantities[record.id] ?? 1}
            onChange={(value) => handleQuantityChange(record.id, value)}
            min={1}
            max={99}
            />
        ),
    },
    {
        title: "Sub-Total",
        dataIndex: "subtotal",
        key: "subtotal",
        render: (_: unknown, record: cartList) => (
            <Text weight='font-normal' fontSize='text-[13px]'>{record.subtotal}</Text>
        ),
    },
  ];

    return (
        <div className="mt-6">
            <Backbtn
                onClick={() => router.push('/checkout')}
                title={`Order Details`}
                className="mb-5"
                childclass='text-xl'
            />
            <MyTable<cartList>
                columns={columns}
                dataSource={paginatedData}
                rowKey="id"
                scroll={{ x: 1300 }}
                tablebody="!bg-transparent"
                rowClass="!border-b border-b-[#353945]"
                pagination={{
                current: currentPage,
                pageSize: pageSize,
                total: carttableData.length,
                onChange: (page, size) => {
                    setCurrentPage(page);
                    setPageSize(size);
                },
                showSizeChanger: true,
                }}
            />
            <FlexBox items='items-center' justify='justify-between' className="mt-4">
                <ButtonSecondaryOutline onClick={() => router.push('/')}>
                    Return to shop
                </ButtonSecondaryOutline>
                <ButtonSecondaryOutline onClick={() => router.push('/confirmmessage')} className='text-white'>
                    Confirm
                </ButtonSecondaryOutline>
            </FlexBox>
        </div>
    );
};

export { EditOrderTable };
