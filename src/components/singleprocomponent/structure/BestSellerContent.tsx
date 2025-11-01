import { ProductDetailProps } from '@/types'
import React from 'react'

const BestSellerContent: React.FC<ProductDetailProps> = ({data}) => {


  return (
    <div className='mt-5'>
      <div dangerouslySetInnerHTML={{ __html: data?.product?.description }} />
    </div>
  )
}

export {BestSellerContent}