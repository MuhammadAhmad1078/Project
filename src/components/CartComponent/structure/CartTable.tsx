'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import {
  ButtonSecondaryOutline,
  FlexBox,
  Heading,
  MyTable,
  QuantityCounter,
  Text
} from '@/components/commoncomponents';
import { OutOfStockModal } from '../modal';
import { useLazyQuery, useMutation } from '@apollo/client';
import { GET_CART } from '@/graphql/query/cartQuery';
import { UPDATE_CART_ITEM, REMOVE_FROM_CART } from '@/graphql/mutation/cartMutations';
import { useCartStore } from '@/store';

type cartList = {
  id: string;
  title: string;
  img: string;
  price: number;
  stock?: string;
  subtotal: number;
  quantity: number;
  productId?: string;
  cartItemId?: string;
};

const CartTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const { items, getTotalPrice } = useCartStore();
  
  const [loadCart, { data: cartData, loading }] = useLazyQuery(GET_CART, {
    fetchPolicy: "cache-and-network",
  });
  const [updateCartItem] = useMutation(UPDATE_CART_ITEM, {
    refetchQueries: [{ query: GET_CART }],
  });
  const [removeFromCart] = useMutation(REMOVE_FROM_CART, {
    refetchQueries: [{ query: GET_CART }],
  });

  useEffect(() => {
    loadCart();
  }, [loadCart]);

  // Transform API data or local store data to cartList format
  const transformCartData = (): cartList[] => {
    if (cartData?.getCart) {
      return cartData.getCart.map((item: any) => {
        const product = item.product || {};
        const imageUrl = product.images?.[0]?.url || product.image || "/assets/images/cam.png";
        const price = product.price || 0;
        const quantity = item.quantity || 1;
        const stock = product.quantity > 0 ? "In Stock" : "Out of Stock";
        
        return {
          id: item.id || product.id,
          title: product.name || product.title || "",
          img: imageUrl,
          price: price,
          stock: stock,
          subtotal: price * quantity,
          quantity: quantity,
          productId: item.productId || product.id,
          cartItemId: item.id,
        };
      });
    } else if (items && items.length > 0) {
      return items.map((item) => ({
        id: item.id,
        title: item.name,
        img: item.image || "/assets/images/cam.png",
        price: item.price,
        stock: "In Stock",
        subtotal: item.price * item.quantity,
        quantity: item.quantity,
        productId: item.productId,
      }));
    }
    return [];
  };

  const cartItems = transformCartData();
  const paginatedData = cartItems.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleQuantityChange = async (id: string, newQty: number, cartItemId?: string) => {
    if (cartItemId) {
      // Update via API
      try {
        await updateCartItem({
          variables: { cartItemId, quantity: newQty },
        });
      } catch (error) {
        console.error("Error updating cart item:", error);
      }
    } else {
      // Update local store
      const { updateQuantity } = useCartStore.getState();
      updateQuantity(id, newQty);
      loadCart(); // Refresh to sync
    }
  };

  const handleRemoveItem = async (id: string, cartItemId?: string) => {
    if (cartItemId) {
      // Remove via API
      try {
        await removeFromCart({ variables: { cartItemId } });
      } catch (error) {
        console.error("Error removing item from cart:", error);
      }
    } else {
      // Remove from local store
      const { removeItem } = useCartStore.getState();
      removeItem(id);
      loadCart(); // Refresh to sync
    }
  };

  const columns = [
    {
        title: "Products",
        dataIndex: "products",
        key: "products",
        render: (_: unknown, record: cartList) => (
            <FlexBox items='items-center'>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:bg-transparent cursor-pointer"
                  onClick={() => handleRemoveItem(record.id, record.cartItemId)}
                >
                    <img src="/assets/icons/remove.png" alt="Remove" className="h-5 w-5" />
                </Button>
                <div className="flex items-center gap-4">
                    <div className="p-3 border border-[#0C666A] shrink-0">
                        <img src={record.img} className="w-12 h-16 object-contain" alt={record.title} />
                    </div>
                    <Text fontSize='text-[13px]'>{record.title}</Text>
                </div>
            </FlexBox>
        ),
    },
    {
        title: "Price",
        dataIndex: "price",
        key: "price",
        render: (_: unknown, record: cartList) => (
            <Text weight='font-normal' fontSize='text-[13px]'>{record.price} UET</Text>
        ),
    },
    {
          title: "Stock Status",
          dataIndex: "stock",
          key: "stock",
          render: (_: unknown, record: cartList) => (
            <Text
              className={` ${
                record?.stock === "In Stock" ? "text-[#2FA766]" : "text-[#E2464A]"
              }`}
              fontSize="text-[13px]"
            >
              {record?.stock}
            </Text>
          ),
    },
    {
        title: "Quantity",
        dataIndex: "quantity",
        key: "quantity",
        render: (_: unknown, record: cartList) => (
            <QuantityCounter
            value={record.quantity}
            onChange={(value) => handleQuantityChange(record.id, value, record.cartItemId)}
            min={1}
            max={99}
            />
        ),
    },
    {
        title: "Sub-Total",
        dataIndex: "subtotal",
        key: "subtotal",
        render: (_: unknown, record: cartList) => (
            <Text weight='font-normal' fontSize='text-[13px]'>{record.subtotal.toFixed(2)} UET</Text>
        ),
    },
  ];

    if (loading) {
      return (
        <div className="mt-6">
          <Heading type="pageHeading" title="Cart" headClass="text-xl" />
          <Text className="text-center py-10">Loading cart...</Text>
        </div>
      );
    }

    return (
        <div className="mt-6">
            <Heading type="pageHeading" title="Cart" headClass="text-xl" />
            {cartItems.length === 0 ? (
              <Text className="text-center py-10 text-gray-400">
                Your cart is empty
              </Text>
            ) : (
              <MyTable<cartList>
                columns={columns}
                dataSource={paginatedData}
                rowKey="id"
                scroll={{ x: 1300 }}
                tablebody="!bg-transparent"
                rowClass="!border-b border-b-[#353945]"
                pagination={{
                  current: currentPage,
                  pageSize: pageSize,
                  total: cartItems.length,
                  onChange: (page, size) => {
                    setCurrentPage(page);
                    setPageSize(size);
                  },
                  showSizeChanger: true,
                }}
              />
            )}
            {cartItems.length > 0 && (
              <FlexBox items='items-center' justify='justify-between' className="mt-4">
                <ButtonSecondaryOutline onClick={() => router.push('/browseproducts')}>
                    Return to shop
                </ButtonSecondaryOutline>
                <ButtonSecondaryOutline onClick={() => router.push('/checkout')}>
                    Checkout
                </ButtonSecondaryOutline>
              </FlexBox>
            )}

            <OutOfStockModal 
                open={visible}
                onClose={()=>setVisible(false)}
            />
        </div>
    );
};

export { CartTable };
