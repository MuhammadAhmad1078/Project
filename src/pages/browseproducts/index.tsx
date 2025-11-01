import React from 'react'
import { BenefitCard, DiscountCards, MainSlideBanner, PopularProduct, ShopByCategory } from '@/components/browseproductcomponent'

const BrowseProducts = () => {
  
  return (
    <div className='bg-[#081516] pb-20 pt-[120px]'>
      <div className=' md:w-[90%] w-[95%] mx-auto '>
        <MainSlideBanner />
        <DiscountCards />
        <BenefitCard />
        <ShopByCategory />      
        <DiscountCards />
        <PopularProduct />
        <DiscountCards />
      </div>
    </div>
  )
}

export default BrowseProducts