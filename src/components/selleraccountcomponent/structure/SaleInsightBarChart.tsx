"use client";

import React from "react";
import { FlexBox, Heading, MyCard, MyDropdown } from "@/components/commoncomponents";
import { saleinsightbarData } from "@/components/data";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SaleInsightBarChart = () => {
    return (
        <MyCard className='bg-[#1C1E24] border-[#3F4352] mt-8'>
            <div>
                <FlexBox justify="justify-between" gap="gap-3" items="items-center">
                    <Heading type="pageHeading" title="Sales Insight" headClass="!m-0" />
                    <MyDropdown
                        defaultLabel="Daily"
                        items={[
                            { label: "Daily", value: "daily" },
                            { label: "Weekly", value: "weekly" },
                            { label: "Monthly", value: "monthly" },
                        ]}
                        onSelect={(item) => console.log("Selected:", item)}
                        className="!bg-[#23262F] font-normal !text-[13px] text-white"
                    />
                </FlexBox>
                <div className="w-full h-[400px] mt-5">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={saleinsightbarData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#2D3039" vertical={false} />
                            <XAxis dataKey="date" tick={{ fill: "#cfcfcf", fontSize: 12 }} />
                            <YAxis tick={{ fill: "#cfcfcf", fontSize: 12 }} />
                            <Tooltip
                                contentStyle={{
                                backgroundColor: "#2D3039",
                                border: "none",
                                fontSize: "13px",
                                fontWeight: "normal",
                                color: "#ffffff",
                                }}
                                labelStyle={{
                                color: "#ffffff",
                                fontSize: "13px",
                                fontWeight: "normal",
                                }}
                                cursor={{ fill: "rgba(255,255,255,0.1)" }}
                            />
                            <Bar dataKey="value" fill="#20C6B7" radius={[6, 6, 0, 0]} barSize={20} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </MyCard>
    );
};

export { SaleInsightBarChart };
