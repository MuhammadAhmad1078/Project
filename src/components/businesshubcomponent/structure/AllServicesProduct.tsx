import React, { useEffect } from 'react';
import { FolderShapCard } from './FolderShapCard';
import { SmCards } from './SmCards';
import { ButtonRounded, FlexBox, Heading, Text } from '@/components/commoncomponents';
import { useLazyQuery } from '@apollo/client';
import { GET_ALL_SERVICES, GET_POPULAR_SERVICES } from '@/graphql/query/servicesQuery';
import { GET_ALL_PRODUCTS } from '@/graphql';

const AllServicesProduct = () => {
    const [loadServices, { data: servicesData, loading: servicesLoading }] = useLazyQuery(
        GET_POPULAR_SERVICES,
        {
            fetchPolicy: "cache-and-network",
            variables: { limit: 6 },
        }
    );
    
    const [loadProducts, { data: productsData, loading: productsLoading }] = useLazyQuery(
        GET_ALL_PRODUCTS,
        {
            fetchPolicy: "cache-and-network",
            variables: { limit: 6, offset: 0 },
        }
    );

    useEffect(() => {
        loadServices();
        loadProducts();
    }, [loadServices, loadProducts]);

    // Transform services data to match SmCards format
    const transformServicesData = () => {
        if (servicesData?.getPopularServices) {
            return servicesData.getPopularServices.map((service: any) => ({
                id: service.id,
                img: service.imageUrl || service.images?.[0]?.url || "c-1.png",
                pimg: service.seller?.image || "pr.png",
                title: service.seller?.userName || "Service Provider",
                desc: service.description || service.title || "",
                rate: 4.5, // Default rating - can be fetched from service reviews if available
                totalrate: service.salesCount || 0,
                uetamount: service.price || 0,
                dollaramount: service.price ? (service.price * 0.01).toFixed(2) : "0.00", // Assuming exchange rate
            }));
        }
        return [];
    };

    // Transform products data to match SmCards format
    const transformProductsData = () => {
        if (productsData?.getProducts?.products) {
            return productsData.getProducts.products.map((product: any) => ({
                id: product.id,
                img: product.images?.[0]?.url || "c-1.png",
                pimg: "pr.png",
                title: "Product",
                desc: product.name || product.description || "",
                rate: productsData.getProducts.avgRating || 4.5,
                totalrate: productsData.getProducts.reviewCount || 0,
                uetamount: product.price || 0,
                dollaramount: product.price ? (product.price * 0.01).toFixed(2) : "0.00",
            }));
        }
        return [];
    };

    // Create card data structure similar to original cardData
    const cardData = [
        {
            clip: 1,
            btntitle: "Service Marketplace",
            title: "Hire Experts, Instantly",
            desc: "Discover skilled professionals offering a wide range of services tailored to your needs.",
            smdata: transformServicesData(),
        },
        {
            clip: 2,
            btntitle: "Product Marketplace",
            title: "Shop from Trusted Vendors",
            desc: "Browse through a vast collection of products from verified sellers with secure payments.",
            smdata: transformProductsData(),
        },
    ];

    return (
        <div className='md:w-[88%] w-[95%] mx-auto pt-20'>
            <div className='mb-10 text-center md:w-[700px] mx-auto'>
                <FlexBox gap='gap-2' className='mb-2 flex-wrap' justify='justify-center'>
                    <Heading type='pageHeading' title='All Your Services & Products, In One' headClass='!mb-0 !text-2xl' />
                    <Heading type='pageHeading' title='Smart Hub' headClass='!mb-0 !text-[#00F4FF] !text-2xl' />
                </FlexBox>
                <Heading className='!text-base text-[#B1B5C3]'>
                    Buzz offers a unified Web3 experience — whether you&apos;re booking a service or shopping from trusted vendors, everything runs smoothly with UET token payments.
                </Heading>
            </div>
            <div className='border border-[#173D40] shadow-c combined-gradient-bg p-6 rounded-2xl'>
                {(servicesLoading || productsLoading) ? (
                    <div className='text-center py-10'>
                        <Text className='text-gray-400'>Loading services and products...</Text>
                    </div>
                ) : (
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
                        {cardData?.map((data, index) => (
                            <FolderShapCard clip={data?.clip} key={index}>
                                <FlexBox gap='gap-5' direction='flex-col'>
                                    <div className={data?.clip === 2 ? 'text-end' : ''}>
                                        <ButtonRounded image='/assets/images/shap.svg'>
                                            {data?.btntitle}
                                        </ButtonRounded>
                                    </div>
                                    <Heading
                                        type='pageHeading'
                                        title={data?.title}
                                        headClass='!text-2xl font-bold !mb-0'
                                    />
                                    <Heading className='!m-0 !text-base text-[#B1B5C3]'>
                                        {data?.desc}
                                    </Heading>
                                    <div className='rounded-lg border p-4 border-[#173D40] overflow-y-auto h-92 no-scrollbar bg-[#152122]'>
                                        {data?.smdata && data.smdata.length > 0 ? (
                                            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
                                                <SmCards data={data.smdata} />
                                            </div>
                                        ) : (
                                            <div className='text-center py-10'>
                                                <Text className='text-gray-400'>
                                                    {data?.clip === 1
                                                        ? 'No services available at the moment'
                                                        : 'No products available at the moment'}
                                                </Text>
                                            </div>
                                        )}
                                    </div>
                                </FlexBox>
                            </FolderShapCard>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export { AllServicesProduct };
