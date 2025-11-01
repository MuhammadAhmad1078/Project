import React, { useState } from 'react'
import { Form } from '@/components/ui/form'
import { useForm } from "react-hook-form"
import { ButtonSecondary, Heading, MyInput, MySelect } from '@/components/commoncomponents'
import { categories, countryOp } from '@/shared'
import { Plus } from 'lucide-react'
import { TagsData } from '@/components/data'

interface FormValues {
  category: string;
  categoryType: string;
  token: string;
  deliverTo: string;
}

const ProductDetailStepContent = () => {
    const form = useForm<FormValues>()
    const [description, setDescription] = useState("")
    const wordLimit = 500

    const onSubmit = (data: FormValues) => {
        console.log('Form data:', data)
    }

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value
        const words = text.trim().split(/\s+/)

        if (words.length <= wordLimit) {
        setDescription(text)
        }
    }
    const extendedCountryOptions = [...countryOp, { id: 196, name: "World Wide" }];
    const wordCount = description.trim() ? description.trim().split(/\s+/).length : 0
    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <Heading type='pageHeading' title='Product Details & Description' headClass='!mb-8' />
                    <div className='grid grid-cols-1 gap-5'>
                        <MyInput 
                            name="proTitle" 
                            label="Product Title" 
                            placeholder="Enter product title" 
                            // className='border-[#777E90]'
                        />
                        <div>
                            <Heading className='text-sm text-white pb-1'>Description</Heading>
                            <div className='border border-[#2E7A80] p-1'>
                                <MyInput 
                                    withoutForm
                                    textArea
                                    name="note" 
                                    value={description}
                                    onChange={handleDescriptionChange}
                                    placeholder="Write product description" 
                                    className='border-0 resize-none !h-24'
                                />
                                <span className='text-xs text-[#777E90] text-end block'>
                                    {wordCount} / {wordLimit} words
                                </span>
                            </div>
                        </div>
                        <div>
                            <Heading className='text-sm text-white pb-1'>Related Tag</Heading>
                            <Heading className='text-xs text-[#B1B5C3] pb-4'>Add relevant keywords to help users find your service easily.</Heading>
                            <MyInput 
                                withoutForm
                                name="price" 
                                placeholder="e.g $5" 
                            />
                        </div>
                        <div>
                            <Heading className='text-sm text-white pb-1'>Suggested Tags</Heading>
                            <div className='flex gap-3 flex-wrap items-center'>
                                {
                                    TagsData?.map((items,index)=>
                                        <ButtonSecondary key={index} className='flex items-center gap-3 !text-xs !h-[30px] !px-3 bg-[#212C2D] border-[#212C2D]'>
                                            <Plus className='text-xs' size={13}/> {items?.name}
                                        </ButtonSecondary>
                                    )
                                }
                            </div>
                        </div>
                        <MyInput 
                            name="skuCode" 
                            label="SKU Code" 
                            placeholder="Enter SKU  code" 
                        />
                        <MyInput 
                            name="quantity" 
                            label="Quantity" 
                            placeholder="Enter product quantity" 
                        />
                        <MyInput 
                            name="alertAt" 
                            label="Alert At" 
                            placeholder="Enter product  to give alert" 
                        />
                        <MySelect 
                            name="deliverTo"
                            label="Deliver To"
                            options={extendedCountryOptions}
                            value={form.watch("deliverTo")}
                            placeholder='Choose location'
                        />
                    </div>
                </form>
            </Form>
        </div>
    )
}

export {ProductDetailStepContent}