import React from 'react'
import { Form } from '@/components/ui/form'
import { useForm } from "react-hook-form"
import { FlexBox, Heading, MyInput } from '@/components/commoncomponents'

interface FormValues {
  discount: string;
}

const DiscountStepContent = () => {
    const form = useForm<FormValues>()

    const onSubmit = (data: FormValues) => {
        console.log('Form data:', data)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FlexBox className='mb-8' items='items-center' gap='gap-1'>
                    <Heading type='pageHeading' title='Discounts ' headClass='!mb-0' /><sub className='text-sm'>(optional)</sub>
                </FlexBox>
                <div className=''>
                    <Heading className='text-sm text-white pb-1 '>Discount</Heading>
                    <div className='flex gap-3 w-full border border-[#777E90] items-center'>
                        <MyInput 
                            withoutForm
                            name="discount" 
                            placeholder="e.g $5" 
                            className='w-full border-0'
                        />
                        <span className='border-l px-2 text-xs text-[#777E90]'>%</span>
                    </div>
                </div>
            </form>
        </Form>
    )
}

export {DiscountStepContent}