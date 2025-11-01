"use client";

import React from "react";
import { CommonCard } from "@/components/commoncomponents";
import { listingsmData } from "@/components/data";
import { InsightLineChart } from "./InsightLineChart";

const InsightListing = () => {

    return (
        <div>    
            <CommonCard
                data={listingsmData}
                className='mb-6'
            />
            <InsightLineChart />
        </div>
    );
};

export { InsightListing };