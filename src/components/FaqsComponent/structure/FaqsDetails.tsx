'use client'

import React from 'react'
import { FlexBox, Heading, Text } from '@/components/commoncomponents'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

type content = {
    id: number,
    question: string,
    description: string
}

interface faqData {
    Data?: content[]
}

const FaqsDetails: React.FC<faqData> = ({ Data = [] }) => {
    return (
        <Accordion type="multiple" className="w-full ">
            {
                Data?.map((items,index)=>
                    <AccordionItem value={items?.id.toString()} className='border border-[#173D40] mb-4 rounded-sm last:border-b' key={index}>
                        <AccordionTrigger className='ps-4 py-0 group icon-close hover:no-underline'>
                            <FlexBox justify='justify-between' items='items-center' className="w-full">  
                              <Heading className='!font-medium !text-base !m-0'>
                                {String(index + 1).padStart(2, '0')} <span className='pl-4'>{items?.question}</span>
                              </Heading>
                              <FlexBox
                                justify='justify-center'
                                items='items-center'
                                className='h-12 w-12 shrink-0 transition-all duration-200 group-data-[state=open]:bg-[#25A7B0] bg-[#173D40] rounded-br-sm rounded-tr-sm '
                              >
                                <img
                                  src="/assets/icons/plus.png"
                                  width={15}
                                  alt="plus icon"
                                  className="block group-data-[state=open]:hidden"
                                />
                                <img
                                  src="/assets/icons/minus.png"
                                  width={15}
                                  alt="minus icon"
                                  className="hidden group-data-[state=open]:block"
                                />
                              </FlexBox>
                            </FlexBox>
                        </AccordionTrigger>
                        <AccordionContent className='p-4'>
                          <Text className='m-0 ml-10'>
                            {items?.description}
                          </Text>
                        </AccordionContent>
                    </AccordionItem>
                )
            }
        </Accordion>   
    )
}

export {FaqsDetails}