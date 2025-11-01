import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PmCards } from "@/components/businesshubcomponent";
import { bestsellerData } from "@/components/data";
import { QuickViewModal } from "../modals";
import { useLazyQuery } from "@apollo/client";
import { Heading } from "@/components/commoncomponents";
import { GET_BEST_SELLER_PRODUCTS } from "@/graphql/query/BestSellerProductQuery";

const BestSellerProduct = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );
  
  // Single query to fetch best seller products
  const [loadBestSellerProducts, { data: bestSellerProductData, loading }] =
    useLazyQuery(GET_BEST_SELLER_PRODUCTS, {
      fetchPolicy: "cache-and-network",
      variables: { limit: 20 },
    });

  useEffect(() => {
    loadBestSellerProducts();
  }, [loadBestSellerProducts]);

  // Extract products from API response
  const products = bestSellerProductData?.getBestSellerProducts || [];

  return (
    <div className="mt-10">
      <Heading
        type="pageHeading"
        title="Best Seller Product"
        headClass="text-xl font-bold"
      />
      <Tabs defaultValue="1">
        <TabsList className="h-auto bg-transparent gap-3 flex-wrap">
          {bestsellerData?.map((btntext, index) => (
            <TabsTrigger
              value={btntext?.id.toString()}
              key={index}
              className="cursor-pointer inline-flex bg-transparent border-[#23262F] data-[state=active]:bg-[#23262F] h-10 rounded-lg px-4"
            >
              {/* <h3 className='text-sm text-[#FFFFFF]'>{btntext?.name}</h3> */}
              <Heading>{btntext?.name}</Heading>
            </TabsTrigger>
          ))}
        </TabsList>
        {bestsellerData?.map((sub, i) => (
          <TabsContent value={sub?.id?.toString()} key={i} className="mt-3">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7">
              {loading ? (
                <div className="col-span-full text-center text-white py-10">
                  Loading products...
                </div>
              ) : products.length > 0 ? (
                <PmCards
                  data={products.map((item: any) => ({
                    ...item,
                    id: parseInt(item.tokenId) || parseInt(item.id),
                    images: item.images?.map((img: any) => ({
                      url: img.url,
                      id: img.id,
                    })) || [],
                    rate: 5,
                    totalrate: item.sellCount || item.salesCount || 0,
                    dollaramount: item.price || 0,
                    reviewCount: item.sellCount || item.salesCount || 0,
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
                      setSelectedProductId(id);
                      setIsOpen(true);
                    },
                    wishlist: "/wishlist",
                  }}
                />
              ) : (
                <div className="col-span-full text-center text-gray-400 py-10">
                  No products found.
                </div>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
      <QuickViewModal
        open={isOpen}
        view={selectedProductId}
        onClose={() => {
          setIsOpen(false);
          setSelectedProductId(null);
        }}
      />
    </div>
  );
};

export { BestSellerProduct };
