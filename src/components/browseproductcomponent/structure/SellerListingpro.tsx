import { QuickViewModal } from '@/components/browseproductcomponent';
import { PmCards } from '@/components/businesshubcomponent'
import { Heading, Text } from '@/components/commoncomponents';
import React, { useState, useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'
import { GET_MY_LISTING_PRODUCT } from '@/graphql/query/sellerDashboard'

const SellerListingpro = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

    const [loadProducts, { data, loading, error }] = useLazyQuery(
        GET_MY_LISTING_PRODUCT,
        {
            fetchPolicy: "cache-and-network",
            variables: { offset: 0, limit: 20, sortBy: "createdAt" }
        }
    )

    useEffect(() => {
        loadProducts()
    }, [loadProducts])

    // Transform data to match PmCards format
    const transformedData = data?.getListedProducts?.map((product: any) => ({
        id: typeof product.id === 'string' ? parseInt(product.id) : product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        dollaramount: product.price,
        images: product.images,
        category: product.category,
        type: product.type,
        discount: product.discount
    })) || []

    return (
        <div className='mt-5'>
            <Heading color='text-[#E6E8EC]'>
                Listing
            </Heading>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 mt-5' >
                {/* <PmCards 
                    data={data}
                    sizes={{
                        cardcs: 'border-[#3F4352] bg-[#081516] rounded-[8px]',
                        contentcs: 'px-6',
                        cardfooter: 'mx-1 py-2',
                        badgeSize: 'text-xs',
                        imageHeight: 'h-[150px]',
                        starsize: 'w-[14px]',
                        rateSize: 'text-xs',
                        titleSize: 'text-sm pt-1',
                    }}
                    link={'/singleproduct/'}
                    path={{
                        cart: '/cart',
                        view: (id) => {
                            setSelectedProductId(id);
                            // setCurrentProductList(shoproductData);
                            setIsOpen(true);
                        },
                        wishlist: '/wishlist'
                    }}
                /> */}
            </div>
            <QuickViewModal 
                open={isOpen}
                view={selectedProductId}
                // list={currentProductList}
                onClose={() => {
                    setIsOpen(false);
                    setSelectedProductId(null);
                    // setCurrentProductList([]);
                }}
            />
        </div>
    )
}

export {SellerListingpro}