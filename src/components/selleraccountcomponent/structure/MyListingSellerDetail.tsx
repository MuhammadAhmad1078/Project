"use client";

import React, { useEffect, useState } from "react";
import {
  Backbtn,
  ExpandableText,
  FlexBox,
  Heading,
  ImagePreview,
  MyCard,
  MyDropdown,
  MyTab,
  StockBagde,
  Text,
} from "@/components/commoncomponents";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { InsightListing } from "./InsightListing";
import { ListingReviewContent } from "./ListingReviewContent";
import { useLazyQuery } from "@apollo/client";
import { GET_PRODUCT_DETAIL_BY_ID } from "@/graphql";
import { randomImage } from "@/lib/utils";
import { TagsData } from "@/components/data";
import { ProductDeleteModal, ProductHideModal, ProductShareLinkModal } from "../modal";

type Props = {
  selectedListing: string | null;
  setSelectedListing: (listing: string | null) => void;
};

const MyListingSellerDetail: React.FC<Props> = ({
  selectedListing,
  setSelectedListing,
}) => {
  const [loadData, { data }] = useLazyQuery(GET_PRODUCT_DETAIL_BY_ID, {
    fetchPolicy: "cache-and-network",
  });
   const [ deleteitem, setDeleteItem ] = useState(false)
    const [ shareitem, setShareItem ] = useState(false)
    const [ hideitem, setHideItem ] = useState(false)

  useEffect(() => {
    if (selectedListing)
      loadData({
        variables: {
          getProductById: selectedListing,
        },
      });
  }, [loadData, selectedListing]);

  if (!selectedListing) return null;

  const items = [
    {
      label: "Delete",
      value: "",
    },
    {
      label: "Share",
      value: "",
    },
    {
      label: "Hide",
      value: "",
    },
  ];

  const tabItems = [
    {
      key: "1",
      name: "Insight",
      content: <InsightListing />,
    },
    {
      key: "2",
      name: "Review",
      content: <ListingReviewContent data={data?.getProductById} />,
    },
  ];

  return (
    <div>
      <FlexBox justify="justify-between" items="items-center" gap="gap-3">
        <Backbtn
          onClick={() => setSelectedListing(null)}
          childclass="!text-base font-bold"
        >
          {data?.getProductById.product.name}
        </Backbtn>
        <MyDropdown
          defaultLabel="Daily"
          items={[
            { label: "Daily", value: "daily" },
            { label: "Weekly", value: "weekly" },
            { label: "Monthly", value: "monthly" },
          ]}
          onSelect={(item) => console.log("Selected:", item)}
          className="!bg-[#23262F] font-normal !text-[13px] text-white"
        />
      </FlexBox>
      <MyCard
        className="bg-[#1C1E24] border border-[#3F4352] my-6 py-4 gap-3 relative"
        footer={
          <FlexBox className="mt-5">
            <ExpandableText rows={3}>
              <Heading type='pageHeading' title='Description' headClass='!mb-3 !text-base' />
              <Text weight='font-normal' className='leading-6'>
                Looking for a compact yet powerful smartphone? The Apple iPhone 12 Mini (64GB) is the perfect choice! Featuring a Super Retina XDR display, the A14 Bionic chip, and dual 12MP cameras, this device delivers fast performance, stunning visuals, and high-quality photography. Its small, lightweight design makes it easy to carry while still offering flagship-level features.
              </Text>
              <Heading type='pageHeading' title='✅ Key Features:' headClass='!mb-3 mt-5' />
              <Text  weight='font-normal' className='mb-2'>
                🔹 64GB Storage – Enough space for apps, photos, and daily tasks
              </Text>
              <Text  weight='font-normal' className='mb-2'>
                🔹 Super Retina XDR Display – Vivid colors & sharp details for an immersive experience
              </Text>
              <Text  weight='font-normal' className='mb-2'>
                  🔹 A14 Bionic Chip – Fast processing, smooth multitasking & power efficiency
              </Text>
              <Text  weight='font-normal'>
                  🔹 Dual 12MP Cameras – Capture high-quality photos & videos with Night Mode & Deep Fusion
              </Text>
              <Heading type='pageHeading' title='Related Tags' headClass='!mb-3 mt-10' />
              <div className='flex gap-3 flex-wrap items-center'>
                {
                  TagsData?.map((items,index)=>
                    <div className='px-3 py-2 text-xs rounded-sm text-white bg-[#212C2D] border border-[#173D40]' key={index}>
                      {items?.name}
                    </div>
                  )
                }
              </div>
              <FlexBox gap='gap-3' items='items-center' className="mt-5">
                {
                  ['ip-2.png','ip-3.png'].map((img,i)=>
                    <ImagePreview src={'/assets/images/'+img} key={i} className="!border-[#173D40]" imgClass="object-contain" />
                  )
                }
              </FlexBox>
            </ExpandableText>
          </FlexBox>
        }
        header={
          <StockBagde 
            title="In-Stock"
            subtitle="50/100"
            className={data?.getProductById.product.name === 'iPhone 13 Pro Refurbished' ? 'bg-[#1A392C]' : 'bg-[#43262C]'}
            titlecolor={data?.getProductById.product.name === 'iPhone 13 Pro Refurbished' ? 'text-[#16A34A]' : 'text-[#E2464A]'}
            subtitleClass={data?.getProductById.product.name === 'iPhone 13 Pro Refurbished' ? 'bg-[#324D3C]':'bg-[#5A1C1E]'}
          />
        }
      >
        <FlexBox
          gap="lg:gap-10 gap-5"
          items="items-center"
          direction="lg:flex-row flex-col"
          justify="lg:justify-between justify-center"
          className="w-full px-3"
        >
          <div className="lg:w-[55%]">
            <FlexBox
              items="items-center"
              gap="gap-4"
              direction="lg:flex-row flex-col"
              justify="lg:justify-start justify-center"
              className="w-full"
            >
              <div className="shrink-0">
                <img
                  src={randomImage(data?.getProductById.product?.images)?.url}
                  className="lg:w-14 lg:h-16 w-30 h-36 object-contain"
                  alt={data?.getProductById.product.name || "Product"}
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/300x200?text=No+Image";
                  }}
                />
              </div>
              <Text
                fontSize="text-base"
                color="text-[#D6D8E0]"
                className="text-wrap"
              >
                {data?.getProductById.product.description}
              </Text>
            </FlexBox>
          </div>
          <div className="lg:w-[35%%]">
            <FlexBox items="items-center" gap="gap-3" justify="justify-center">
              <Heading
                weight="font-semibold"
                color="text-[#FCFCFD]"
                fontSize="text-sm"
                className="text-nowrap"
              >
                {Number(data?.getProductById.product?.discount) > 0
                  ? `${
                      Number(data?.getProductById.product?.price) -
                      (Number(data?.getProductById.product?.price) *
                        Number(data?.getProductById.product?.discount)) /
                        100
                    } UET `
                  : `${data?.getProductById.product?.price} UET`}
                {Number(data?.getProductById.product?.discount) > 0 && (
                  <Text
                    as="span"
                    fontSize="text-sm"
                    color="text-[#777E90]"
                    className="line-through inline-block"
                  >{`${data?.getProductById.product?.price} UET`}</Text>
                )}
              </Heading>
              {Number(data?.getProductById.product?.discount) > 0 && (
                <div className="bg-[#FAD763] p-1 font-normal text-[#18191D] text-xs rounded-xs text-nowrap">
                  {data?.getProductById.product?.discount}% OFF
                </div>
              )}
            </FlexBox>
          </div>
          <div className="lg:w-[10%] flex justify-end absolute top-5 right-5 lg:relative lg:top-0 lg:right-0">
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`bg-[#152122] p-0 text-xs flex justify-end`}
              >
                <img src="/assets/icons/3dots.png" className="w-4" alt="" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white p-3 rounded-lg">
                {items.map((item, index) => (
                  <DropdownMenuItem
                    key={index}
                    className="text-[13px] font-normal"
                    onClick={() => {
                      if(item.label === "Delete") {
                        setDeleteItem(true)
                      } else if(item.label === "Share") {
                        setShareItem(true)
                      } else if(item.label === "Unhide") {
                        setHideItem(true)
                      }
                    }}
                  >
                    {item.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </FlexBox>
        <FlexBox gap="gap-3">
          {
            <span className="text-xs bg-[#353945] text-white font-normal px-4 py-2 rounded-lg">
              {data?.getProductById.product?.category?.name}
            </span>
          }
        </FlexBox>
      </MyCard>
      <MyTab
        tabs={tabItems}
        defaultKey="1"
        classhead="data-[state=active]:bg-[#0C666A] data-[state=active]:border-[#0C666A] bg-[#353945] border-[#353945]"
      />
      <ProductDeleteModal 
        open={deleteitem}
        onClose={()=>setDeleteItem(false)}
      />
      <ProductHideModal 
        open={hideitem}
        onClose={()=>setHideItem(false)}
      />
      <ProductShareLinkModal 
        open={shareitem}
        onClose={()=>setShareItem(false)}
      />
    </div>
  );
};

export { MyListingSellerDetail };
