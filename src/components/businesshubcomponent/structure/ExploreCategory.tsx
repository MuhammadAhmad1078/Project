import React, { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ButtonOutline,
  ButtonPrimary,
  FlexBox,
  Heading,
} from "@/components/commoncomponents";
import { useLazyQuery } from "@apollo/client";
import { GET_ALL_CATEGORIES } from "@/graphql";
const ExploreCategory = () => {
  const [loadCategories, { data: categoriesData }] = useLazyQuery(
    GET_ALL_CATEGORIES,
    { fetchPolicy: "cache-and-network" }
  );
  console.log(categoriesData, "categoriesData");
  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  return (
    <div className="bg-[#00272A] py-20">
      <div className="md:w-[88%] w-[95%] mx-auto ">
        <div className="mb-10 text-center md:w-[700px] mx-auto">
          <FlexBox
            gap="gap-2"
            className="mb-2 flex-wrap"
            justify="justify-center"
          >
            <Heading
              type="pageHeading"
              title="Explore by"
              headClass="!mb-0 !text-2xl"
            />
            <Heading
              type="pageHeading"
              title="Categories"
              headClass="!mb-0 !text-[#00F4FF] !text-2xl"
            />
          </FlexBox>
          <Heading className="!text-base text-[#B1B5C3]">
            Find what you&apos;re looking for faster. Whether it&apos;s a
            product or a professional service, we&apos;ve got the right category
            to get you started.
          </Heading>
          <FlexBox
            items="items-center"
            justify="justify-center"
            gap="gap-5"
            className="mt-5"
          >
            <ButtonPrimary>Product Marketplace</ButtonPrimary>
            <ButtonOutline className="bg-[#00272A]">
              Services Marketplace
            </ButtonOutline>
          </FlexBox>
        </div>
        <Tabs defaultValue={categoriesData?.getCategories?.[0]?.id || "1"}>
          <FlexBox direction="md:flex-row flex-col" gap="gap-20">
            <div className="md:w-[30%]">
              <Heading
                type="pageHeading"
                title="Top Categories"
                headClass="!text-2xl"
              />
              <TabsList className="flex-col h-auto w-full bg-transparent gap-5">
                {categoriesData?.getCategories?.map(
                  (
                    category: {
                      id: string;
                      name: string;
                      image?: string | null;
                    },
                    index: number
                  ) => (
                    <TabsTrigger
                      value={category?.id}
                      key={index}
                      className="cursor-pointer flex justify-start gap-5 px-4 py-3 rounded-2xl w-full bg-[#002F33] data-[state=active]:bg-[#00474D] h-14"
                    >
                      <img src="/assets/icons/brief.png" width={40} alt="" />
                      <Heading
                        type="sectionHeading"
                        title={category?.name}
                        subheadClass="!mb-0"
                      />
                    </TabsTrigger>
                  )
                )}
              </TabsList>
            </div>

            <div className="border border-[#173D40] bg-[#032023] p-6 rounded-2xl md:w-[70%] relative">
              {/* <div className='shap'></div> */}
              <div className="absolute -top-2 -right-2 roundedafter z-10">
                <button className="cursor-pointer h-12 w-12 bg-[#25A7B0] rounded-full flex items-center justify-center ">
                  <img src="/assets/icons/arrow-d.svg" className="w-5" alt="" />
                </button>
              </div>
              {categoriesData?.getCategories?.map(
                (
                  category: { id: string; name: string; image?: string | null },
                  i: number
                ) => (
                  <TabsContent
                    value={category?.id}
                    key={i}
                    className="flex justify-center items-center h-full"
                  >
                    <img
                      src={category?.image || "/assets/icons/brief.png"}
                      className="object-contain w-[60%] h-92"
                      alt={category?.name}
                    />
                  </TabsContent>
                )
              )}
            </div>
          </FlexBox>
        </Tabs>
      </div>
    </div>
  );
};

export { ExploreCategory };
