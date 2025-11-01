import React from 'react'
import { CartTable } from '@/components/CartComponent'
import { CustomBreadCrumb } from '@/components/commoncomponents'

const CartPage = () => {

    return (
        <div className='bg-[#081516] pb-20 pt-[30px]'>
            <div className=' md:w-[90%] w-[95%] mx-auto mt-20'>
                <CustomBreadCrumb 
                    basename='Home'
                    homepath='/browseproducts'
                    endname='Cart'
                />
                <CartTable />
            </div>
        </div>
    )
}

export default CartPage