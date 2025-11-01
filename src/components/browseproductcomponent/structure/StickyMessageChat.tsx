import React from 'react'
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { FlexBox, Heading, Text } from '@/components/commoncomponents';

const StickyMessageChat = () => {
    return (
        <Accordion type="multiple" className="w-full">
            <AccordionItem value={'1'} className='border-0 rotate-0'>
                <AccordionTrigger className='p-3 !rounded-t-sm !rounded-b-none group icon-close hover:no-underline bg-[#153D41] justify-between items-center'>
                    <div className='flex gap-3 items-center'>
                        <Avatar>
                            <AvatarImage src="/assets/images/pr.png" className='w-10' />
                            <AvatarFallback>Profile</AvatarFallback>
                        </Avatar>
                        <div>
                            <Heading weight='font-medium' fontSize='text-[15px]'>
                                Andy Smith
                            </Heading>
                            <Text fontSize='text-[13px]' color='text-[#B1B5C3]' className='m-0'>
                                Joined Business Hub in 2021
                            </Text>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='cursor-pointer'>
                            <img src="/assets/icons/message.png" className='w-5' alt="" />
                        </div>
                        <div className='cursor-pointer ps-2 transition-transform duration-200'>
                            <img 
                                src="/assets/icons/caretdw.png" 
                                className='w-5 transform group-data-[state=open]:rotate-180 transition-transform duration-200' 
                                alt="" 
                            />
                        </div>
                    </div>
                </AccordionTrigger>
                <AccordionContent className='p-3 bg-[#23262F] !rounded-b-sm !rounded-t-0'>
                    <div className='max-h-[300px] overflow-y-auto overflow-x-hidden no-scrollbar space-y-3'>
                        {/* Received message (left aligned) */}
                        <FlexBox justify='justify-start'>
                            <div className='max-w-[80%] bg-[#2A303C] text-white p-3 rounded-lg rounded-tl-none'>
                                <Text fontSize='text-[13px]'>Hi there! I&apos;m interested in this item. Is it still available?</Text>
                                <Text fontSize='text-xs' color='text-[#B1B5C3]' className='mt-1'>10:30 AM</Text>
                            </div>
                        </FlexBox>
                        {/* Sent message (right aligned) */}
                        <FlexBox justify='justify-end'>
                            <div className='max-w-[80%] bg-[#153D41] text-white p-3 rounded-lg rounded-tr-none'>
                                <Text fontSize='text-[13px]'>Yes, it&apos;s still available! Would you like to schedule a viewing?</Text>
                                <Text fontSize='text-xs' color='text-[#B1B5C3]' className='mt-1'>10:32 AM</Text>
                            </div>
                        </FlexBox>
                    </div>
                    <div className='flex items-center w-full gap-3 mt-2'>
                        <Input className='bg-white text-[#2A303C] border-none focus-visible:ring-0' placeholder='Hi, is this item still available?' />
                        <Button className='flex items-center justify-center bg-[#153D41] h-10 w-10 p-3 hover:bg-[#1e4d52]'>
                            <img src='/assets/icons/sent.png' className='w-8' />
                        </Button>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export {StickyMessageChat}