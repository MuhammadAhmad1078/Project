import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { randomImage } from "@/lib/utils";
import { useMutation } from "@apollo/client";
import { ADD_TO_CART } from "@/graphql/mutation/cartMutations";
import { ADD_TO_WISHLIST } from "@/graphql/mutation/wishlistMutations";
import { GET_CART } from "@/graphql/query/cartQuery";
import { GET_WISHLIST } from "@/graphql/query/wishlistQuery";

type CardItem = {
  id: number;
  pimg?: string;
  typepro?: string;
  name: string;
  description?: string;
  rate: number;
  totalrate: number;
  price: number;
  dollaramount: number;
  images: {
    id: string;
    url: string;
  }[];
  reviewCount: number;
  avgRating: number;
};

type SizeClasses = {
  cardcs?: string;
  contentcs?: string;
  cardfooter?: string;
  imageHeight?: string;
  titleSize?: string;
  rateSize?: string;
  badgeSize?: string;
  starsize?: string;
};

type proCard = {
  data: CardItem[];
  sizes?: SizeClasses;
  link?: string;
  path?: {
    cart?: string;
    view?: (id: number) => void;
    wishlist?: string;
  };
};

const PmCards: React.FC<proCard> = ({ data, sizes, path, link }) => {
  const router = useRouter();
  console.log(data);

  const defaultClasses: Required<SizeClasses> = {
    cardcs: "bg-[#152122] rounded-lg border-[#57532E] py-4",
    contentcs: "px-2",
    cardfooter: "p-0 px-0 mx-2",
    badgeSize: "text-[8px]",
    imageHeight: "h-[100px]",
    titleSize: "md:text-[9px] text-sm",
    rateSize: "md:text-[9px] text-xs",
    starsize: "w-[10px]",
  };

  const mergedClasses = {
    ...defaultClasses,
    ...sizes,
  };

  const hasHoverAction = path && (path.cart || path.view || path.wishlist);

  return (
    <>
      {data?.map((items, index) => (
        <Card
          className={`${mergedClasses?.cardcs} relative gap-2 group ${
            hasHoverAction ? "hover:bg-[#152122]/90" : ""
          }`}
          key={index}
        >
          <Link href={link ? link + items?.id : ""}>
            <CardHeader className="px-4">
              {items?.typepro && (
                <div
                  className={`px-2 py-1 rounded absolute top-3 left-3 text-white ${
                    mergedClasses?.badgeSize
                  }
                                        ${
                                          items?.typepro === "HOT"
                                            ? "bg-orange-400"
                                            : "bg-[#466FF7]"
                                        }`}
                >
                  {}
                </div>
              )}
              <div className={items?.typepro ? 'pt-5': ''}>
                <img
                  src={randomImage(items?.images)?.url}
                  className={`${
                    mergedClasses?.imageHeight
                  } w-full object-contain ${
                    hasHoverAction ? "group-hover:opacity-70" : ""
                  }`}
                  alt={items?.name || "Product"}
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/300x200?text=No+Image";
                  }}
                />
              </div>
            </CardHeader>
            <CardContent className={mergedClasses?.contentcs}>
              <div className="inline-flex gap-1 items-center">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <img
                      key={i}
                      className={mergedClasses?.starsize}
                      src="/assets/images/star-o.png"
                      alt="star"
                    />
                  ))}
                <span className={`${mergedClasses?.rateSize} text-[#D6D8E0]`}>
                  {items?.avgRating}
                </span>
                <span className={`${mergedClasses?.rateSize} text-[#D6D8E080]`}>
                  ({items?.reviewCount})
                </span>
              </div>
              <div
                className={`${mergedClasses?.titleSize} text-[#E6E8EC] overflow-hidden [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]`}
              >
                {items?.name}
              </div>
            </CardContent>
            <CardFooter className={mergedClasses?.cardfooter}>
              <p
                className={`${mergedClasses?.rateSize} font-bold m-0 text-[#D6D8E0]`}
              >
                {items?.price} UET
              </p>
            </CardFooter>
          </Link>
          {hasHoverAction && (
            <div className="absolute inset-x-0 bottom-0 h-16 bg-black/0 group-hover:bg-black/30 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-lg">
              <div className="flex items-center justify-center gap-5">
                {path?.cart && (
                  <Button
                    onClick={() => router.push(path.cart || "")}
                    className="w-8 h-8 group-hover:scale-100 scale-0 bg-white p-2 rounded-full flex items-center justify-center hover:bg-[#0C666A] transition-all duration-300 hovereffect"
                  >
                    <img
                      src="/assets/icons/cart.png"
                      className="w-6"
                      alt="cart"
                    />
                  </Button>
                )}
                {path?.wishlist && (
                  <Button
                    onClick={() => router.push(path?.wishlist || "")}
                    className="w-8 h-8 group-hover:scale-100 scale-0 bg-white p-2 rounded-full flex items-center justify-center hover:bg-[#0C666A] transition-all duration-300 hovereffect"
                  >
                    <img
                      src="/assets/icons/wish-w.png"
                      className="w-6"
                      alt="wishlist"
                    />
                  </Button>
                )}
                {path?.view && (
                  <Button
                    onClick={() => {
                      path?.view?.(items?.id);
                    }}
                    className="w-8 h-8 group-hover:scale-100 scale-0 bg-white p-2 rounded-full flex items-center justify-center hover:bg-[#0C666A] transition-all duration-300 hovereffect"
                  >
                    <img
                      src="/assets/icons/eye.png"
                      className="w-6"
                      alt="view"
                    />
                  </Button>
                )}
              </div>
            </div>
          )}
        </Card>
      ))}
    </>
  );
};

export { PmCards };
