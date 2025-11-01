import React from 'react'
import { Heading, Text } from '@/components/commoncomponents'
import { ProductSliderThumbnail } from '@/components/browseproductcomponent'
import { Separator } from "@/components/ui/separator"
import { TagsData } from '@/components/data'

const PreviewStepContent = () => {

    const data = [
        {
            id: 1,
            url: '/assets/images/ip-1.png'
        },
        {
            id: 2,
            url: '/assets/images/ip-2.png'
        },
        {
            id: 3,
            url: '/assets/images/ip-3.png'
        },
        {
            id: 4,
            url: '/assets/images/ip-4.png'
        },
        {
            id: 5,
            url: '/assets/images/p-4.png'
        },
    ]

    return (
        <div>
            <Heading type='pageHeading' title='Preview '/>
            <ProductSliderThumbnail images={data} />
            <Heading headClass='mt-5' type='pageHeading' title='Apple iPhone 12 MINI - 64GB - NON PTA (FREE CHARGER & COVER) -  Like New Phones (Mobile Phones) - USED PHONES' />
            <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
                <Text color='text-[#777E90]' fontSize='text-xs' weight='font-normal' className='flex items-center gap-2'>
                    Category: <Text color='text-[#E6E8EC]' fontSize='text-[13px]' weight='font-medium'>Electronics</Text>
                </Text>
                <Text color='text-[#777E90]' fontSize='text-xs' weight='font-normal' className='flex items-center gap-2'>
                    Category Type: <Text color='text-[#E6E8EC]' fontSize='text-[13px]' weight='font-medium'>Smart Phone</Text>
                </Text> 
                <Text color='text-[#777E90]' fontSize='text-xs' weight='font-normal' className='flex items-center gap-2'>
                    Brand: <Text color='text-[#E6E8EC]' fontSize='text-[13px]' weight='font-medium'>Apple</Text>
                </Text>
                <Text color='text-[#777E90]' fontSize='text-xs' weight='font-normal' className='flex items-center gap-2'>
                    Availability: <Text color='text-[#2FA766]' fontSize='text-[13px]' weight='font-medium'>In Stock</Text>
                </Text>
                <Text color='text-[#777E90]' fontSize='text-xs' weight='font-normal' className='flex items-center gap-2'>
                    Quantity: <Text color='text-[#E6E8EC]' fontSize='text-[13px]' weight='font-medium'>50</Text>
                </Text>
            </div>
            <div className='my-8 flex items-center gap-3'>
                <Heading type='pageHeading' title='199 UET' headClass='!mb-0 !text-[#2DA5F3]' />
                <Text className='!text-base text-[#777E90] font-normal line-through !mb-0'>250 UET</Text>
                <div className='bg-[#FAD763] py-1 px-3 font-medium text-[#18191D] text-sm rounded-xs'>21% OFF</div>
            </div>
            <Separator className='bg-[#173D40] mb-5' />
            <Heading type='pageHeading' title='Description' headClass='!mb-3' />
            <Text weight='font-normal' className='leading-6'>
                Looking for a compact yet powerful smartphone? The Apple iPhone 12 Mini (64GB) is the perfect choice! Featuring a Super Retina XDR display, the A14 Bionic chip, and dual 12MP cameras, this device delivers fast performance, stunning visuals, and high-quality photography. Its small, lightweight design makes it easy to carry while still offering flagship-level features.
            </Text>
            <Heading type='pageHeading' title='✅ Key Features:' headClass='!mb-3 mt-5' />
            <Text  weight='font-normal' className='mb-2'>
                🔹 64GB Storage – Enough space for apps, photos, and daily tasks
            </Text>
            <Text  weight='font-normal' className='mb-2'>
                🔹 Super Retina XDR Display – Vivid colors & sharp details for an immersive experience
            </Text>
            <Text  weight='font-normal' className='mb-2'>
                🔹 A14 Bionic Chip – Fast processing, smooth multitasking & power efficiency
            </Text>
            <Text  weight='font-normal'>
                🔹 Dual 12MP Cameras – Capture high-quality photos & videos with Night Mode & Deep Fusion
            </Text>
            <Heading type='pageHeading' title='Deliver To' headClass='!mb-3 mt-10' />
            <div className='flex gap-3 flex-wrap items-center'>
                {
                    ['Canada','United Kingdom']?.map((items,index)=>
                        <div className='px-3 py-2 text-xs rounded-sm text-white bg-[#212C2D] border border-[#173D40]' key={index}>
                            {items}
                        </div>
                    )
                }
            </div>
            <Heading type='pageHeading' title='Related Tags' headClass='!mb-3 mt-10' />
            <div className='flex gap-3 flex-wrap items-center'>
                {
                    TagsData?.map((items,index)=>
                        <div className='px-3 py-2 text-xs rounded-sm text-white bg-[#212C2D] border border-[#173D40]' key={index}>
                            {items?.name}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export {PreviewStepContent}