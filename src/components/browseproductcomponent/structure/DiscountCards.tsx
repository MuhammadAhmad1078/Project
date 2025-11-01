'use client';

import React from 'react';
import { discountproData } from '@/components/data';
import { Button } from '@/components/ui/button';
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // type CarouselApi,
} from "@/components/ui/carousel";
import { FlexBox, Heading, MyCard, Text } from '@/components/commoncomponents';

const DiscountCards = () => {
  // const [api, setApi] = React.useState<CarouselApi>();
  // const [current, setCurrent] = React.useState(0);
  // const [count, setCount] = React.useState(0);

  // React.useEffect(() => {
  //   if (!api) return;

  //   setCount(api.scrollSnapList().length);
  //   setCurrent(api.selectedScrollSnap() + 1);

  //   api.on("select", () => {
  //     setCurrent(api.selectedScrollSnap() + 1);
  //   });
  // }, [api]);

  return (
    <div className='mt-15'>
      <Carousel
        // setApi={setApi}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {discountproData?.map((item, index) => (
            <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/2'>
              <MyCard className='!bg-[#191C1F] !border-0'>
                <FlexBox
                  className='inline-flex p-4'
                  gap='gap-10'
                  justify='justify-center lg:justify-between'
                  direction='lg:flex-row flex-col-reverse'
                  items='items-center'
                >
                  <div className='lg:w-[53%] w-full'>
                    <Heading type='pageHeading' title={item?.title} headClass='text-[2.1vw]' />
                    <Text color='text-[#9fa4a4]' className='my-5'>
                      {item?.desc}
                    </Text>
                    <Button className='bg-[#0C666A] px-8 py-5 rounded-sm text-[13px] inline-flex items-center gap-3 text-white hover:bg-[#25A7B0]'>
                      Shop Now
                      <img src="/assets/icons/ar-lft.png" width={16} alt="arrow" />
                    </Button>
                  </div>
                  <FlexBox className='lg:w-[43%] w-full' justify='justify-center lg:justify-end'>
                    {item?.icon && (
                      <img src={`/assets/images/${item.icon}`} className='w-[220px]' alt="product icon" />
                    )}
                  </FlexBox>
                </FlexBox>
              </MyCard>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export { DiscountCards };
