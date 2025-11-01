"use client";

import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ButtonSecondary, MySelect } from "@/components/commoncomponents";
import { categories } from "@/shared";
// import { priceRadio } from "@/components/data";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from '@/components/ui/input';

type options = {
    id: string | number;
    title: string;
};

type FilterItem = {
    id: string | number;
    name: string;
    options?: options[];
};

type SelectedFilter = {
    name: string;
    filters: FilterItem[];
};

type Props = {
    selectedfilter: SelectedFilter;
};

const SubInnerFilter: React.FC<Props> = ({ selectedfilter }) => {
    const [selectedBrands, setSelectedBrands] = useState<(string | number)[]>([]);
    const [range, setRange] = useState<[number, number]>([10, 90]);
    // const [selectedPrice, setSelectedPrice] = useState<string>(priceRadio[0]);

    const handleChange = (value: string | number, checked: boolean) => {
        setSelectedBrands((prev) =>
            checked ? [...prev, value] : prev.filter((b) => b !== value)
        );
        console.log("value", value);
    };

    return (
        <div className="mb-15">
            <h2 className="text-white text-base font-medium mb-4">Category Type</h2>
            <Separator className="bg-[#777E90] my-5" />
            <MySelect
                withoutForm
                name="category"
                className="border border-[#3F4352] w-full bg-transparent min-h-[40px] rounded-sm"
                placeholder="All Categories"
                options={categories}
            />
            <h2 className="text-white text-base font-medium mb-4 mt-8">Filter</h2>
            <Separator className="bg-[#777E90] my-5" />
            <Accordion type="multiple" className="w-full">
                {selectedfilter?.filters.map((item) =>
                    item?.name === 'Price Range' ? (
                        <AccordionItem value={item?.id.toString()} className="border-0 mb-2 rounded-sm" key={item?.id}>
                            <AccordionTrigger className="p-0 group icon-close hover:no-underline ">
                                <div className="flex items-center rounded-sm p-3 justify-between w-full group-data-[state=open]:bg-[#003230]">
                                    <h3 className="font-medium text-base m-0">
                                        <span>Price Range</span>
                                    </h3>
                                    <img
                                        src="/assets/icons/caret-left.png"
                                        width={15}
                                        alt="plus icon"
                                        className="block group-data-[state=open]:rotate-90"
                                    />
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="p-3 bg-[#23262F] mt-2 rounded-sm">
                                <div className="text-white">
                                    <div className="flex justify-between gap-4 mt-2 mb-3">
                                        <Input
                                            type="number"
                                            value={range[0]}
                                            onChange={(e) => setRange([+e.target.value, range[1]])}
                                            className="bg-transparent border-[#777E90] rounded px-3 py-2 w-full text-white placeholder:text-[#777E90]"
                                            placeholder="Min price"
                                        />
                                        <Input
                                            type="number"
                                            value={range[1]}
                                            onChange={(e) => setRange([range[0], +e.target.value])}
                                            className="bg-transparent border-[#777E90] rounded px-3 py-2 w-full text-white placeholder:text-[#777E90]"
                                            placeholder="Max price"
                                        />
                                    </div>
                                    <ButtonSecondary className="w-full !h-[38px] bg-[#173D40] border-[#173D40] hover:!bg-[#173D40]">
                                        Apply
                                    </ButtonSecondary>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ) : (
                        <AccordionItem value={item?.id.toString()} className="border-0 mb-2 rounded-sm" key={item?.id}>
                            <AccordionTrigger className="p-0 group icon-close hover:no-underline ">
                                <div className="flex items-center rounded-sm p-3 justify-between w-full group-data-[state=open]:bg-[#003230]">
                                    <h3 className="font-medium text-base m-0">
                                        <span>{item?.name}</span>
                                    </h3>
                                    <img
                                        src="/assets/icons/caret-left.png"
                                        width={15}
                                        alt="plus icon"
                                        className="block group-data-[state=open]:rotate-90"
                                    />
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="p-3 bg-[#23262F] mt-2 rounded-sm">
                                {item?.options?.map((option) => (
                                    <div key={option.id} className="flex items-center space-x-2 mb-2">
                                        <Checkbox
                                            id={`${item.id}-${option.id}`}
                                            checked={selectedBrands.includes(option.id)}
                                            onCheckedChange={(checked) => handleChange(option.id, !!checked)}
                                            className="h-4 w-4 rounded border-1 border-white data-[state=checked]:bg-[#0C666A] data-[state=checked]:border-[#0C666A]"
                                        />
                                        <label
                                            htmlFor={`${item.id}-${option.id}`}
                                            className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            {option.title}
                                        </label>
                                    </div>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    )
                )}
            </Accordion>
        </div>
    );
};

export { SubInnerFilter };