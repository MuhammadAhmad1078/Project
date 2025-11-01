import React, {useEffect} from 'react'
import { CommonCard, FlexBox, Heading, MyDropdown } from '@/components/commoncomponents'
import { SaleInsightBarChart } from './SaleInsightBarChart'
import { useLazyQuery } from '@apollo/client'
import { GET_PRODUCT_LISTING_OVERVIEW, GET_SELLER_INSIGHT, GET_USER_SUMMARY } from '@/graphql'
import { OverviewData, OverviewTitles } from '@/types'
import { CardDataFunc } from '@/lib/utils'

const DashboardSellerOverview = () => {
    const [ loadSummary, { data:summary } ] = useLazyQuery(GET_USER_SUMMARY, { fetchPolicy: "cache-and-network" })
    const [ loadProductListing, { data:listing } ] = useLazyQuery(GET_PRODUCT_LISTING_OVERVIEW, { fetchPolicy: "cache-and-network" })
    const [ loadSights, { data:inSights } ] = useLazyQuery(GET_SELLER_INSIGHT, { fetchPolicy: "cache-and-network" })

    useEffect(()=>{
        loadSummary()
        loadProductListing()
    }, [ loadProductListing, loadSummary ])
    
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

    const summaryData: OverviewData = {
        values: [
            summary?.getUserSalesSummary?.totalSale || 0,
            summary?.getUserSalesSummary?.monthlySale || 0,
            summary?.getUserSalesSummary?.todaySale || 0,
        ],
    };
    
    const listingData: OverviewData = {
        values: [
            listing?.getProductListingOverview.totalListing || 0,
            listing?.getProductListingOverview.activeListing || 0,
            listing?.getProductListingOverview.outOfStock || 0,
        ],
    };
    
    const inSightData: OverviewData = {
        values: [
            inSights?.getSellerProductEngagementInsights?.answerChat || 0,
            inSights?.getSellerProductEngagementInsights?.totalViews || 0,
            inSights?.getSellerProductEngagementInsights?.totalLikes || 0,
        ],
    };
    const summaryTitles: OverviewTitles = {
        titles: ['Total Sales', 'This Month Sale', 'Today Sales'],
    };

    const productTitles: OverviewTitles = {
        titles: ['Total Listings', 'Active Listings', 'Out of Stock Listings'],
    };

    const inSightTitles: OverviewTitles = {
        titles: ['Answer to Chat', 'Clicks on Listing', 'Favorite Listing'],
    };

    const summaryOverview = CardDataFunc(summaryData, summaryTitles);
    const porudctlistingoverview = CardDataFunc(listingData, productTitles);
    const insightOverview = CardDataFunc(inSightData, inSightTitles);

    return (
        <div>
            <CommonCard data={summaryOverview} gridClass='lg:!grid-cols-3' title='Overview' />
            <SaleInsightBarChart />
            <CommonCard data={porudctlistingoverview} gridClass='lg:!grid-cols-3' title='Listing Overview' className='mt-8' />
            <div className='mt-8'>
                <FlexBox justify='justify-between' items='items-center' gap='gap-3'>
                    <Heading type="pageHeading" title="Insight" headClass="!m-0" />
                    <MyDropdown
                        defaultLabel="Daily"
                        items={[
                            { label: "Today", value: "daily" },
                            { label: "This Week", value: "weekly" },
                            { label: "This Month", value: "monthly" },
                        ]}
                        onSelect={(item) => console.log("Selected:", item)}
                        className="!bg-[#23262F] font-normal !text-[13px]"
                    />
                </FlexBox>
                <CommonCard data={insightOverview} gridClass='lg:!grid-cols-3'  className='mt-5' />
            </div>
        </div>
    )
}

export {DashboardSellerOverview}