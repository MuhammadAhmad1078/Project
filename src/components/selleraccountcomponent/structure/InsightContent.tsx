"use client";

import React, { useEffect } from "react";
import { CommonCard, FlexBox, Heading, MyDropdown } from "@/components/commoncomponents";
import { InsightLineChart } from "./InsightLineChart";
import { useLazyQuery } from "@apollo/client";
import { GET_SELLER_INSIGHT } from "@/graphql";
import { OverviewData, OverviewTitles } from "@/types";
import { CardDataFunc } from "@/lib/utils";

const InsightContent = () => {
    const [ loadSights, { data:inSights } ] = useLazyQuery(GET_SELLER_INSIGHT, { fetchPolicy: "cache-and-network" })

    useEffect(()=>{
        loadSights({
            variables: {
                dateRange: {
                    from: new Date(new Date().setDate(new Date().getDate() - 30)).toISOString(),
                    to: new Date().toISOString(),
                }
            }
        })
    },[loadSights])

    const inSightData: OverviewData = {
        values: [
            inSights?.getSellerProductEngagementInsights?.answerChat || 0,
            inSights?.getSellerProductEngagementInsights?.totalViews || 0,
            inSights?.getSellerProductEngagementInsights?.totalLikes || 0,
        ],
    };
    
    const inSightTitles: OverviewTitles = {
        titles: ['Answer to Chat', 'Clicks on Listing', 'Favorite Listing'],
    };

    const insightOverview = CardDataFunc(inSightData, inSightTitles);
    
    return (
        <div> 
            <FlexBox justify='justify-between' items='items-center' gap='gap-3'>
                <Heading type="pageHeading" title="Insight" headClass="!m-0" />
                <MyDropdown
                    defaultLabel="Today"
                    items={[
                        { label: "Today", value: "daily" },
                        { label: "This Week", value: "weekly" },
                        { label: "This Month", value: "monthly" },
                    ]}
                    onSelect={(item) => console.log("Selected:", item)}
                    className="!bg-[#23262F] font-normal !text-[13px]"
                />
            </FlexBox>   
            <CommonCard
                data={insightOverview}
                gridClass="lg:!grid-cols-3"
                className='mt-5 mb-8'
            />
            <InsightLineChart />
        </div>
    );
};

export { InsightContent };