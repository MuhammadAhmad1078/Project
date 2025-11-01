import React, { useEffect, useState } from 'react'
import { CustomPagination, FlexBox, Heading, MyCard, MyDropdown, Rating, Text } from '@/components/commoncomponents';
import { useLazyQuery } from '@apollo/client';
import { GET_PRODUCT_REVIEWS } from '@/graphql';
import { review } from '@/types';

interface ReviewsProps {
  productId: string;
}

const Reviews = ({ productId }: ReviewsProps) => {

  const [page, setPage] = useState(1);
  const [ loadData, { data } ] = useLazyQuery(GET_PRODUCT_REVIEWS, {fetchPolicy: "cache-and-network"})
  const [pagination, setPagination] = useState<{offset: number,  limit: number}>({ offset: 0, limit: 10})
  const [ sortOrder, setSortOrder ] = useState<'HIGH' | 'LOW'>('LOW');
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(()=>{
    if(productId) 
      loadData({variables: {productId, sortByRating: sortOrder ,limit: pagination.limit, offset: pagination.offset,}})
  }, [ productId, loadData, sortOrder, page, pagination.offset, pagination.limit ])

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    setPagination(prev => ({
        ...prev,
        offset: (newPage - 1) * prev.limit,
    }));
  };

  const handleRowsPerPageChange = (newLimit: number) => {
    setRowsPerPage(newLimit);
    setPagination({ offset: 0, limit: newLimit });
    setPage(1);
  };

  return (
    <div className='mt-5'>
        <Heading type='pageHeading' title='Top Reviews' />
        <div className='flex justify-between items-center mb-8'>
          <Text color='text-[#8F8F8F]'>Showing 3 of {data?.getProductReviews?.totalCount} reviews</Text>
          <MyDropdown 
            defaultLabel='Sorting'
            items={[
              { label: 'Highest Rated', value: 'HIGH' },
              { label: 'Lowest Rated', value: 'LOW' },
            ]}
            onSelect={(e)=> setSortOrder(e.value as 'HIGH' | 'LOW')}
          />
        </div>
        <div className=''>
          {
            data?.getProductReviews?.reviews?.map((items: review ,index: number)=>
              <MyCard className='bg-[#0A1B1C] border-0 mb-5' key={index}
                header={
                  <div>
                      <Heading type='pageHeading' title={items?.reviewer?.userName || 'Anonymous'} headClass='!font-medium !mb-2' />
                      <Rating value={items?.rating} starSize={18} />
                  </div>
                }
                footer={
                  <FlexBox gap='gap-3' items='items-center'>
                  {/* {
                    items?.images?.map((img,i)=>
                      <ImagePreview src={'/assets/images/'+img?.img} key={i} />
                    )
                  } */}
                </FlexBox>
                }
              >
                <div className='py-0 px-3'>
                  <Text fontSize='text-base' color='text-white' className='m-0'>
                    {
                      items?.comment
                    }
                  </Text>
                </div>
              </MyCard>
            )
          }
          {data?.getProductReviews?.totalCount > rowsPerPage &&
            <CustomPagination
              currentPage={page}
              totalPages={Math.ceil(data?.getProductReviews?.totalCount / rowsPerPage)}
              rowsPerPage={rowsPerPage}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              // className='justify-end'
            />
          }

          {/* <PopupImage
            open={open}
            onClose={() => setOpen(false)}
            imageUrl={selectedImage}
          /> */}
        </div>
    </div>
  )
}

export { Reviews }