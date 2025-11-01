
import React from 'react'
import { benefitCardData } from '@/components/data'
import { FlexBox, MyCard, Text } from '@/components/commoncomponents'
import Image from 'next/image'

const BenefitCard = () => {
    return (
        <div className='mt-15 grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-5'>
            {
                benefitCardData?.map((items,index)=>
                    <MyCard className='bg-[#152122] border-[#1B5356]' key={index}>
                        <FlexBox gap='gap-5' items='items-center'>
                            <Image src={"/assets/icons/"+items?.icon} width={44} height={44} alt="" />
                            <div>
                                <Text as='div' weight='font-medium' color='text-white'>{items?.title}</Text>
                                <Text as='div' weight='font-normal' fontSize='text-[13px]' color='text-[#9fa4a4]' className='m-0'>{items?.desc}</Text>
                            </div>
                        </FlexBox>
                    </MyCard>
                )
            }
        </div>
    )
}

export {BenefitCard}