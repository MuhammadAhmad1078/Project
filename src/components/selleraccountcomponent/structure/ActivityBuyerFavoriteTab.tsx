import { PmCards } from '@/components/businesshubcomponent';
import { favoriteproductData } from '@/components/data';
import React from 'react'

const ActivityBuyerFavoriteTab = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7' >
            <PmCards 
                data={favoriteproductData}
                sizes={{
                    cardcs: 'border-[#173D40] bg-transparent rounded-[4px]',
                    contentcs: 'px-6',
                    cardfooter: 'py-2',
                    badgeSize: 'text-xs',
                    imageHeight: 'h-[200px]',
                    starsize: 'w-[14px] ',
                    rateSize: 'text-xs',
                    titleSize: 'text-sm pt-1 font-normal',
                }}
                link={'/singleproduct/'}
                path={{
                    cart: '/cart',
                    view: (id) => {
                        {}
                    },
                    wishlist: '/wishlist'
                }}
            />
        </div>
    )
}

export {ActivityBuyerFavoriteTab}