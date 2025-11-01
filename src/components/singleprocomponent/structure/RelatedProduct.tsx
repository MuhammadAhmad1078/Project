import { QuickViewModal } from "@/components/browseproductcomponent";
import { PmCards } from "@/components/businesshubcomponent";
import { Heading } from "@/components/commoncomponents";
import { GET_RELATED_PRODUCTS } from "@/graphql";
import { useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";

interface RelatedProductProps {
  productId: string;
  categoryId: string;
}

const RelatedProduct = ({ productId, categoryId }: RelatedProductProps) => {
  console.log(productId, "productId in RelatedProduct");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );
  const [loadData, { data }] = useLazyQuery(GET_RELATED_PRODUCTS, {
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    if (productId && categoryId)
      loadData({
        variables: {
          id: productId,
          categoryId: categoryId,
        },
      });
  }, [loadData, productId]);

  console.log(data, "data related Products");

  return (
    <div className="mt-5">
      <Heading
        type="pageHeading"
        title="Related Product"
        headClass="!text-2xl text-center !mb-3"
      />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7 mt-5">
        <PmCards
          data={data?.getRandomProducts}
          sizes={{
            cardcs: "border-[#0C666A] bg-[#081516] rounded-[8px]",
            contentcs: "px-6",
            cardfooter: "mx-1 py-2",
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
      </div>
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

export { RelatedProduct };
