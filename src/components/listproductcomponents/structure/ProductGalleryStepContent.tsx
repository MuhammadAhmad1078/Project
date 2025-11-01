import React from 'react'
import { Heading } from '@/components/commoncomponents'
import { FileUpload } from '@/components/commoncomponents/FileUpload'


const ProductGalleryStepContent = () => {
    return (
        <div>
            <Heading type='pageHeading' title='Product Gallery' headClass='!mb-8' />
            <FileUpload 
                multiple 
                title='Add Photos'
                accept="image/*" 
                maxFiles={5} 
            />
        </div>
    )
}

export {ProductGalleryStepContent}