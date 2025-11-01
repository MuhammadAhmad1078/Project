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
import { useRouter } from "next/navigation";
import { useLazyQuery, useMutation } from "@apollo/client";
import { GET_CART } from "@/graphql/query/cartQuery";
import { REMOVE_FROM_CART } from "@/graphql/mutation/cartMutations";
import { useCartStore } from "@/store";

const CartDrop = () => {
  const router = useRouter();
  const { items, getTotalItems, getTotalPrice, removeItem } = useCartStore();
  const [loadCart, { data: cartData, loading }] = useLazyQuery(GET_CART, {
    fetchPolicy: "cache-and-network",
  });
  const [removeFromCart] = useMutation(REMOVE_FROM_CART, {
    refetchQueries: [{ query: GET_CART }],
  });

  useEffect(() => {
    loadCart();
  }, [loadCart]);

  // Use API data if available, otherwise fall back to local cart store
  const cartItems = cartData?.getCart || items;
  const totalItems = cartData?.getCart?.length || getTotalItems();
  const subtotal = cartData?.getCart
    ? cartData.getCart.reduce(
        (sum: number, item: any) =>
          sum + (item.product?.price || 0) * (item.quantity || 0),
        0
      )
    : getTotalPrice();

  const handleRemoveItem = async (itemId: string, cartItemId?: string) => {
    if (cartItemId) {
      // Remove from API
      try {
        await removeFromCart({ variables: { cartItemId } });
      } catch (error) {
        console.error("Error removing item from cart:", error);
      }
    } else {
      // Remove from local store
      removeItem(itemId);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border-0 bg-transparent hover:bg-transparent">
        <div className="relative">
          <img src="/assets/icons/cart.png" className="w-6 h-6" alt="" />
          {totalItems > 0 && (
            <div
              className="w-4 h-4 text-xs rounded-full p-1 text-[#FCFCFD] bg-red-600
                        absolute -top-2 -right-2 flex items-center justify-center"
            >
              {totalItems}
            </div>
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 mt-5">
        <DropdownMenuLabel className="flex justify-between items-center py-3">
          <p className="m-0 text-[13px]">Shopping Cart ({totalItems})</p>
          <Link
            href={"/cart"}
            className="m-0 text-[13px] text-[#466FF7] border-b border-[#466FF7] pb-1"
          >
            View All
          </Link>
        </DropdownMenuLabel>
        <div className="flex flex-col w-full px-4 pb-4">
          {loading ? (
            <p className="text-xs text-center py-4">Loading cart...</p>
          ) : cartItems && cartItems.length > 0 ? (
            cartItems.slice(0, 3).map((item: any, index: number) => {
              const product = item.product || item;
              const imageUrl =
                product.images?.[0]?.url ||
                `/assets/images/${product.image}` ||
                "/assets/images/cam.png";
              const productName = product.name || product.title || "";
              const price = product.price || product.dollaramount || 0;
              const quantity = item.quantity || 1;
              const itemId = item.id || product.id || item.productId;

              return (
                <div className="flex gap-5 items-center mb-2" key={itemId || index}>
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
                      {quantity} x{" "}
                      <span className="text-[#466FF7]">{price} UET</span>
                    </p>
                  </div>
                  <Button
                    className="border-0 bg-transparent hover:bg-transparent text-end p-0"
                    type="button"
                    onClick={() => handleRemoveItem(itemId, item.id)}
                  >
                    <img src="/assets/icons/close-1.png" width={20} />
                  </Button>
                </div>
              );
            })
          ) : (
            <p className="text-xs text-center py-4 text-gray-400">
              Your cart is empty
            </p>
          )}
          {cartItems && cartItems.length > 0 && (
            <>
              <DropdownMenuSeparator className="mt-3" />
              <div className="w-full mt-3">
                <div className="flex justify-between mb-3">
                  <p className="m-0 text-[13px]">Sub-Total:</p>
                  <p className="mb-0 text-xs">{subtotal.toFixed(2)} UET</p>
                </div>
                <Button
                  type="button"
                  onClick={() => router.push("/checkout")}
                  className="bg-[#25A7B0] px-8 py-5 w-full rounded-sm text-[13px] flex items-center gap-3 text-white hover:bg-[#25A7B0] uppercase cursor-pointer"
                >
                  Checkout now
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

export { CartDrop };
