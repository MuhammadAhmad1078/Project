import React from 'react'
import { WishlistTable } from '@/components/wishlistcomponent'
import { CustomBreadCrumb } from '@/components/commoncomponents'

const WishListPage = () => {

    return (
        <div className='bg-[#081516] pb-20 pt-[30px]'>
            <div className=' md:w-[90%] w-[95%] mx-auto mt-20'>
                <CustomBreadCrumb 
                    basename='Home'
                    homepath='/browseproducts'
                    endname='Wishlist'
                />
                <WishlistTable />
            </div>
        </div>
    )
}

export default WishListPage