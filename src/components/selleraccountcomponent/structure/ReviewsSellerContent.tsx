"use client";

import React, { useEffect } from "react";
import { CommonCard, FlexBox, Heading, MyDropdown } from "@/components/commoncomponents";
import { ListingReviewsDetailCard } from "./ListingReviewsDetailCard";
import { useLazyQuery } from "@apollo/client";
import { GET_MY_PRODUCT_REVIEW } from "@/graphql";
import { OverviewData, OverviewRating, OverviewTitles } from "@/types";
import { CardDataFunc } from "@/lib/utils";

const ReviewsSellerContent = () => {
    
    const [ loadData, { data } ] = useLazyQuery(GET_MY_PRODUCT_REVIEW, { fetchPolicy: "cache-and-network" })

    useEffect(()=>{
        loadData()
    }, [ loadData ])

    const listingData: OverviewData = {
        values: [
            data?.getMyProductReviewsOverview?.reviewCount || 0,
            data?.getMyProductReviewsOverview?.averageRating || 0,
        ],
    };

    const productTitles: OverviewTitles = {
        titles: [ 'Total Reviews', 'Average Rating' ],
    };
    
    const productRating: OverviewRating = {
        rating: [null, data?.getMyProductReviewsOverview?.averageRating],
    };
    
    const porudctlistingoverview = CardDataFunc(listingData, productTitles, productRating);

    return (
        <div>   
            <FlexBox justify='justify-between' items='items-center' gap='gap-3'>
                <Heading type="pageHeading" title="Overview" headClass="!m-0" />
                <MyDropdown
                    defaultLabel="Daily"
                    items={[
                        { label: "Daily", value: "daily" },
                        { label: "Weekly", value: "weekly" },
                        { label: "Monthly", value: "monthly" },
                    ]}
                    onSelect={(item) => console.log("Selected:", item)}
                    className="!bg-[#23262F] font-normal !text-[13px]"
                />
            </FlexBox>
            <CommonCard
                data={porudctlistingoverview}
                className='my-6'
                starSize={14}
                gridClass="lg:!grid-cols-2"
            />
            <div>
                <Heading type="pageHeading" title="All Reviews"/>
                <ListingReviewsDetailCard product={data?.getMyProductReviewsOverview?.products} />
            </div>
        </div>
    );
};

export { ReviewsSellerContent };