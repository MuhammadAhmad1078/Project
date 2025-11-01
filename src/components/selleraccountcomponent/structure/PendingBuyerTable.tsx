import React, { useState, useEffect } from "react";
import {
  FlexBox,
  Heading,
  MyCard,
  MyDropdown,
  MyTable,
  Text,
} from "@/components/commoncomponents";
import { useLazyQuery } from "@apollo/client";
import { GET_PROFILE_ORDERS_DETAILED } from "@/graphql/query/sellerDashboard";
import { useAuthStore } from "@/store";
import { format } from "date-fns";
import { allorderData } from "@/components/data";

type orderlist = {
  id: string;
  orderId: string;
  trackId: string;
  proImage: string;
  proName: string;
  status: string;
  price: string;
  quantity: string;
  totalcost: string;
  chaincoin: string;
  date: string;
};

type Order = {
  id: string;
  orderNumber?: string;
  orderProducts?: Array<{
    product?: {
      name?: string;
      price?: number;
      images?: Array<{ url?: string }>;
    };
    quantity?: string;
    createdAt?: string;
  }>;
  status?: string;
  totalPrice?: number;
  service?: { tokenId?: string };
};

type Props = {
  setSelectedOrder: (listing: orderlist | null) => void;
};

const PendingBuyerTable: React.FC<Props> = ({ setSelectedOrder }) => {
  const { user } = useAuthStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);

  const [loadData, { data, loading }] = useLazyQuery(
    GET_PROFILE_ORDERS_DETAILED,
    {
      fetchPolicy: "cache-and-network",
    }
  );

  useEffect(() => {
    if (user?.id) {
      loadData({
        variables: {
          nftId: user.id, // Using user ID from auth store
          isSeller: false, // This is for buyer view
          offset: (currentPage - 1) * pageSize,
          limit: pageSize,
        },
      });
    }
  }, [loadData, currentPage, pageSize, user]);

  // Transform API data into the format expected by the table
  const transformedData =
    data?.getProfileOrders?.orders?.map((order: Order) => {
      // Get the first product from orderProducts if available
      const firstProduct = order.orderProducts?.[0]?.product;
      const productImage =
        firstProduct?.images?.[0]?.url ||
        "https://via.placeholder.com/300x200?text=No+Image";
      const orderDate = order.orderProducts?.[0]?.createdAt
        ? format(new Date(order.orderProducts[0].createdAt), "MMM dd, yyyy")
        : "N/A";

      return {
        id: order.id,
        orderId: order.orderNumber || "N/A",
        trackId: order.id.substring(0, 8) || "N/A",
        proImage: productImage,
        proName: firstProduct?.name || "N/A",
        status: order.status || "N/A",
        price: firstProduct?.price ? `$${firstProduct.price}` : "N/A",
        quantity: order.orderProducts?.[0]?.quantity || "1",
        totalcost: order.totalPrice ? `$${order.totalPrice}` : "N/A",
        chaincoin: order.service?.tokenId || "N/A",
        date: orderDate,
      };
    }) || [];

  // Use transformed data from the API
  const paginatedData = transformedData;
  // const paginatedData = allorderData;

  const columns = [
    {
      title: "Order ID",
      dataIndex: "orderId",
      key: "orderId",
      render: (_: unknown, record: orderlist) => (
        <Text fontSize="text-[13px]">{record?.orderId}</Text>
      ),
    },
    {
      title: "Tracking ID",
      dataIndex: "trackId",
      key: "trackId",
      render: (_: unknown, record: orderlist) => (
        <Text fontSize="text-[13px]">{record?.trackId}</Text>
      ),
    },
    {
      title: "Product Image",
      dataIndex: "proImage",
      key: "proImage",
      render: (_: unknown, record: orderlist) => (
        <div className=" flex justify-center">
          <img src={record.proImage} className="w-10 h-14 object-contain" />
        </div>
      ),
    },
    {
      title: "Product Name",
      dataIndex: "proName",
      key: "proName",
      width: 300,
      render: (_: unknown, record: orderlist) => (
        <Text
          fontSize="text-[13px]"
          className="overflow-hidden [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]"
        >
          {record?.proName}
        </Text>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (value: orderlist["status"]) => (
        <span
          className={`text-xs font-normal px-3 py-2 rounded-sm text-white ${
            value === "Order Placed"
              ? "bg-[#25A7B0]"
              : value === "Processing"
              ? "bg-[#795AEE]"
              : value === "Shipped"
              ? "bg-[#466FF7]"
              : value === "Delivered"
              ? "bg-[#EE4E68]"
              : value === "Order Closed"
              ? "bg-[#47BB75]"
              : value === "Cancelled"
              ? "bg-[#E2464A]"
              : value === "Returned"
              ? "bg-[#882A2C]"
              : ""
          }`}
        >
          {value}
        </span>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (_: unknown, record: orderlist) => (
        <Text fontSize="text-[13px]">{record?.price}</Text>
      ),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: (_: unknown, record: orderlist) => (
        <Text fontSize="text-[13px]">{record?.quantity}</Text>
      ),
    },
    {
      title: "Total Cost",
      dataIndex: "totalcost",
      key: "totalcost",
      render: (_: unknown, record: orderlist) => (
        <Text fontSize="text-[13px]">{record?.totalcost}</Text>
      ),
    },
    {
      title: "Chain Coin",
      dataIndex: "chaincoin",
      key: "chaincoin",
      render: (_: unknown, record: orderlist) => (
        <Text fontSize="text-[13px]">{record?.chaincoin}</Text>
      ),
    },
    {
      title: "Order Date",
      dataIndex: "date",
      key: "date",
      render: (_: unknown, record: orderlist) => (
        <Text fontSize="text-[13px]">{record?.date}</Text>
      ),
    },
  ];

  const handleRowClick = (record: orderlist) => {
    setSelectedOrder(record);
  };

  return (
    <MyCard className="text-white justify-between">
      <FlexBox
        justify="justify-between"
        items="items-center"
        className="w-full mb-6"
      >
        <Heading type="pageHeading" title="All Orders" headClass="!m-0" />
        <MyDropdown
          defaultLabel="Status"
          items={[
            { label: "Status", value: "all" },
            { label: "Processing", value: "processing" },
            { label: "Shipped", value: "shipped" },
            { label: "Delivered", value: "delivered" },
            { label: "Order Closed", value: "orderclosed" },
            { label: "Cancelled", value: "cancelled" },
            { label: "Returned", value: "returned" },
          ]}
          onSelect={() => {}}
          className="!bg-[#23262F] font-normal !text-[13px]"
        />
      </FlexBox>

      {loading ? (
        <div className="flex justify-center items-center p-10">
          <p className="text-white">Loading orders...</p>
        </div>
      ) : (
        <MyTable<orderlist>
          columns={columns}
          dataSource={paginatedData}
          rowKey="id"
          scroll={{ x: 1300 }}
          onRow={(record) => ({
            onClick: () => handleRowClick(record),
            style: { cursor: "pointer" },
          })}
          tablebody="!bg-transparent"
          rowClass="!border-b border-b-[#353945]"
          pagination={{
            current: currentPage,
            pageSize: pageSize,
            total: data?.getProfileOrders?.totalCount || 0,
            onChange: (page, size) => {
              setCurrentPage(page);
              setPageSize(size);
            },
            showSizeChanger: true,
            showTotal: (total) => (
              <span className="text-white">{`Total ${total} items`}</span>
            ),
          }}
        />
      )}
    </MyCard>
  );
};

export { PendingBuyerTable };
