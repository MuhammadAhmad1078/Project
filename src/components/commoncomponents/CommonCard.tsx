import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Rating } from './Rating';
import { DataItem } from '@/types';

interface Props {
  data: DataItem[];
  title?: string;
  gridClass?: string;
  className?: string;
  starSize?: number;
}

const CommonCard:React.FC <Props> = ({data,title,gridClass,className,starSize}) => {
  return (
    <div className={className}>
        {title && (
            <div className='flex items-center mb-5 gap-3'>
                <h3 className='m-0 text-lg font-bold text-[#E6E8EC]'>{title}</h3>
            </div>
        )}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-5 ${gridClass}`}>
            {
                data?.map((items,index)=>
                    <Card className='bg-[#1C1E24] border-[#3F4352]' key={index}>
                        <CardContent>
                            <div className='flex items-center gap-3 mb-1'>
                                <h3 className='font-medium text-[14px] text-white m-0'>
                                    {items?.amount}
                                </h3>
                                {items.rating && (
                                    <Rating value={items.rating} starSize={starSize || 20} />
                                )}
                            </div>
                            <p className='m-0 text-[13px] text-[#9fa4a4] font-normal'>
                                {items?.title}
                            </p>
                        </CardContent>
                    </Card>
                )
            }
        </div>
    </div>
  )
}

export {CommonCard}