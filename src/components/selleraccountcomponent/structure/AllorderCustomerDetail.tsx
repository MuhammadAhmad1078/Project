import React from 'react';
import { Heading, MyCard, Text } from '@/components/commoncomponents';
import { ordercustomerData } from '@/components/data';

interface Props {
    title: string;
}

const AllorderCustomerDetail:React.FC <Props> = ({title}) => {
    return (
        <div className='mt-5'>
            <Heading type='pageHeading' title={title} />
            <MyCard className='border-[#173D40] bg-transparent'>
                <div className={`grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5`}>
                    {
                        ordercustomerData?.map((items,index)=>
                            <div key={index}>
                                <Text color='text-[#777E90]' fontSize='text-sm'>{items.title}</Text>
                                <Text fontSize='text-[13px]' color='text-white'>{items.subtitle}</Text>
                            </div>
                        )
                    }
                </div>
            </MyCard>
        </div>
    );
};

export { AllorderCustomerDetail };
