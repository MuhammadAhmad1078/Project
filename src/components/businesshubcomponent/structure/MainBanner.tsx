import React from 'react'
import { ButtonOutline, ButtonPrimary, ButtonRounded, FlexBox, Heading } from '@/components/commoncomponents'
import { useRouter } from 'next/navigation'

const MainBanner = () => {

    const router = useRouter()

    return (
        <div className=' mx-auto relative'>
            <div className='grid lg:grid-cols-2 grid-cols-1 items-center'>
                <div className='md:ps-24 py-10 px-4'>
                    <ButtonRounded
                        image='/assets/images/shap.svg'
                    >
                        Your One-Stop Web3 Marketplace
                    </ButtonRounded>
                    <Heading className='!font-[900] !text-3xl md:!text-[56px] mt-2'>
                        Everything You Need, All in One Place  <br />
                        <span className='text-[#00F4FF]'>With Buzz</span>
                    </Heading>
                    <Heading type='sectionHeading' subheadClass='!text-xl font-normal' title='Manage services, shop from multiple vendors, and pay seamlessly with our Web3-based UET token.' />
                    <FlexBox items='items-center' gap='gap-5' className='mt-5'>
                        <ButtonPrimary onClick={()=>router.push('/sellermarketplacehome')}>
                            Explore Services
                        </ButtonPrimary>
                        <ButtonOutline>
                            Browse Products
                        </ButtonOutline>
                    </FlexBox>
                </div>
                <FlexBox justify='justify-end'>
                    <img src="/assets/images/hero-r.png" width={'80%'} alt="" />
                </FlexBox>
            </div>
        </div>
    )
}

export {MainBanner}