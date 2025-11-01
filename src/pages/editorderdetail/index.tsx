import React from 'react'
import { EditOrderTable } from '@/components/CartComponent'
import { CustomBreadCrumb } from '@/components/commoncomponents'

const EditOrderDetailPage = () => {

    const breadcrumb = [
        {
            name: 'Checkout',
            path: '/checkout'
        }
    ]

    return (
        <div className='bg-[#081516] pb-20 pt-[30px]'>
            <div className=' md:w-[90%] w-[95%] mx-auto mt-20'>
                <CustomBreadCrumb 
                    basename='Home'
                    homepath='/browseproducts'
                    breadcrumb={breadcrumb}
                    endname='Edit Order'
                />
                <EditOrderTable />
            </div>
        </div>
    )
}

export default EditOrderDetailPage