import {
  FlexBox,
  Heading,
  ImagePreview,
  MyCard,
  Rating,
  Text,
} from "@/components/commoncomponents";
import { Button } from "@/components/ui/button";
import React from "react";
import { Product } from "@/types";
import { randomImage } from "@/lib/utils";

type propsProduct = {
  product: Product | Product[];
};

const ListingReviewsDetailCard: React.FC<propsProduct> = ({ product }) => {
  const productList = Array.isArray(product) ? product : [product];

  return (
    <MyCard className="bg-[#1C1E24] border-[#3F4352]">
      {productList?.map((item: Product, index: number) => (
        <div key={index} className="px-3">
          <FlexBox
            items="items-center"
            justify="justify-between"
            gap="gap-3"
            className="mb-4"
          >
            <FlexBox items="items-center" gap="gap-4" className="w-full">
              <div className="shrink-0">
                <img
                  src={randomImage(item?.images)?.url}
                  className="lg:w-14 lg:h-16 w-30 h-36 object-contain"
                  alt={item?.name || "Product"}
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/300x200?text=No+Image";
                  }}
                />
              </div>
              <div>
                <Text
                  color="text-[#D6D8E0]"
                  className="text-wrap m-0 overflow-hidden [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]"
                >
                  {item?.name}
                </Text>
              </div>
            </FlexBox>
            {/* <Button className='p-0 !bg-transparent cursor-pointer'>
                                <img src="/assets/icons/maxscreen.png" className='w-6' alt="" />
                            </Button> */}
          </FlexBox>
          {item?.reviews?.map((items, index) => (
            <MyCard
              className="bg-[#23262F] border-0 mb-5"
              key={index}
              header={
                <div>
                  <Text
                    fontSize="text-xs"
                    className="mb-3"
                    color="text-[#FCFCFD]"
                  >
                    {items?.createdAt}
                  </Text>
                  <Heading
                    fontSize="text-base"
                    weight="font-medium"
                    className="mb-1"
                  >
                    {items?.reviewer?.userName}
                  </Heading>
                  <Rating value={items?.rating} starSize={18} />
                </div>
              }
              footer={
                <FlexBox
                  direction="flex-col"
                  items="items-start"
                  className="w-full"
                >
                  <div className="flex gap-3 items-center justify-start">
                    {items?.images?.map((img, i) => (
                      <ImagePreview
                        src={img?.url}
                        key={i}
                        previewSize="w-16 h-16"
                      />
                    ))}
                  </div>
                  <Button className="!bg-transparent cursor-pointer text-white text-sm flex gap-1 items-center justify-end w-full">
                    <img
                      src="/assets/icons/reply.png"
                      className="w-6 shrink-0"
                      alt=""
                    />
                    Reply
                  </Button>
                </FlexBox>
              }
            >
              <Text color="text-[#A4A6A9]" className="m-0 px-3">
                {items?.comment}
              </Text>
            </MyCard>
          ))}
        </div>
      ))}
    </MyCard>
  );
};

export { ListingReviewsDetailCard };
