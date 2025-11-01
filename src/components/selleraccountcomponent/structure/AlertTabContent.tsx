"use client";

import React from "react";
import { FlexBox, Heading, MyDropdown, Text } from "@/components/commoncomponents";
import { Separator } from "@/components/ui/separator"
import { alertsellerData } from "@/components/data";


const AlertTabContent = () => {

    return (
        <div>  
            <FlexBox justify='justify-between' items='items-center' gap='gap-3' className="mb-5">
                <Heading type="pageHeading" title="Alert" headClass="!m-0" />
                <MyDropdown
                    defaultLabel="Daily"
                    items={[
                        { label: "Daily", value: "daily" },
                        { label: "Weekly", value: "weekly" },
                        { label: "Monthly", value: "monthly" },
                    ]}
                    onSelect={(item) => console.log("Selected:", item)}
                    className="!bg-[#23262F] font-normal !text-[13px]"
                />
            </FlexBox>
            <div className="overflow-y-auto h-[500px] overflow-x-hidden no-scrollbar">
                {
                    alertsellerData?.map((items,index)=>
                        <div className="mb-4" key={index}>
                            <Text color='text-white' weight="font-medium" className="mb-5">{items?.date}</Text>
                            {
                                items?.content?.map((list,i)=>
                                    <div key={i}>
                                        <div className="px-4" >
                                            <FlexBox justify="justify-between" items="items-center" className="mb-1"> 
                                                <Text color="text-white" weight="font-medium" className="m-0">{list?.title}</Text>
                                                <Text fontSize="text-xs" color="text-[#A4A4A4]" className="m-0">{list?.date}</Text>
                                            </FlexBox>
                                            <Text fontSize="text-[13px]" color="text-[#A4A4A4]">
                                                {list?.desc}
                                            </Text>
                                        </div>
                                        <Separator className='bg-[#353945] my-3' />
                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export { AlertTabContent };