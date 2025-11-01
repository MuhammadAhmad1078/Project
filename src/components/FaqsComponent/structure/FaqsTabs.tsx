'use client'

import { FlexBox, Heading } from '@/components/commoncomponents'
import { exploreData, faqspageData } from '@/components/data'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import { FaqsDetails } from './FaqsDetails'

const FaqsTabs = () => {
    return (
        <Tabs defaultValue="1">
            <FlexBox direction='lg:flex-row flex-col' gap='gap-20'>
                <div className='lg:w-[30%]'>
                    <TabsList className='flex-col h-auto w-full bg-transparent gap-5'> 
                        {
                            faqspageData?.map((btntext,index)=>
                                <TabsTrigger value={btntext?.id.toString()} key={index} className='cursor-pointer flex justify-start gap-5 px-4 py-3 rounded-2xl w-full bg-transparent data-[state=active]:bg-[#2BAEB3] h-14'>
                                    <img src={btntext?.icons} width={40} alt="" />
                                    <Heading type='sectionHeading' title={btntext?.title} subheadClass='!mb-0' />
                                </TabsTrigger>
                            )
                        }
                    </TabsList>
                </div>

                <div className='lg:w-[70%] relative'>
                    {
                        faqspageData?.map((content,i)=>
                            <TabsContent value={content?.id.toString()} key={i}>
                                <FaqsDetails Data={content?.faqs} />
                            </TabsContent>
                        )
                    }
                </div>
            </FlexBox>
        </Tabs>
    )
}

export {FaqsTabs}