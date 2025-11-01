import React from 'react'
import { BestSellerContent } from './BestSellerContent'
import { Reviews } from './Reviews'
import { MyTab } from '@/components/commoncomponents'
import { ProductDetailProps } from '@/types'

const TabSinglePro: React.FC<ProductDetailProps> = ({data}) => {

    const tabItems = [
        {
            key: '1',
            name: 'Additional Information',
            content: <BestSellerContent data={data} />,
        },
        {
            key: '2',
            name: 'Review',
            content: <Reviews productId={data?.product?.id} />,
        },
    ]

    return (
        <div>
            <MyTab tabs={tabItems} defaultKey="1"  />
        </div>
    )
}

export {TabSinglePro}