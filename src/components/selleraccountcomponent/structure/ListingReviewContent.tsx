"use client";

import React from "react";
import { CommonCard } from "@/components/commoncomponents";
import { ListingReviewsDetailCard } from "./ListingReviewsDetailCard";
import { OverviewData, OverviewRating, OverviewTitles, Product } from "@/types";
import { CardDataFunc } from "@/lib/utils";

type propsProduct = {
    data: {
        avgRating: number
        reviewCount: number
        product:  Product | Product[];
    };
}

const ListingReviewContent: React.FC<propsProduct> = ({data}) => {

    const listingData: OverviewData = {
        values: [
            data?.reviewCount || 0,
            data?.avgRating || 0,
        ],
    };

    const productTitles: OverviewTitles = {
        titles: [ 'Total Reviews', 'Average Rating' ],
    };

     const productRating: OverviewRating = {
        rating: [null, data?.avgRating],
    };
    
    const porudctlistingoverview = CardDataFunc(listingData, productTitles, productRating);

    return (
        <div>    
            <CommonCard
                data={porudctlistingoverview}
                className='mb-6'
                starSize={14}
                gridClass="lg:!grid-cols-2"
            />
            <ListingReviewsDetailCard product={data?.product} />
        </div>
    );
};

export { ListingReviewContent };