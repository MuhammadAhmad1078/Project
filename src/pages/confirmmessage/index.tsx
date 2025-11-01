import React from 'react'
import { ButtonSecondary, ButtonSecondaryOutline, FlexBox, Heading } from '@/components/commoncomponents'

const ConfirmMessagePage = () => {

    return (
        <div className='bg-[#081516] pb-20 pt-[30px]'>
            <div className=' md:w-[90%] w-[95%] mx-auto mt-30'>
                <div className='lg:w-[600px] mx-auto my-16'>
                    <FlexBox direction='flex-col' gap='space-y-4' items='items-center' className='text-center'>
                        <img src="/assets/icons/checkcircle.png" className='w-20' alt="" />
                        <Heading type='pageHeading' title='Your order is successfully place' headClass='!text-2xl' />
                        <div className='flex justify-center gap-5 mt-3'>
                            <ButtonSecondaryOutline className='inline-flex items-center gap-3 justify-center'>
                                <img src="/assets/icons/stack.png" width={20} alt="" /> Return to Home
                            </ButtonSecondaryOutline>
                            <ButtonSecondary className='inline-flex items-center gap-3 justify-center'>
                                Continue shoping <img src="/assets/icons/ar-lft.png" width={20} alt="" />
                            </ButtonSecondary>
                        </div>
                    </FlexBox>
                </div>
            </div>
        </div>
    )
}

export default ConfirmMessagePage