"use client"

import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { MyInput, MySelect, MyTable } from "@/components/commoncomponents";

type VariantsItem = {
    id: string;
    available: boolean;
    color: string;
    size: string;
    quantity: number;
    price: number;
};

const ProductVariantTable = () => {
    const [variants, setVariants] = useState<VariantsItem[]>([
            { id: "1", available: true, color: "Yellow", size: "Small", quantity: 200, price: 200 },
            { id: "2", available: false, color: "Red", size: "Medium", quantity: 100, price: 300 },
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);

    const handleChange = (id: string, key: keyof VariantsItem, value: boolean | string | number) => {
            setVariants(prev =>
                prev.map(item =>
                    item.id === id ? { ...item, [key]: value } : item
                )
            );
    };

    const paginatedData = variants.slice(
            (currentPage - 1) * pageSize,
            currentPage * pageSize
    );

    const columns = [
        {
            title: "Availability",
            dataIndex: "available",
            key: "available",
            render: (_: unknown, record: VariantsItem) => (
                <Switch
                    checked={record.available}
                    onCheckedChange={(checked) => handleChange(record.id, "available", checked)}
                    className="!bg-gray-500 data-[state=checked]:!bg-green-500 transition-colors"
                />
            ),
        },
        {
            title: "Color",
            dataIndex: "color",
            key: "color",
            render: (_: unknown, record: VariantsItem) => (
                <MySelect
                    name={`color-${record.id}`}
                    value={record.color}
                    options={[
                        { id: 1, name: "Yellow" },
                        { id: 2, name: "Red" },
                        { id: 3, name: "Blue" },
                    ]}
                    placeholder="Choose color"
                    onChange={(value: string) => handleChange(record.id, "color", value)}
                />
            ),
        },
        {
            title: "Size",
            dataIndex: "size",
            key: "size",
            render: (_: unknown, record: VariantsItem) => (
                <MySelect
                    name={`size-${record.id}`}
                    value={record.size}
                    options={[
                        { id: 1, name: "Small" },
                        { id: 2, name: "Medium" },
                        { id: 3, name: "Large" },
                    ]}
                    placeholder="Choose size"
                    onChange={(value: string) => handleChange(record.id, "size", value)}
                />
            ),
        },
        {
            title: "Quantity",
            dataIndex: "quantity",
            key: "quantity",
            render: (_: unknown, record: VariantsItem) => (
                <MyInput
                    withoutForm
                    name={`quantity-${record.id}`}
                    type="number"
                    value={record.quantity}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleChange(record.id, "quantity", Number(e.target.value))
                    }
                />
            ),
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            width: 200,
            render: (_: unknown, record: VariantsItem) => (
                <div className="flex gap-3 w-full border border-[#2E7A80] items-center">
                    <MyInput
                        withoutForm
                        name={`price-${record.id}`}
                        type="number"
                        value={record.price}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleChange(record.id, "price", Number(e.target.value))
                        }
                        className="w-full border-0"
                    />
                    <MySelect
                        withoutForm
                        name={`token-${record.id}`}
                        options={[{ id: 1, name: "UET" }]}
                        className="w-[100px] border-0 border-l border-[#777E90] rounded-none"
                        placeholder="UET"
                    />
                </div>
            ),
        },
    ];

    return (
        <MyTable<VariantsItem>
            columns={columns}
            dataSource={paginatedData}
            rowKey="id"
            scroll={{ x: 700 }}
            pagination={{
                current: currentPage,
                pageSize,
                total: variants.length,
                onChange: (page: number, size: number) => {
                setCurrentPage(page);
                setPageSize(size);
                },
                showSizeChanger: true,
            }}
        />
    );
};

export { ProductVariantTable };