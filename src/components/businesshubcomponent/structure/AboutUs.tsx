import React from 'react';
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { testimonialData } from '@/components/data';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FlexBox, Heading, MyCard, Text } from '@/components/commoncomponents';

const AboutUs = () => {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
    
    React.useEffect(() => {
        if (!api) {
        return
        }
    
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
    
        api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <div className='md:w-[88%] w-[95%] mx-auto pt-40'>
            <div className='mb-10 text-center md:w-[700px] mx-auto'>
                <FlexBox gap='gap-2' className='mb-2 flex-wrap' justify='justify-center' >
                    <Heading type='pageHeading' title='What Client Say' headClass='!mb-0 !text-2xl' />
                    <Heading type='pageHeading' title='About Us?' headClass='!mb-0 !text-[#00F4FF] !text-2xl' />
                </FlexBox>
                <Heading className='!text-base text-[#B1B5C3]'>
                    We&apos;re not just another platform. We&apos;re a smarter way to shop, sell, or get stuff done. All backed by Web3, speed, and simplicity.
                </Heading>
            </div>
            <div className="">
                <Carousel setApi={setApi} className=""
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}
                >
                    <CarouselContent>
                    {testimonialData?.map((items, index) => (
                        <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
                            <MyCard
                                className='!bg-[#0A1B1C] !border-0 text-white'
                                header={
                                    <FlexBox gap='gap-5' items='items-center'>
                                        <Avatar className='w-12 h-12'>
                                            <AvatarImage src={"/assets/images/"+items?.img} />
                                            <AvatarFallback>Testimonial image</AvatarFallback>
                                        </Avatar>
                                        <Heading type='sectionHeading' title={items?.title} subheadClass='!mb-0 !font-normal' />
                                    </FlexBox>
                                }
                                footer={
                                    <FlexBox justify='justify-between' items='items-center' className='w-full'>
                                        <FlexBox gap='gap-3' items='items-center'>
                                            <div>
                                                <img src="/assets/icons/star-g.png" width={20} alt="" />
                                            </div>
                                            <p className='m-0 text-[#697374] text-sm'>
                                                {items?.rate}/05
                                            </p>
                                        </FlexBox>
                                        <Text color='text-[#697374]'>
                                            {items?.date}
                                        </Text>
                                    </FlexBox>
                                }
                            >
                                <Text className='!mb-0 !font-normal' >
                                    {
                                        items?.desc
                                    }
                                </Text>
                            </MyCard>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                </Carousel>
                <FlexBox justify='justify-center' gap='gap-2' className="py-4">
                    {Array.from({ length: count }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => api?.scrollTo(index)}
                            className={`h-4 w-4 border border-[#D9D9D9] rounded-full transition-all ${current === index + 1 ? 'bg-[#D9D9D9]' : null}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </FlexBox>
            </div>
        </div>
    );
};

export { AboutUs };