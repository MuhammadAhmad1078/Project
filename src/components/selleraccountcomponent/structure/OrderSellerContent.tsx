"use client";

import { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import {
  CommonCard,
  FlexBox,
  Heading,
  MyDropdown,
} from "@/components/commoncomponents";
import { AllOrderTable } from "./AllOrderTable";
import { AllOrderSellerDetail } from "./AllOrderSellerDetail";
import { CardDataFunc } from "@/lib/utils";
import { OverviewData, OverviewTitles } from "@/types";
import { GET_PROFILE_ORDERS_DETAILED } from "@/graphql/query/sellerDashboard";
import { useAuthStore } from "@/store";

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

const OrderSellerContent: React.FC<Props> = ({
  selectedOrder,
  setSelectedOrder,
}) => {
  const { user } = useAuthStore();
  const [loadOrder, { data: orderApiData, loading }] = useLazyQuery(
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
          isSeller: true, // This is for seller view
          offset: 0,
          limit: 10,
        },
      });
    }
  }, [loadOrder, user]);

  if (selectedOrder) {
    return (
      <AllOrderSellerDetail
        selectedOrder={selectedOrder}
        setSelectedOrder={setSelectedOrder}
      />
    );
  }

  const orderData: OverviewData = {
    values: [
      orderApiData?.getProfileOrders?.totalCount || 0,
      orderApiData?.getProfileOrders?.inProgressOrdersCount || 0,
      orderApiData?.getProfileOrders?.completedOrdersCount || 0,
    ],
  };

  const orderTitles: OverviewTitles = {
    titles: ["Total Orders", "InProgress Orders", "Completed Orders"],
  };

  const orderOverview = CardDataFunc(orderData, orderTitles);

  return (
    <div>
      <FlexBox
        justify="justify-between"
        items="items-center"
        gap="gap-3"
        className="mb-6"
      >
        <Heading type="pageHeading" title="Overview" headClass="!m-0" />
        <MyDropdown
          defaultLabel="Daily"
          items={[
            { label: "Daily", value: "daily" },
            { label: "Weekly", value: "weekly" },
            { label: "Monthly", value: "monthly" },
          ]}
          onSelect={(item) => console.log("Selected:", item)}
          className="!bg-[#23262F] font-normal !text-[13px]"
        />
      </FlexBox>

      {loading ? (
        <div className="flex justify-center items-center p-5 mb-6">
          <p className="text-white">Loading order data...</p>
        </div>
      ) : (
        <CommonCard data={orderOverview} gridClass="lg:!grid-cols-3" />
      )}

      <AllOrderTable setSelectedOrder={setSelectedOrder} />
    </div>
  );
};

export { OrderSellerContent };
