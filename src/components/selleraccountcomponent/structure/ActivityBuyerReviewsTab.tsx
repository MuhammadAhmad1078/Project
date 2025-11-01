import React from "react";
import {
  FlexBox,
  Heading,
  ImagePreview,
  MyCard,
  Rating,
  Text,
} from "@/components/commoncomponents";
import Image from "next/image";


export type ProductImage = {
  id: string;
  url: string;
};

export type review = {
  id: string;
  rating: number;
  title: string;
  productimg: string;
  comment: string;
  images: ProductImage[];
  createdAt: string;
  reviewer: {
    id: string;
    userName: string;
  };
};

type PropsReviews = {
  reviews: review | review[];
};

const ActivityBuyerReviewsTab: React.FC<PropsReviews> = ({ reviews }) => {
  const reviewList = Array.isArray(reviews) ? reviews : [reviews];

  return (
    <>
      {reviewList.length ? (
        reviewList.map((rev: review, index: number) => (
          <MyCard
            key={index}
            className="bg-transparent  border-[#3F4352] mb-5"
            header={
              <div>
                <Text
                  fontSize="text-xs"
                  className="mb-3"
                  color="text-[#FCFCFD]"
                >
                    {new Date(rev.createdAt).toLocaleString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                    })}

                </Text>
                <FlexBox gap="gap-4" items="items-center" >
                  <Image src={rev?.productimg} width={55} height={55} alt="product image" className="rounded-lg object-contain" />
                  <Heading
                    fontSize="text-sm"
                    weight="font-medium"
                    className="mb-1 text-white"
                  >
                    {rev?.title}
                  </Heading>
                </FlexBox>
              </div>
            }
            footer={
              <FlexBox
                direction="flex-col"
                items="items-start"
                className="w-full p-3 rounded-lg bg-[#3F4352]"
              >
                <Text color="text-white">
                  <span className="text-[#B1B5C3] italic">{rev.reviewer?.userName}</span>: Thanks for shopping!
                </Text>
              </FlexBox>
            }
          >
            <FlexBox direction="flex-col" gap="gap-3" className="p-4 mx-3 rounded-lg bg-[#23262F]">
              <Heading
                fontSize="text-base"
                weight="font-medium"
                className="text-white"
                headClass="!m-0"
              >
                {rev.reviewer?.userName}
              </Heading>
              <Rating value={rev.rating} starSize={14} />
              <Text color="text-[#A4A6A9]">
                {rev.comment}
              </Text>
              {rev.images?.length > 0 && (
                <div className="flex gap-3 items-center justify-start mb-2">
                  {rev.images.map((img: ProductImage, i) => (
                    <ImagePreview
                      src={img.url}
                      key={i}
                      previewSize="w-16 h-16"
                    />
                  ))}
                </div>
              )}
            </FlexBox>
          </MyCard>
        ))
      ) : (
        <Text
          color="text-[#A4A6A9]"
          className="px-3 py-2 italic text-sm text-center"
        >
          No reviews available.
        </Text>
      )}
    </>
  );
};

export { ActivityBuyerReviewsTab };
