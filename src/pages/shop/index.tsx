import React, { useState } from 'react'
import { FilterModal, ShopProduct, SidebarFilter } from '@/components/shopcomponent'
import { Backbtn, CustomBreadCrumb, FlexBox } from '@/components/commoncomponents'
import { useRouter } from 'next/navigation'

const ShopPage = () => {

    const [parentCategory, setParentCategory] = useState<string | null>(null)
    const [subCategory, setSubCategory] = useState<string | null>(null)
    const [ visible, setVisible ] = useState<boolean>(false)
    const router = useRouter()
    const handleCategorySelect = (parent: string, sub: string) => {
        setParentCategory(parent)
        setSubCategory(sub)
    }
    const hasSelection = !!parentCategory || !!subCategory

    const breadcrumbItems = hasSelection
        ? [
            { path: '/browseproducts', name: 'Explore Products' },
            ...(parentCategory ? [{ path: '#', name: parentCategory }] : []),
        ]
        : []

    const endName = subCategory || parentCategory || 'Explore Products'

    const handleBack = () => {
        setParentCategory(null)
        setSubCategory(null)
        router.push('/browseproducts')
    }

    return (
        <>
            <div className='bg-[#081516] pb-20 pt-[120px]'>
                <div className='md:w-[90%] w-[95%] mx-auto'>
                    <CustomBreadCrumb
                        basename='Home'
                        homepath='/'
                        endname={endName}
                        breadcrumb={breadcrumbItems}
                    />
                    <Backbtn
                        className='mt-10'
                        onClick={handleBack}
                    >
                        {endName}
                    </Backbtn>
                    <FlexBox gap='gap-10' className='mt-10 w-full'>
                        <div className='lg:w-[22%] lg:block hidden'>
                            <SidebarFilter onCategorySelect={handleCategorySelect} />
                        </div>
                        <div className='lg:w-[78%] w-full'>
                            <ShopProduct selectedCategory={subCategory} setVisible={setVisible} />
                        </div>
                    </FlexBox>
                </div>
            </div>
            <FilterModal 
                open={visible}
                onClose={()=>setVisible(false)}
                onCategorySelect={handleCategorySelect}
            />
        </>
    )
}

export default ShopPage
