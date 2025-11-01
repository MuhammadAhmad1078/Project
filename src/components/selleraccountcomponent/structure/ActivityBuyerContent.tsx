import React from 'react'
import { CommonCard, FlexBox, MyTab } from '@/components/commoncomponents'
import { activity, ReviewsData } from '@/components/data'
import { ActivityBuyerLineChart } from './ActivityBuyerLineChart'
import { ActivityBuyerFavoriteTab } from './ActivityBuyerFavoriteTab'
import { ActivityBuyerReviewsTab } from './ActivityBuyerReviewsTab'

const ActivityBuyerContent = () => {

  const tabItems = [
    {
      key: "1",
      name: "Favorite Listing",
      content: <ActivityBuyerFavoriteTab />,
    },
    {
      key: "2",
      name: "Reviews",
      content: <ActivityBuyerReviewsTab reviews={ReviewsData} />
    },
  ];
  return (
    <FlexBox direction='flex-col' gap='gap-6'>
      <CommonCard data={activity} gridClass='lg:!grid-cols-3' title='Activity' />
      <ActivityBuyerLineChart />
      <MyTab
        tabs={tabItems}
        defaultKey="1"
        classhead="data-[state=active]:bg-[#0C666A] data-[state=active]:border-[#0C666A] bg-transparent border-[#353945]"
      />
    </FlexBox>
  )
}

export {ActivityBuyerContent}