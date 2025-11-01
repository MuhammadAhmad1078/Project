import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import {
  ButtonSecondary,
  ButtonSecondaryOutline,
  FlexBox,
  Heading,
  QuantityCounter,
  Text,
} from "@/components/commoncomponents";
import { ProductDetailProps } from "@/types";
import { StarRating } from "@/components/ui/StartRating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SellerDatailsModal } from "../modals";
import { useMutation, useLazyQuery } from "@apollo/client";
import { ADD_TO_CART } from "@/graphql/mutation/cartMutations";
import { GET_CART } from "@/graphql/query/cartQuery";
import { useCartStore } from "@/store";
import { useRouter } from "next/navigation";

const DetailQuickViewPro: React.FC<ProductDetailProps> = ({ data }) => {
  const [qty, setQty] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const router = useRouter();
  const { addItem } = useCartStore();
  
  const [addToCart] = useMutation(ADD_TO_CART, {
    refetchQueries: [{ query: GET_CART }],
    onError: (error) => {
      console.error("Error adding to cart:", error);
      alert("Failed to add item to cart. Please try again.");
      setIsAddingToCart(false);
    },
    onCompleted: () => {
      setIsAddingToCart(false);
      // Optionally show success message
    },
  });

  const [loadCart] = useLazyQuery(GET_CART, {
    fetchPolicy: "cache-and-network",
  });

  const colorAttributes = data?.product?.attributes?.filter(
    (attr) => attr?.title.toLowerCase() === "color"
  );
  const brandAttributes = data?.product?.attributes?.find(
    (attr) => attr?.title.toLowerCase() === "brand"
  );

  const [sellerview, setSellerView] = useState(false);
  
  const product = data?.product;
  const productId = product?.id;
  const isInStock = (product?.quantity || 0) > 0;
  const isDisabled = !isInStock || isAddingToCart || !productId;

  const handleAddToCart = async () => {
    if (!productId || !isInStock) {
      alert("This product is out of stock");
      return;
    }

    setIsAddingToCart(true);
    try {
      // Try API first
      await addToCart({
        variables: {
          productId: String(productId),
          quantity: qty,
        },
      });
      // Also add to local store as fallback
      addItem(
        {
          id: String(productId),
          productId: String(productId),
          name: product?.name || "",
          price: product?.price || 0,
          image: product?.images?.[0]?.url || "",
        },
        qty
      );
      // Refresh cart data
      loadCart();
    } catch (error) {
      // If API fails, still add to local store
      console.warn("API cart add failed, using local store:", error);
      addItem(
        {
          id: String(productId),
          productId: String(productId),
          name: product?.name || "",
          price: product?.price || 0,
          image: product?.images?.[0]?.url || "",
        },
        qty
      );
    } finally {
      setIsAddingToCart(false);
    }
  };

  return (
    <div>
      <FlexBox gap="gap-1" items="items-center" className="mb-3">
        <StarRating rating={data?.avgRating} />
        <Text fontSize="text-xs" color="text-[#D6D8E0]">
          {data?.avgRating} Star Rating
        </Text>
        <Text fontSize="text-xs" color="text-[#D6D8E080]">
          {data?.reviewCount} User feedback
        </Text>
      </FlexBox>
      <Heading fontSize="text-base" color="text-[#E6E8EC]" className="mb-5">
        {data?.product?.name}
      </Heading>
      <div className="grid grid-cols-2 gap-3">
        <Text
          as="div"
          color="text-[#777E90]"
          fontSize="text-xs"
          weight="font-normal"
          className="flex items-center gap-2"
        >
          Sku:{" "}
          <Text
            color="text-[#E6E8EC]"
            fontSize="text-[13px]"
            weight="font-medium"
          >
            {data?.product?.sku || "N/A"}
          </Text>
        </Text>
        <Text
          as="div"
          color="text-[#777E90]"
          fontSize="text-xs"
          weight="font-normal"
          className="flex items-center gap-2"
        >
          Availability:
          {data?.product?.quantity > 0 ? (
            <Text
              color="text-[#2FA766]"
              fontSize="text-[13px]"
              weight="font-medium"
            >
              In Stock
            </Text>
          ) : (
            <Text
              color="text-[#EF4444]"
              fontSize="text-[13px]"
              weight="font-medium"
            >
              Out of Stock
            </Text>
          )}
        </Text>
        <Text
          as="div"
          color="text-[#777E90]"
          fontSize="text-xs"
          weight="font-normal"
          className="flex items-center gap-2"
        >
          Brand:{" "}
          <Text
            color="text-[#E6E8EC]"
            fontSize="text-[13px]"
            weight="font-medium"
          >
            {brandAttributes ? brandAttributes?.value : "Unknown"}
          </Text>
        </Text>
        <Text
          as="div"
          color="text-[#777E90]"
          fontSize="text-xs"
          weight="font-normal"
          className="flex items-center gap-2"
        >
          Category:{" "}
          <Text
            color="text-[#E6E8EC]"
            fontSize="text-[13px]"
            weight="font-medium"
          >
            {data?.product?.category?.name}
          </Text>
        </Text>
        <Text
          as="div"
          color="text-[#777E90]"
          fontSize="text-xs"
          weight="font-normal"
          className="flex items-center gap-2"
        >
          Token ID:{" "}
          <Text
            color="text-[#E6E8EC]"
            fontSize="text-[13px]"
            weight="font-medium"
          >
            {data?.product?.tokenId || "N/A"}
          </Text>
        </Text>
      </div>
      <div className="my-8">
        <FlexBox items="items-center" gap="gap-3">
          <Heading
            type="pageHeading"
            title={`${data?.product?.price} UET`}
            headClass="!mb-0 !text-[#2DA5F3]"
          />
          {data?.product?.discount > 0 && (
            <>
              <Text className="!text-base text-[#777E90] font-normal line-through !mb-0">
                {Math.round(
                  data.product.price / (1 - data.product.discount / 100)
                )}{" "}
                UET
              </Text>
              <div className="bg-[#FAD763] py-1 px-3 font-medium text-[#18191D] text-sm rounded-xs">
                {data.product.discount}% OFF
              </div>
            </>
          )}
        </FlexBox>
        <Text
          as="div"
          fontSize="text-[13px]"
          color="text-[#777E90]"
          className="mt-4 flex gap-2"
        >
          Accepted Coins:{" "}
          <Text color="text-[#E6E8EC]" weight="font-medium">
            UET, ETH
          </Text>
        </Text>
      </div>
      <Separator className="bg-[#353945]" />
      <div className="mt-5">
        <Text className="mb-2">Color</Text>
        <FlexBox items="items-center" gap="gap-3">
          {colorAttributes?.map((attr) => (
            <div
              key={attr.id}
              className="h-8 w-8 border-4 border-[#ffff] rounded-full"
              style={{ backgroundColor: attr.value }}
              title={attr.value}
            />
          ))}
        </FlexBox>
      </div>
      <QuantityCounter
        value={qty}
        onChange={setQty}
        min={1}
        max={data?.product?.quantity}
      />
      <div className="mt-4">
        <Text className="mb-2">Seller Details</Text>
        <FlexBox
          items="items-center"
          justify="justify-between"
          className="p-3 bg-[#0A1D1F]"
        >
          <FlexBox items="items-center" gap="gap-3">
            <Avatar>
              {data?.product?.seller?.image ? (
                <AvatarImage src={data.product.seller.image} className="w-10" />
              ) : (
                <AvatarImage
                  src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                  className="w-10"
                />
              )}
              <AvatarFallback>
                {data?.product?.seller?.userName?.[0] || "S"}
              </AvatarFallback>
            </Avatar>
            <div>
              <Heading weight="font-medium" fontSize="text-[15px]">
                {data?.product?.seller?.userName || "Anonymous Seller"}
              </Heading>
              <Text
                fontSize="text-[13px]"
                color="text-[#B1B5C3]"
                className="m-0"
              >
                {data?.product?.seller?.createdAt
                  ? `Joined Business Hub in ${new Date(
                      data.product.seller.createdAt
                    ).getFullYear()}`
                  : "Seller on Business Hub"}
              </Text>
            </div>
          </FlexBox>
          <FlexBox items="items-center" gap="gap-3">
            <Button
              type="button"
              className="bg-transparent p-0 cursor-pointer hover:bg-transparent"
            >
              <img src="/assets/icons/message.png" className="w-6" alt="" />
            </Button>
            <Button
              type="button"
              className="bg-transparent p-0 cursor-pointer hover:bg-transparent"
              onClick={() => {
                setSellerView(true);
              }}
            >
              <img src="/assets/icons/eye.png" className="w-6" alt="" />
            </Button>
          </FlexBox>
        </FlexBox>
      </div>
      <FlexBox gap="gap-5" className="mt-5">
        <ButtonSecondary
          onClick={async () => {
            if (!isInStock || !productId) return;
            // Add to cart first, then navigate to checkout
            await handleAddToCart();
            router.push("/checkout");
          }}
          disabled={isDisabled}
          className="w-full mb-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Buy Now
        </ButtonSecondary>
        <ButtonSecondaryOutline
          onClick={handleAddToCart}
          disabled={isDisabled}
          className="w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isAddingToCart ? "Adding..." : "Add To Cart"}
        </ButtonSecondaryOutline>
      </FlexBox>
      <SellerDatailsModal
        open={sellerview}
        seller={data?.product?.seller}
        onClose={() => setSellerView(false)}
      />
    </div>
  );
};

export { DetailQuickViewPro };
