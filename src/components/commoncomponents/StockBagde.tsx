import React from 'react'
import { FlexBox } from './FlexBox'
import { Text } from './Text'
import { cn } from '@/lib/utils';

interface stockprop {
    title: string;
    titlecolor?: string;
    titlesize?: string;
    className?: string;
    subtitle?: string;
    subtitlecolor?: string;
    subtitlesize?: string;
    subtitleClass?: string;
}

const StockBagde: React.FC<stockprop> = ({
    title='', titlecolor='text-[#16A34A]', titlesize='text-[12px]',
    subtitle='', subtitlecolor='text-white', subtitlesize='text-[12px]',subtitleClass='bg-[#324D3C]',
    className='bg-[#1A392C]'
}) => {
  return (
    <FlexBox items="items-center" gap="gap-2" className={cn('inline-flex w-fit rounded-full p-[4px] px-3',className)}>
        <Text as="span" color={titlecolor} fontSize={titlesize}>{title}</Text>
        {
            subtitle &&
            <Text as="span" color={subtitlecolor} fontSize={subtitlesize} className={cn('rounded-full p-[2px] px-3',subtitleClass)}>{subtitle}</Text>
        }
    </FlexBox>
  )
}

export {StockBagde}