import React, { useEffect } from 'react'
import { CommonCard } from '@/components/commoncomponents'
import { useLazyQuery } from '@apollo/client'
import { GET_BUYER_INSIGHT, GET_BUYER_ORDER } from '@/graphql'
import { OverviewData, OverviewTitles } from '@/types'
import { CardDataFunc } from '@/lib/utils'

const DashboardBuyerContent = () => {

  const [ loadOrder, { data:order } ] = useLazyQuery(GET_BUYER_ORDER, { fetchPolicy: "cache-and-network" })
  const [ loadSights, { data:activity } ] = useLazyQuery(GET_BUYER_INSIGHT, { fetchPolicy: "cache-and-network" })
  
  useEffect(()=>{
      loadSights()
      loadOrder()
  },[loadSights, loadOrder])

  const orderData: OverviewData = {
      values: [
          order?.getBuyerOrders?.totalCount || 0,
          order?.getBuyerOrders?.completedOrdersCount || 0,
          order?.getBuyerOrders?.cancelOrderCount || 0,
      ],
  };

  const inSightData: OverviewData = {
      values: [
          activity?.getSellerProductEngagementInsights?.totalLikes || 0,
          activity?.getSellerProductEngagementInsights?.totalReviews || 0,
          activity?.getSellerProductEngagementInsights?.answerChat || 0,
      ],
  };
  
  const orderTitles: OverviewTitles = {
      titles: ['Total Orders', 'Completed Orders', ' Cancelled Orders'],
  };

  const inSightTitles: OverviewTitles = {
      titles: ['Liked Listings', 'Reviews Given', 'Answer to Chat'],
  };

  const orderOverview = CardDataFunc(orderData, orderTitles);
  const activityOverview = CardDataFunc(inSightData, inSightTitles);


  return (
    <div>
        <CommonCard data={orderOverview} gridClass='lg:!grid-cols-3' title='Overview' />
        <CommonCard data={activityOverview} gridClass='lg:!grid-cols-3' title='Activity' className='mt-8' />
    </div>
  )
}

export {DashboardBuyerContent}