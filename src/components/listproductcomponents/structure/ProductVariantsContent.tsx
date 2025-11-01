import React, { useState } from 'react'
import { Form } from '@/components/ui/form'
import { useForm } from "react-hook-form"
import { ButtonSecondary, FlexBox, Heading, MyCard, MyMultiSelect, MySelect, Text, UploadFileList } from '@/components/commoncomponents'
import { PlusIcon } from 'lucide-react'
import { FileUpload } from '@/components/commoncomponents/FileUpload'
import { ProductVariantTable } from './ProductVariantTable'

type AttributeType = {
  color: string;
  size: string;
}

interface FormValues {
  category: string;
  categoryType: string;
  token: string;
  availability: string;
  currency: string;
  acceptedToken: string;
  replicatefield: AttributeType[];
}

const ProductVariantsContent = () => {
  const form = useForm<FormValues>()
  const [replicatefield, setReplicateField] = useState<AttributeType[]>([])

  const onSubmit = (data: FormValues) => {
    console.log('Form data:', data)
  }

  const handleAddRemoveAttribute = (operation: 'add' | 'remove', index?: number) => {
    if (operation === 'add') {
      setReplicateField([...replicatefield, { color: '', size: '' }])
    } else if (operation === 'remove' && index !== undefined) {
      setReplicateField(replicatefield.filter((_, i) => i !== index))
    }
  }

  const handleAttributeChange = (key: keyof AttributeType, value: string, index: number) => {
    setReplicateField(prev =>
      prev.map((attr, i) =>
        i === index ? { ...attr, [key]: value } : attr
      )
    )
  }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FlexBox justify='justify-between' gap='gap-3'>
                        <Heading fontSize='text-lg' color='text-white' className='mb-8'>
                            Product Variants <span className='text-sm font-normal'>(optional)</span>
                        </Heading>
                        <ButtonSecondary
                            type="button"
                            className='flex items-center gap-2'
                            onClick={() => handleAddRemoveAttribute('add')}
                        >
                            <PlusIcon className='w-5' /> Add Variant
                        </ButtonSecondary>
                    </FlexBox>

                    {replicatefield.map((field, index) => (
                        <MyCard key={index} className='p-4 border-0 rounded-[10px] bg-[#23262F] relative mb-4'>
                            <div className='absolute -top-2 right-5'>
                                <button
                                    className='p-0'
                                    type='button'
                                    onClick={() => handleAddRemoveAttribute('remove', index)}
                                >
                                    <img src="/assets/icons/cir-c-m.png" width={20} alt="remove" />
                                </button>
                            </div>
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-3 text-white'>
                                <MySelect
                                    name={`color.${index}`}
                                    label="Color"
                                    options={[
                                        { id: 1, name: 'Yellow' },
                                        { id: 2, name: 'Red' },
                                        { id: 3, name: 'Blue' }
                                    ]}
                                    value={field.color}
                                    placeholder='Choose color'
                                    onChange={(value) => handleAttributeChange('color', value, index)}
                                />
                                <MyMultiSelect
                                    name={`size.${index}`}
                                    label="Size"
                                    control={form.control}
                                    options={[
                                        { id: 1, name: 'Small' },
                                        { id: 2, name: 'Medium' },
                                        { id: 3, name: 'Large' }
                                    ]}
                                    onChange={(value) => handleAttributeChange('size', value, index)}
                                />
                            </div>
                            <FlexBox direction='flex-col' gap='gap-2' className='mt-3'>
                                <Heading className='text-sm text-white'>Attachment</Heading>
                                <UploadFileList className='text-center'>
                                    <Text color='text-white' className='mb-1'>
                                        Upload File/Image
                                    </Text>
                                    <Text color='text-[#B1B5C3]' fontSize='text-[13px]'>
                                        Maximum 20 MB (jpg, jpeg, png)
                                    </Text>
                                </UploadFileList>
                            </FlexBox>
                        </MyCard>
                    ))}
                    {
                        replicatefield.length > 0 &&
                        <ProductVariantTable />
                    }
                </form>
            </Form>
        </div>
    )
}

export { ProductVariantsContent }
