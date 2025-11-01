import { CustomBreadCrumb } from '@/components/commoncomponents';
import { shoproductData } from '@/components/data/shoproductData';
import { useRouter } from 'next/router';
import React from 'react'

const SingleProductPage = () => {

    const router = useRouter();
    const { id } = router.query;
    const product = shoproductData.find((p) => String(p.id) === id);

    const path = [
        {
            name: 'SmartPhone',
            path:''
        },
        {
            name: 'Apple iPhone',
            path: ''
        }
    ]

  return (
    <div className='bg-[#081516] pb-20 pt-[30px]'>
        <div className=' md:w-[90%] w-[95%] mx-auto'>
            <CustomBreadCrumb 
                basename='Home'
                homepath='/browseproducts'
                breadcrumb={path}
                endname={product?.name}
            />
        </div>
    </div>
  )
}

export default SingleProductPage