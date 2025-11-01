import React from 'react'
import { Form } from '@/components/ui/form'
import { useForm } from "react-hook-form"
import { FlexBox, Heading, MyInput, MySelect } from '@/components/commoncomponents'
import { RadioGroup } from '@/components/ui/radio-group'
import RadioBtn from '@/components/commoncomponents/RadioBtn'

interface FormValues {
  category: string;
  categoryType: string;
  token: string;
  availability: string;
  currency: string;
  acceptedToken: string;
}

const PricingAndShipping = () => {
    const form = useForm<FormValues>()

    const onSubmit = (data: FormValues) => {
        console.log('Form data:', data)
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <Heading type='pageHeading' title='Pricing & Shipping' headClass='!mb-8' />
                    <div className='grid grid-cols-1 gap-5'>
                        <div className=''>
                            <Heading className='text-sm text-white pb-1'>Price</Heading>
                            <div className='flex gap-3 w-full border border-[#2E7A80] items-center'>
                                <MyInput 
                                    withoutForm
                                    name="price" 
                                    placeholder="e.g $5" 
                                    className='w-full border-0'
                                />
                                <MySelect 
                                    withoutForm
                                    name="token"
                                    options={[
                                        {
                                            id: 1,
                                            name: 'UET'
                                        }
                                    ]}
                                    value={form.watch("token")}
                                    className='w-[100px] border-0 border-l border-[#777E90] rounded-none'
                                    placeholder='UET'
                                />
                            </div>
                        </div>
                        <div className=''>
                            <Heading className='text-sm text-white pb-1 '>Discount (optional)</Heading>
                            <div className='flex gap-3 w-full border border-[#2E7A80] items-center'>
                                <MyInput 
                                    withoutForm
                                    name="discount" 
                                    placeholder="e.g $5" 
                                    className='w-full border-0'
                                />
                                <span className='border-l px-2 text-xs text-[#777E90]'>%</span>
                            </div>
                        </div>
                        <FlexBox direction='flex-col' gap='gap-2'>
                            <Heading className='text-sm text-white'>
                                Shipping Rate
                            </Heading>
                            <RadioGroup defaultValue="flateRate" className='flex gap-5 items-center mb-3'>
                                <RadioBtn 
                                    value="flateRate"
                                    id='r1'
                                    title="Flat Rate"
                                    labelclass='pt-1'
                                />
                                <RadioBtn 
                                    value="free"
                                    id='r2'
                                    title="Free"
                                    labelclass='pt-1'
                                />
                            </RadioGroup>
                            <div className='flex gap-3 w-full border border-[#2E7A80] items-center'>
                                <MyInput 
                                    withoutForm
                                    name="price" 
                                    placeholder="e.g $5" 
                                    className='w-full border-0'
                                />
                                <MySelect 
                                    withoutForm
                                    name="currency"
                                    options={[
                                        {
                                            id: 1,
                                            name: 'UET'
                                        },
                                        {
                                            id: 2,
                                            name: 'UEST'
                                        }
                                    ]}
                                    value={form.watch("currency")}
                                    className='w-[100px] border-0 border-l border-[#777E90] rounded-none'
                                    placeholder='UET'
                                />
                            </div>
                        </FlexBox> 
                        <MySelect 
                            name="acceptedToken"
                            label="Accepted Tokens"
                            options={[
                                {
                                    id: 1,
                                    name: 'Token'
                                }
                            ]}
                            value={form.watch("acceptedToken")}
                            placeholder='Choose product accepted token'
                        />
                    </div>
                </form>
            </Form>
        </div>
    )
}

export {PricingAndShipping}