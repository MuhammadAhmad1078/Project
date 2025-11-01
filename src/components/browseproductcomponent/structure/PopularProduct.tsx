import React, { useEffect, useState, useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PmCards } from "@/components/businesshubcomponent";
import { QuickViewModal } from "../modals";
import { useLazyQuery } from "@apollo/client";
import { GET_POPULAR_PRODUCTS } from "@/graphql";
import {
  FlexBox,
  Heading,
  MySelect,
  Text,
} from "@/components/commoncomponents";
import { categories } from "@/shared";

interface Category {
  id: string;
  name: string;
}

interface PopularProduct {
  __typename: string;
  name: string;
  tokenId: string;
  sellCount: number;
  salesCount: number;
  description: string;
  id: string;
  isFeature: boolean;
  isForSale: boolean;
  category: Category | null;
  images:
    | {
        url: string;
        id: string;
      }[]
    | null;
  price: number;
}

const PopularProduct = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );
  const [activeTab, setActiveTab] = useState("");

  const [loadPopularProducts, { data: popularProductsData }] = useLazyQuery(
    GET_POPULAR_PRODUCTS,
    {
      fetchPolicy: "cache-and-network",
      variables: { limit: 20 },
    }
  );

  useEffect(() => {
    loadPopularProducts();
  }, [loadPopularProducts]);

  // 🧠 Extract product list safely
  const allProducts: PopularProduct[] =
    popularProductsData?.getPopularProducts || [];

  // 🧩 Group products by category
  const groupedByCategory = useMemo(() => {
    const groups: Record<string, PopularProduct[]> = {};

    allProducts.forEach((product) => {
      const catName = product.category?.name || "Uncategorized";
      if (!groups[catName]) groups[catName] = [];
      groups[catName].push(product);
    });

    return Object.entries(groups).map(([categoryName, items]) => ({
      id: categoryName.toLowerCase().replace(/\s+/g, "-"),
      name: categoryName,
      content: items,
    }));
  }, [allProducts]);
  useEffect(() => {
    if (groupedByCategory.length > 0) {
      setActiveTab(groupedByCategory[0].id);
    }
  }, [groupedByCategory]);
  return (
    <>
      <div className="mt-15">
        <FlexBox
          justify="justify-between"
          items="items-center"
          className="mb-5"
        >
          <Heading
            type="pageHeading"
            title="Popular Products"
            headClass="text-xl font-bold"
          />
          <MySelect
            withoutForm
            name="category"
            className="md:w-[180px] w-full border-0 bg-[#23262F] min-h-[43px] rounded-lg"
            placeholder="All Categories"
            options={categories}
          />
        </FlexBox>

        {/* 🧭 Dynamic Tabs for Categories */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="h-auto bg-transparent gap-3 flex-wrap">
            {groupedByCategory.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className="cursor-pointer inline-flex bg-transparent border-[#23262F] 
                   data-[state=active]:bg-[#23262F] h-10 rounded-lg px-4"
              >
                <Text color="text-white">{cat.name}</Text>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* 🧩 Category-wise Products */}
          {groupedByCategory.map((group) => (
            <TabsContent value={group.id} key={group.id} className="mt-3">
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7">
                {group.content.length > 0 ? (
                  <PmCards
                    data={group.content.map((item: PopularProduct) => ({
                      ...item,
                      id: parseInt(item.tokenId),
                      images: item.images ?? [], // ensure array
                      rate: 5,
                      totalrate: item.sellCount || 0,
                      dollaramount: item.price,
                      reviewCount: item.sellCount || 0,
                      avgRating: 5,
                    }))}
                    sizes={{
                      cardcs: "border-[#0C666A] bg-[#081516] rounded-[8px]",
                      contentcs: "px-6",
                      cardfooter: "py-2",
                      badgeSize: "text-xs",
                      imageHeight: "h-[150px]",
                      starsize: "w-[14px]",
                      rateSize: "text-xs",
                      titleSize: "text-sm pt-1",
                    }}
                    link={"/singleproduct/"}
                    path={{
                      cart: "/cart",
                      view: (id) => {
                        setSelectedProductId(String(id));
                        setIsOpen(true);
                      },
                      wishlist: "/wishlist",
                    }}
                  />
                ) : (
                  <Text color="text-gray-400">No products found.</Text>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* 🔍 Quick View Modal */}
      <QuickViewModal
        open={isOpen}
        view={selectedProductId ? parseInt(selectedProductId) : null}
        onClose={() => {
          setIsOpen(false);
          setSelectedProductId(null);
        }}
      />
    </>
  );
};

export { PopularProduct };
