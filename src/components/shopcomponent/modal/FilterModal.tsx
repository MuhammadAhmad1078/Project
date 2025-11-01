import React from 'react'
import { SidebarFilter } from '../structure';
import { FlexBox, Heading, MyDrawer } from '@/components/commoncomponents';


interface Props {
    open: boolean;
    onClose: () => void;
    onCategorySelect: (parent: string, sub: string) => void
}

const FilterModal: React.FC<Props> = ({open,onClose,onCategorySelect }) => {
    return ( 
        <div className='lg:hidden block'>
            <MyDrawer
                open={open}
                onClose={onClose}
                className='rounded-t-xl'
                title={
                    <FlexBox gap='gap-2' items='items-center'>
                        <img src="/assets/icons/filter.png" width={30} alt="" /> 
                        <Heading type='pageHeading' title='Filter' headClass='!text-xl !mb-0' />
                    </FlexBox>
                }
            >
                <SidebarFilter onCategorySelect={onCategorySelect} />
            </MyDrawer>
        </div>
    )
}

export {FilterModal}