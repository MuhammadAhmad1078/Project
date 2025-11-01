import React from 'react'
import { AboutUs, AllServicesProduct, ExploreCategory, Faqs, MainBanner, WhyChooseUs } from '@/components/businesshubcomponent'

const UeBusinessHub = () => {
  return (
    <div className="pt-[80px]">
        <div style={{background:'url(/assets/images/hero-sec.svg)'}} className="bg-cover bg-center bg-no-repeat relative pb-20">
          <MainBanner />
          <AllServicesProduct />
        </div>
        <ExploreCategory />
        <div className='bg-[#081516]'>
          <WhyChooseUs />
          <AboutUs />
          <Faqs/>
        </div>
    </div>
  )
}

export default UeBusinessHub