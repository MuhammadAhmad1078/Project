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

            {/* Error State */}
            {error && (
                <div className="mb-4 p-4 bg-red-900/20 border border-red-500 rounded">
                    <Text color="text-red-400">Failed to load listings. Please try again.</Text>
                </div>
            )}

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 mt-5' >
                {/* Loading State */}
                {loading && (
                    <div className="col-span-3 text-center py-10">
                        <Text color="text-gray-400">Loading your listings...</Text>
                    </div>
                )}

                {/* Empty State */}
                {!loading && transformedData.length === 0 && !error && (
                    <div className="col-span-3 text-center py-10">
                        <Text color="text-gray-400">No listings yet. Create your first product!</Text>
                    </div>
                )}

                {/* Products List */}
                {!loading && transformedData.length > 0 && (
                    <PmCards
                        data={transformedData}
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
                                setIsOpen(true);
                            },
                            wishlist: '/wishlist'
                        }}
                    />
                )}
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