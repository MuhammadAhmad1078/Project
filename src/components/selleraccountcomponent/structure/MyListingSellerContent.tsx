"use client";

import React, { useEffect, useState } from "react";
import {
  CommonCard,
  CustomPagination,
  FlexBox,
  Heading,
  MyCard,
  MyDropdown,
  StockBagde,
  Text,
} from "@/components/commoncomponents";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { MyListingSellerDetail } from "./MyListingSellerDetail";
import {
  GET_MY_LISTING_PRODUCT,
  GET_PRODUCT_LISTING_OVERVIEW,
} from "@/graphql";
import { useLazyQuery } from "@apollo/client";
import { OverviewData, OverviewTitles, Product } from "@/types";
import { CardDataFunc, randomImage } from "@/lib/utils";
import { ProductDeleteModal, ProductHideModal, ProductShareLinkModal } from "../modal";

const MyListingSellerContent = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedListing, setSelectedListing] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [ deleteitem, setDeleteItem ] = useState(false)
  const [ shareitem, setShareItem ] = useState(false)
  const [ hideitem, setHideItem ] = useState(false)
  const [loadProductListing, { data: listing }] = useLazyQuery(
    GET_PRODUCT_LISTING_OVERVIEW,
    { fetchPolicy: "cache-and-network" }
  );
  const [loadListing, { data }] = useLazyQuery(GET_MY_LISTING_PRODUCT, {
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    loadProductListing();
  }, [loadProductListing]);

  useEffect(() => {
    loadListing({
      variables: {
        offset: page,
        limit: rowsPerPage,
        sortBy: statusFilter !== "all" ? statusFilter : null,
      },
    });
  }, [loadListing, page, rowsPerPage, statusFilter]);

  const listingData: OverviewData = {
    values: [
      listing?.getProductListingOverview.totalListing || 0,
      listing?.getProductListingOverview.activeListing || 0,
      listing?.getProductListingOverview.outOfStock || 0,
    ],
  };

  const productTitles: OverviewTitles = {
    titles: ["Total Listings", "Active Listings", "Out of Stock Listings"],
  };

  const porudctlistingoverview = CardDataFunc(listingData, productTitles);

  const items = [
    {
      label: "View",
      value: "",
    },
    {
      label: "Delete",
      value: "",
    },
    {
      label: "Share",
      value: "",
    },
    {
      label: "Unhide",
      value: "",
    },
  ];

  if (selectedListing) {
    return (
      <MyListingSellerDetail
        selectedListing={selectedListing}
        setSelectedListing={setSelectedListing}
      />
    );
  }

  return (
    <div>
      <CommonCard
        data={porudctlistingoverview}
        gridClass="lg:!grid-cols-3"
        title="Overview"
      />
      <FlexBox
        justify="justify-between"
        items="items-center"
        gap="gap-3"
        className="mt-6"
      >
        <Heading type="pageHeading" title="All Listing" headClass="!m-0" />
        <MyDropdown
          defaultLabel="All"
          items={[
            { label: "All", value: "all" },
            { label: "In stock", value: "inStock" },
            { label: "Out of stock", value: "outStock" },
            { label: "Hide", value: "Hide" },
          ]}
          onSelect={(item) => setStatusFilter(item.value)}
          className="!bg-[#23262F] font-normal !text-[13px]"
        />
      </FlexBox>
      <div>
        {data?.getListedProducts?.map((list: Product) => (
          <MyCard
            className="bg-[#1C1E24] border border-[#3F4352] mt-5 py-4 gap-3 relative"
            key={list.id}
            footer={
              <FlexBox gap="gap-3">
                <Text
                  fontSize="text-xs"
                  color="text-white"
                  className="bg-[#353945] px-4 py-2 rounded-lg"
                >
                  {list?.category?.name}
                </Text>
              </FlexBox>
            }
            header={
              <StockBagde 
                title="In-Stock"
                subtitle="50/100"
                className={list?.name === 'iPhone 13 Pro Refurbished' ? 'bg-[#1A392C]' : 'bg-[#43262C]'}
                titlecolor={list?.name === 'iPhone 13 Pro Refurbished' ? 'text-[#16A34A]' : 'text-[#E2464A]'}
                subtitleClass={list?.name === 'iPhone 13 Pro Refurbished' ? 'bg-[#324D3C]':'bg-[#5A1C1E]'}
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
                      src={randomImage(list?.images)?.url}
                      className="lg:w-14 lg:h-16 w-30 h-36 object-contain"
                      alt={list?.name || "Product"}
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
                    {list?.name}
                  </Text>
                </FlexBox>
              </div>
              <div className="lg:w-[35%%]">
                <FlexBox
                  items="items-center"
                  gap="gap-3"
                  justify="justify-center"
                >
                  <Heading
                    weight="font-semibold"
                    color="text-[#FCFCFD]"
                    fontSize="text-sm"
                    className="text-nowrap"
                  >
                    {Number(list?.discount) > 0
                      ? `${
                          Number(list.price) -
                          (Number(list.price) * Number(list.discount)) / 100
                        } UET `
                      : `${list?.price} UET`}
                    {Number(list?.discount) > 0 && (
                      <Text
                        as="span"
                        fontSize="text-sm"
                        color="text-[#777E90]"
                        className="line-through inline-block"
                      >{`${list?.price} UET`}</Text>
                    )}
                  </Heading>
                  {Number(list?.discount) > 0 && (
                    <div className="bg-[#FAD763] p-1 font-normal text-[#18191D] text-xs rounded-xs text-nowrap">
                      {list?.discount}% OFF
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
                  <DropdownMenuContent className="bg-white p-3 rounded-lg z-50">
                    {items.map((item, index) => (
                      <DropdownMenuItem
                        key={index}
                        className="text-[13px] font-normal cursor-pointer py-1"            
                        onClick={() => {
                          if (item.label === "View") {
                            setSelectedListing(list?.id); 
                          } else if(item.label === "Delete") {
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
          </MyCard>
        ))}
        <div className="mt-5">
          <CustomPagination
            currentPage={page}
            totalPages={100}
            onPageChange={setPage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={setRowsPerPage}
          />
        </div>
      </div>

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

export { MyListingSellerContent };
