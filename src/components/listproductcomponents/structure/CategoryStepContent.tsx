import React from 'react'
import { Form } from '@/components/ui/form'
import { useForm } from "react-hook-form"
import { Heading, MySelect } from '@/components/commoncomponents'
import { categories, categorytypeOp } from '@/shared'

interface FormValues {
  category: string;
  categoryType: string;
}

const CategoryStepContent = () => {
    const form = useForm<FormValues>()

    const onSubmit = (data: FormValues) => {
        console.log('Form data:', data)
    }
    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <Heading type='pageHeading' title='Category & Category Type' headClass='!mb-8' />
                    <div className='grid grid-cols-1 gap-5'>
                        <MySelect 
                            name="category"
                            label="Category"
                            options={categories}
                            required
                            message="Please select category"
                            value={form.watch("category")}
                            placeholder='e.g, Electronics'
                        />
                        <MySelect 
                            name="categoryType"
                            label="Category Type"
                            options={categorytypeOp}
                            required
                            message="Please select category type"
                            value={form.watch("categoryType")}
                            placeholder='e.g, Smart Phone'
                        />
                    </div>
                </form>
            </Form>
        </div>
    )
}

export {CategoryStepContent}