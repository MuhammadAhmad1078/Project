import React from 'react';
import MarqueeCommon from '@/components/commoncomponents/MarqueeCommon';
import { chooseData } from '@/components/data';
import { FlexBox, Heading } from '@/components/commoncomponents';

const WhyChooseUs = () => {
    
    const first = chooseData.slice(0,7)
    const second = chooseData.slice(7,13)
    const third = chooseData.slice(13,20)
    const fourth = chooseData.slice(20,26)
    const fifth = chooseData.slice(26,31)

    return (
        <div className='md:w-[88%] w-[95%] mx-auto pt-20'>
            <div className='mb-10 text-center md:w-[700px] mx-auto'>
                <FlexBox gap='gap-2' className='mb-2 flex-wrap' justify='justify-center' >
                    <Heading type='pageHeading' title='Why' headClass='!mb-0 !text-2xl' />
                    <Heading type='pageHeading' title='Choose Us?' headClass='!mb-0 !text-[#00F4FF] !text-2xl' />
                </FlexBox>
                <Heading className='!text-base text-[#B1B5C3]'>
                    We&apos;re not just another platform. We&apos;re a smarter way to shop, sell, or get stuff done. All backed by Web3, speed, and simplicity.
                </Heading>
            </div>
            <FlexBox gap='gap-5' direction='flex-col'>
                <MarqueeCommon
                    data={first.map((items,index)=> <div key={index} className={`marquee-item-${index} mx-2 p-3 px-4 text-sm rounded-lg bg-[#0C666A]`}>{items?.name}</div>)}
                />
                <MarqueeCommon
                    direction='right'
                    data={second.map((items,index)=> <div key={index} className={`marquee-item-${index} mx-2 p-3 px-4 text-sm rounded-lg bg-[#0C666A]`}>{items?.name}</div>)}
                />
                <MarqueeCommon
                    data={third.map((items,index)=> <div key={index} className={`marquee-item-${index} mx-2 p-3 px-4 text-sm rounded-lg bg-[#0C666A]`}>{items?.name}</div>)}
                />
                <MarqueeCommon
                    direction='right'
                    data={fourth.map((items,index)=> <div key={index} className={`marquee-item-${index} mx-2 p-3 px-4 text-sm rounded-lg bg-[#0C666A]`}>{items?.name}</div>)}
                />
                <MarqueeCommon
                    data={fifth.map((items,index)=> <div key={index} className={`marquee-item-${index} mx-2 p-3 px-4 text-sm rounded-lg bg-[#0C666A]`}>{items?.name}</div>)}
                />
            </FlexBox>
        </div>
    );
};

export { WhyChooseUs };
