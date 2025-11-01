import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FlexBox, Heading, MyTable, Text } from "@/components/commoncomponents";
import { useLazyQuery, useMutation } from "@apollo/client";
import { GET_WISHLIST } from "@/graphql/query/wishlistQuery";
import { REMOVE_FROM_WISHLIST } from "@/graphql/mutation/wishlistMutations";
import { ADD_TO_CART } from "@/graphql/mutation/cartMutations";

type WishlistItem = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  stock: string;
  image: string;
  productId?: string;
  discount?: number;
};

const WishlistTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const [loadWishlist, { data: wishlistData, loading }] = useLazyQuery(GET_WISHLIST, {
    fetchPolicy: "cache-and-network",
  });
  const [removeFromWishlist] = useMutation(REMOVE_FROM_WISHLIST, {
    refetchQueries: [{ query: GET_WISHLIST }],
  });
  const [addToCart] = useMutation(ADD_TO_CART, {
    refetchQueries: [{ query: GET_WISHLIST }],
  });

  useEffect(() => {
    loadWishlist();
  }, [loadWishlist]);

  // Transform API data to WishlistItem format
  const transformWishlistData = (): WishlistItem[] => {
    if (wishlistData?.getWishlist) {
      return wishlistData.getWishlist.map((item: any) => {
        const product = item.product || {};
        const imageUrl =
          product.images?.[0]?.url ||
          `/assets/images/${product.image}` ||
          "/assets/images/ip-1.png";
        const price = product.price || 0;
        const discount = product.discount || 0;
        const oldPrice = discount > 0 ? price / (1 - discount / 100) : undefined;
        const stock = product.quantity > 0 ? "IN STOCK" : "OUT OF STOCK";

        return {
          id: item.id,
          name: product.name || product.title || "",
          price: price,
          oldPrice: oldPrice,
          stock: stock,
          image: imageUrl,
          productId: product.id,
          discount: discount,
        };
      });
    }
    return [];
  };

  const data = transformWishlistData();
  const paginatedData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleRemoveItem = async (wishlistItemId: string) => {
    try {
      await removeFromWishlist({ variables: { wishlistItemId } });
    } catch (error) {
      console.error("Error removing item from wishlist:", error);
    }
  };

  const handleAddToCart = async (productId: string) => {
    try {
      await addToCart({ variables: { productId, quantity: 1 } });
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  const columns = [
    {
      title: "Products",
      dataIndex: "name",
      key: "name",
      width: 600,
      render: (_: unknown, record: WishlistItem) => (
        <FlexBox gap="gap-3" items="items-center" className="pt-4">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="hover:bg-transparent cursor-pointer"
                    onClick={() => handleRemoveItem(record.id)}
                  >
            <img src="/assets/icons/remove.png" className="h-5 w-5" />
          </Button>
          <FlexBox gap="gap-4" items="items-center">
            <div className="p-3 border border-[#0C666A] shrink-0">
              <img src={record.image} className="w-12 h-16 object-contain" />
            </div>
            <Text color="text-white" fontSize="text-[13px]">{record.name}</Text>
          </FlexBox>
        </FlexBox>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (_: unknown, record: WishlistItem) => (
        <div>
          <Text color="text-white" fontSize="text-[13px]">UET {record.price}</Text>
          {record.oldPrice && (
            <Text fontSize="text-xs" color="text-[#777E90]" className="line-through">
              UET {record.oldPrice.toFixed(2)}
            </Text>
          )}
        </div>
      ),
    },
    {
      title: "Stock Status",
      dataIndex: "stock",
      key: "stock",
      render: (_: unknown, record: WishlistItem) => (
        <Text
          className={` ${
            record.stock === "IN STOCK" ? "text-[#2FA766]" : "text-[#E2464A]"
          }`}
          fontSize="text-[13px]"
        >
          {record.stock}
        </Text>
      ),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      align: "right" as const,
      render: (_: unknown, record: WishlistItem) => (
        <Button
          variant="outline"
          className={`text-[13px] text-white ${
            record.stock === "OUT OF STOCK"
              ? "bg-[#1D7174] disabled:text-[#FCFCFD]"
              : "bg-[#2BAEB3] hover:bg-[#2BAEB3]"
          }`}
          disabled={record.stock === "OUT OF STOCK" || !record.productId}
          onClick={() => record.productId && handleAddToCart(record.productId)}
        >
          Add to Cart
        </Button>
      ),
    },
  ];

  if (loading) {
    return (
      <div className="mt-6">
        <Heading type="pageHeading" title="Wishlist" headClass="!text-xl !font-medium" />
        <Text className="text-center py-10">Loading wishlist...</Text>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <Heading type="pageHeading" title="Wishlist" headClass="!text-xl !font-medium" />
      {data.length === 0 ? (
        <Text className="text-center py-10 text-gray-400">
          Your wishlist is empty
        </Text>
      ) : (
        <MyTable<WishlistItem>
          columns={columns}
          dataSource={paginatedData}
          rowKey="id"
          scroll={{ x: 1000 }}
          pagination={{
            current: currentPage,
            pageSize,
            total: data.length,
            onChange: (page, size) => {
              setCurrentPage(page);
              setPageSize(size);
            },
            showSizeChanger: true,
          }}
        />
      )}
    </div>
  );
};

export { WishlistTable };
