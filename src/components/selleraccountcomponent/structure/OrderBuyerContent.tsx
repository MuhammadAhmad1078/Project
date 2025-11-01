"use client";

import React, { useEffect } from "react";
import { CommonCard } from "@/components/commoncomponents";
import { PendingBuyerTable } from "./PendingBuyerTable";
import { OderBuyerDetail } from "./OderBuyerDetail";
import { GET_PROFILE_ORDERS_DETAILED } from "@/graphql/query/sellerDashboard";
import { useLazyQuery } from "@apollo/client";
import { useAuthStore } from "@/store";
import { CardDataFunc } from "@/lib/utils";
import { OverviewData, OverviewTitles } from "@/types";

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

type Props = {
  selectedOrder: orderlist | null;
  setSelectedOrder: (listing: orderlist | null) => void;
};

const OrderBuyerContent: React.FC<Props> = ({
  selectedOrder,
  setSelectedOrder,
}) => {
  const { user } = useAuthStore();
  const [loadOrder, { data: orderData, loading }] = useLazyQuery(
    GET_PROFILE_ORDERS_DETAILED,
    {
      fetchPolicy: "cache-and-network",
    }
  );

  useEffect(() => {
    if (user?.id) {
      loadOrder({
        variables: {
          nftId: user.id, // Using user ID from auth store
          isSeller: false, // This is for buyer view
          offset: 0,
          limit: 10,
        },
      });
    }
  }, [loadOrder, user]);

  if (selectedOrder) {
    return (
      <OderBuyerDetail
        selectedOrder={selectedOrder}
        setSelectedOrder={setSelectedOrder}
      />
    );
  }

  // Create overview data from API response
  const orderOverviewData: OverviewData = {
    values: [
      orderData?.getProfileOrders?.totalCount || 0,
      orderData?.getProfileOrders?.inProgressOrdersCount || 0,
      orderData?.getProfileOrders?.completedOrdersCount || 0,
    ],
  };

  const orderTitles: OverviewTitles = {
    titles: ["Total Orders", "In Progress Orders", "Completed Orders"],
  };

  const orderOverview = CardDataFunc(orderOverviewData, orderTitles);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center p-5">
          <p className="text-white">Loading order data...</p>
        </div>
      ) : (
        <>
          <CommonCard
            data={orderOverview}
            gridClass="lg:!grid-cols-3"
            title="Orders"
            className="mb-5"
          />
          <PendingBuyerTable setSelectedOrder={setSelectedOrder} />
        </>
      )}
    </div>
  );
};

export { OrderBuyerContent };
