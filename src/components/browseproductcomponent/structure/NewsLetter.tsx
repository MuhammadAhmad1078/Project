import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { FlexBox, Heading } from '@/components/commoncomponents'

const NewsLetter = () => {
    return (
        <div className='mt-20 flex flex-col w-full items-center gap-10'>
            <div className='text-center'>
                <Heading type='pageHeading' title='Stay in touch with us' headClass='!mb-3 !text-2xl' weight='!font-bold' />
                <Heading type='pageHeading' title='Receive the latest updates about our products & promotions' weight='!font-normal' headClass='!mb-3 !text-xl' />
            </div>
            <FlexBox className='w-full max-w-lg space-x-2 px-3' justify='justify-center'>
                <Input type="email" placeholder="Your email" className='border-[#4E5562] h-[44px]' />
                <Button type="submit" className='bg-[#0C666A] hover:bg-[#25A7B0] h-[43px] px-6'>Subscribe</Button>
            </FlexBox>
        </div>
    )
}

export {NewsLetter}