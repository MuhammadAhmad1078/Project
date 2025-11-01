'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from '@/components/ui/carousel'
interface imageData {
  id: number;
  url: string;
}
interface ProductCarouselProps {
  images?: imageData[]
}

const ProductSliderThumbnail: React.FC<ProductCarouselProps> = ({ images = [] }) => {
  const [current, setCurrent] = useState(0)
  const [api, setApi] = useState<CarouselApi | null>(null)

  useEffect(() => {
    if (!api) return

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", handleSelect)
    return () => {
      api.off("select", handleSelect)
    }
  }, [api])

  const goToSlide = (index: number) => {
    setCurrent(index)
    api?.scrollTo(index)
  }

  return (
      <div className="relative">
          <Carousel setApi={setApi}>
            <CarouselPrevious className="absolute left-0 lg:top-[116%] top-[120%] z-10 bg-[#3F4352] hover:bg-[#3F4352] hover:text-white" />
            <CarouselNext className="absolute right-0 lg:top-[116%] top-[120%] z-10 bg-[#3F4352] hover:bg-[#3F4352] hover:text-white" />
            <CarouselContent>
              {images?.map((item, index) => (
                <CarouselItem key={index} data-slide={index} >
                  <div className='relative border border-[#173D40] rounded-lg mx-2'>
                    <img src='/assets/icons/wishlist-ic.png' width={30} height={30} alt='wish icon' className='absolute top-5 right-5' />
                    <img
                      src={item.url}
                      alt={`Product ${index + 1}`}
                      className="w-[400px] h-[400px] max-w-[500px] mx-auto rounded-xl object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="flex gap-2 mt-4 mx-4 justify-center md:justify-center overflow-x-auto no-scrollbar">
            {images?.map((item, index) => (
                <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`flex-shrink-0 w-32 h-32 md:w-32 md:h-32 lg:w-24 lg:h-24 p-1 md:p-2 rounded-md border-2 border-[#173D40]  ${
                    index === current ? 'bg-[#04282A]' : 'bg-transparent'
                    }`}
                >
                <Image
                    src={item.url}
                    alt={`Thumbnail ${index + 1}`}
                    width={64}
                    height={64}
                    className="object-contain w-full h-full rounded"
                />
              </button>
            ))}
        </div>
      </div>
  )
}

export { ProductSliderThumbnail }