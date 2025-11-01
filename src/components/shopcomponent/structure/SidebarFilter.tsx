'use client'

import React, { useState } from 'react'
import { Separator } from '@/components/ui/separator'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { accordFilterData } from '@/components/data';
import { SubInnerFilter } from './SubInnerFilter';
import { FlexBox, Heading } from '@/components/commoncomponents';

type options = {
    id: string | number;
    title: string;
}

type FilterItem = {
  id: string | number;
  name: string;
  options?: options[]
};

type SidebarFilterProps = {
  onCategorySelect: (parent: string, sub: string, filter?: FilterItem[]) => void;
};

const SidebarFilter: React.FC<SidebarFilterProps> = ({ onCategorySelect }) => {
    const [selectedSubcategory, setSelectedSubcategory] = useState<{ name: string; filters: FilterItem[] } | null>(null)

    const handleFilterClick = (parent: string, sub: string, filter: FilterItem[]) => {
        setSelectedSubcategory({ name: sub, filters: filter })
        onCategorySelect(parent, sub, filter)
    }

    return (
        <div className='overflow-y-auto max-h-[calc(100vh-50px)] scroll-smooth pr-2 custom-scrollbar'>
            {
                selectedSubcategory && <SubInnerFilter selectedfilter = {selectedSubcategory} />
            }
            <div>
                <Heading fontSize='text-base' weight='font-medium' className='mb-4'>
                    Categories
                </Heading>
                <Separator className='bg-[#777E90] my-5' />
                <Accordion type="multiple" className="w-full ">
                    {accordFilterData?.map((items, index) =>
                        <AccordionItem value={items?.id.toString()} className='border-0 mb-2 rounded-sm' key={index}>
                            <AccordionTrigger className='p-0 group icon-close hover:no-underline '>
                                <FlexBox items='items-center' justify='justify-between' className=' rounded-sm p-3 w-full group-data-[state=open]:bg-[#003230]'>
                                    <Heading weight='font-medium' fontSize='text-base' className='m-0'>
                                        {items?.name}
                                    </Heading>
                                    <img
                                        src="/assets/icons/caret-left.png"
                                        width={15}
                                        alt="plus icon"
                                        className="block group-data-[state=open]:rotate-90"
                                    />
                                </FlexBox>
                            </AccordionTrigger>
                            <AccordionContent className='p-3 bg-[#23262F] mt-2 rounded-sm'>
                                {items?.content?.map((content, c) =>
                                    <FlexBox
                                        items='items-center'
                                        key={c}
                                        className='py-2 group hover:text-[#46CBD0] transition-all cursor-pointer'
                                        onClick={() => handleFilterClick(items.name, content.type, content.filter)}
                                    >
                                        {content.type}
                                        <span className='transition-all group-hover:opacity-100 opacity-0 group-hover:translate-x-2 -translate-x-0'>
                                            <img src="/assets/icons/arr-fr.png" className='w-6' alt="" />
                                        </span>
                                    </FlexBox>
                                )}
                            </AccordionContent>
                        </AccordionItem>
                    )}
                </Accordion>
            </div>
        </div>
    )
}

export { SidebarFilter }
