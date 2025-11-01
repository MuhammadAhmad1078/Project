import React, { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Button } from "../ui/button";
import { useLazyQuery, useMutation } from "@apollo/client";
import { GET_WISHLIST } from "@/graphql/query/wishlistQuery";
import { REMOVE_FROM_WISHLIST } from "@/graphql/mutation/wishlistMutations";

const WishlistNotification = () => {
  const [loadWishlist, { data: wishlistData, loading }] = useLazyQuery(GET_WISHLIST, {
    fetchPolicy: "cache-and-network",
  });
  const [removeFromWishlist] = useMutation(REMOVE_FROM_WISHLIST, {
    refetchQueries: [{ query: GET_WISHLIST }],
  });

  useEffect(() => {
    loadWishlist();
  }, [loadWishlist]);

  const wishlistItems = wishlistData?.getWishlist || [];
  const totalItems = wishlistItems.length;

  const handleRemoveItem = async (wishlistItemId: string) => {
    try {
      await removeFromWishlist({ variables: { wishlistItemId } });
    } catch (error) {
      console.error("Error removing item from wishlist:", error);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border-0 bg-transparent hover:bg-transparent">
        <img
          src="/assets/icons/heart.png"
          className="w-6 h-6 rounded-full object-cover object-top"
          alt=""
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 mt-5">
        <DropdownMenuLabel className="flex justify-between items-center py-3">
          <p className="m-0 text-[13px]">Wishlist ({totalItems})</p>
          <Link
            href={"/wishlist"}
            className="m-0 text-[13px] text-[#466FF7] border-b border-[#466FF7] pb-1"
          >
            View All
          </Link>
        </DropdownMenuLabel>
        <div className="flex flex-col w-full px-4 pb-4">
          {loading ? (
            <p className="text-xs text-center py-4">Loading wishlist...</p>
          ) : wishlistItems.length === 0 ? (
            <p className="text-xs text-center py-4 text-gray-400">
              Your wishlist is empty
            </p>
          ) : (
            wishlistItems.slice(0, 3).map((item: any, index: number) => {
              const product = item.product || {};
              const imageUrl =
                product.images?.[0]?.url ||
                `/assets/images/${product.image}` ||
                "/assets/images/cam.png";
              const productName = product.name || product.title || "";
              const price = product.price || 0;

              return (
                <div className="flex gap-5 items-center mb-3" key={item.id || index}>
                  <div className="border border-[#E4E7E9] p-3 shrink-0">
                    <img
                      src={imageUrl}
                      alt="product_image"
                      className="w-[60px] h-[60px] object-contain"
                    />
                  </div>
                  <div className="pt-2 flex-1">
                    <p className="mb-2 text-xs line-clamp-2">{productName}</p>
                    <p className="mb-0 text-xs">
                      <span className="text-[#466FF7]">{price} UET</span>
                    </p>
                  </div>
                  <Button
                    className="border-0 bg-transparent hover:bg-transparent text-end p-0"
                    type="button"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <img src="/assets/icons/close-1.png" width={20} />
                  </Button>
                </div>
              );
            })
          )}
          {wishlistItems.length > 0 && (
            <>
              <DropdownMenuSeparator />
              <div className="w-full mt-3">
                <Button className="bg-[#25A7B0] px-8 py-5 w-full text-[13px] rounded-sm flex items-center gap-3 text-white hover:bg-[#25A7B0] uppercase">
                  Add to cart
                  <img src="/assets/icons/ar-lft.png" width={16} alt="" />
                </Button>
              </div>
            </>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { WishlistNotification };
