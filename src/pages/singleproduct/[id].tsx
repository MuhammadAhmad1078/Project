import React, { useEffect } from "react";
import {
  DetailQuickViewPro,
  ProductSliderThumbnail,
  StickyMessageChat,
} from "@/components/browseproductcomponent";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Separator } from "@/components/ui/separator";
import { RelatedProduct, TabSinglePro } from "@/components/singleprocomponent";
import { CustomBreadCrumb } from "@/components/commoncomponents";
import { GET_PRODUCTS_BY_ID } from "@/graphql";
import { useLazyQuery } from "@apollo/client";

const SingleProductPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [loadData, { data }] = useLazyQuery(GET_PRODUCTS_BY_ID, {
    fetchPolicy: "cache-and-network",
  });
  useEffect(() => {
    if (typeof id === "string") {
      loadData({
        variables: { getProductById: id },
      });
    }
  }, [id, loadData]);

  const path = [
    {
      name: "SmartPhone",
      path: "/shop",
    },
    {
      name: "Apple iPhone",
      path: "",
    },
  ];

  return (
    <div className="bg-[#081516] pb-20 pt-[30px] relative">
      <div className=" md:w-[90%] w-[95%] mx-auto mt-20">
        <CustomBreadCrumb
          basename="Home"
          homepath="/browseproducts"
          breadcrumb={path}
          endname={data?.getProductById?.product?.name}
        />
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-15 lg:gap-30 mt-20">
          <ProductSliderThumbnail
            images={data?.getProductById?.product?.images}
          />
          <DetailQuickViewPro data={data?.getProductById} />
        </div>
        <Separator className="bg-[#353945] my-10" />
        <TabSinglePro data={data?.getProductById} />
        <RelatedProduct
          productId={typeof id === "string" ? id : ""}
          categoryId={
            data?.getProductById?.product?.category?.id
              ? String(data.getProductById.product.category.id)
              : ""
          }
        />
        <div className="fixed right-16 bottom-0 px-2 w-auto md:w-[350px]">
          <StickyMessageChat />
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
