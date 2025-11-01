import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqsData } from '@/components/data';
import { FlexBox, Heading, Text } from '@/components/commoncomponents';

const Faqs = () => {
  return (
    <div className='md:w-[88%] w-[95%] mx-auto pt-40 pb-30 gradient-bg'>
      <div className='mb-10 text-center md:w-[700px] mx-auto'>
        <FlexBox gap='gap-2' className='mb-2 flex-wrap' justify='justify-center' >
          <Heading type='pageHeading' title='Frequently Asked' headClass='!mb-0 !text-2xl' />
          <Heading type='pageHeading' title='Questions' headClass='!mb-0 !text-[#00F4FF] !text-2xl' />
        </FlexBox>
        <Heading className='!text-base text-[#B1B5C3]'>
          Whether you are here to sell, shop, or book a service. We have answered the stuff you are probably wondering about.
        </Heading>
      </div>

      <FlexBox direction='md:flex-row flex-col' gap='gap-20' items='items-center'>
        <div className='md:w-[60%] w-full'>
          <Accordion type="multiple" className="w-full ">
            {
                faqsData?.map((items,index)=>
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
                            {items?.desc}
                          </Text>
                        </AccordionContent>
                    </AccordionItem>
                )
            }
          </Accordion>
        </div>
        <div className='md:w-[40%] w-full'>
            <img src="/assets/images/faqs.png" className='w-[90%]' alt="" />
        </div>
      </FlexBox>
    </div>
  );
};

export { Faqs };
