import React, { useEffect, useState } from 'react'
import { PmCards } from '@/components/businesshubcomponent'
import { QuickViewModal } from '@/components/browseproductcomponent'
import { Mapmodal } from '../modal'
import { Button } from '@/components/ui/button'
import { CustomPagination, FlexBox, MySelect } from '@/components/commoncomponents'
import { useLazyQuery } from '@apollo/client'
import { GET_ALL_PRODUCTS } from '@/graphql'
// import { Input } from '@/components/ui/input'

type filtersType= {
    search: string | null
    order: 'ASC' | 'DESC'
}

type ShopProductProps = {
  selectedCategory?: string | null;
  setVisible: (value: boolean) => void
}

const ShopProduct: React.FC<ShopProductProps> = ({ setVisible }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
    const [pagination, setPagination] = useState<{offset: number,  limit: number}>({ offset: 0, limit: 20})
    const [filters, setFilters]= useState<filtersType>({search: null, order: 'ASC'})
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [ loadData,{ data }] = useLazyQuery(GET_ALL_PRODUCTS, { fetchPolicy: "cache-and-network"})

    useEffect(() => {
        getNftsByCollectionId(0, pagination?.limit, filters);
    }, [filters, pagination?.limit]);

    const getNftsByCollectionId= (offset= 0, limit=20, _filters: filtersType)=>{     
        loadData({ variables: {limit,  offset: offset * limit, ..._filters}})
        setPagination({offset, limit})
    }

    // const searchHandler = (search: string | null) => handleFiltersChange('search', search);

    // function debounce<Args extends unknown[]>(
    //     func: (...args: Args) => void, delay: number): (...args: Args) => void {
    //     let timer: ReturnType<typeof setTimeout>;
    //     return function (...args: Args) {
    //         clearTimeout(timer);
    //         timer = setTimeout(() => func(...args), delay);
    //     };
    // }

    // const debouncedSearchHandler = debounce((search: string | null) => searchHandler(search), 400);

    const handleFiltersChange = (key: string, value: string | null) => {
        const data = { ...filters, [key]: value };
        setFilters(data);
        getNftsByCollectionId(0, pagination?.limit, data);
    }

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
        setPagination(prev => ({
            ...prev,
            offset: newPage - 1
        }));
    };

    const handleRowsPerPageChange = (newLimit: number) => {
        setRowsPerPage(newLimit);
        setPagination({ offset: 0, limit: newLimit });
        setPage(1);
    };
    
    const [ ismapopen, setIsMapOpen ] = useState(false) 

    return (
        <div>
            <FlexBox justify='justify-between' items='items-center' gap='gap-5' direction='md:flex-row flex-col' className='w-full'>
                <div className="relative md:w-80 bg-transparent border border-[#173D40] py-3 rounded-sm w-full cursor-pointer"
                    onClick={()=>setIsMapOpen(true)}
                >
                    <button
                        type="button"
                        className="absolute left-3 top-1/2 -translate-y-1/2"
                    >
                        <img src="/assets/icons/loc.png" width={20} alt="" />
                    </button>
                    {/* <Input
                        type='text'
                        id="search"
                        placeholder="Search Products"
                        className="border-0 pl-10 focus-visible:ring-0 w-full"
                        onChange={(e) => debouncedSearchHandler(e.target.value)}
                    /> */}
                    <p className='m-0 pl-10'>Evergreen Terrace Toronto, ON....</p>
                </div>
                <FlexBox className='md:w-auto w-full' gap='gap-3'>
                    <Button className='border-0 min-h-[43px] lg:hidden block bg-[#23262F] hover:bg-[#23262F] cursor-pointer' onClick={()=>setVisible(true)}>
                        <img src="/assets/icons/filter.png" width={24} alt="" />
                    </Button>
                    <MySelect 
                        withoutForm
                        name="category"
                        label="Category"
                        className='md:w-[180px] w-full border-0 bg-[#23262F] min-h-[43px] rounded-lg'
                        placeholder='Sort By'
                        onChange={(e)=>{handleFiltersChange('order', e)}}
                        options={[
                            {
                                id:"ASC",
                                name: 'Low to High'
                            },
                            {
                                id:"DESC",
                                name: 'High to Low'
                            }
                        ]}
                    />
                </FlexBox>
            </FlexBox>
            <div className='mt-5'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7' >
                    <PmCards 
                        data={data?.getProducts?.products}
                        sizes={{
                            cardcs: 'border-[#0C666A] bg-[#081516] rounded-[8px]',
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
                </div>
                <div className='mt-5'>
                    <CustomPagination
                        currentPage={page}
                        totalPages={100}
                        // totalPages={Math.ceil(totalItems / rowsPerPage)} // You must calculate this
                        rowsPerPage={rowsPerPage}
                        onPageChange={handlePageChange}
                        onRowsPerPageChange={handleRowsPerPageChange}
                    />
                </div>
            </div>
            <QuickViewModal 
                open={isOpen}
                view={selectedProductId}
                onClose={() => {
                    setIsOpen(false);
                    setSelectedProductId(null);
                }}
            />
            <Mapmodal 
                open={ismapopen}
                onClose={()=>setIsMapOpen(false)}
            />
        </div>
    )
}

export {ShopProduct}