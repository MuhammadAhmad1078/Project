import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DashboardSellerOverview } from "./DashboardSellerOverview";
import { InsightContent } from "./InsightContent";
import { MyListingSellerContent } from "./MyListingSellerContent";
import { AlertTabContent } from "./AlertTabContent";
import { ReviewsSellerContent } from "./ReviewsSellerContent";
import { WalletSellerContent } from "./WalletSellerContent";
import { OrderSellerContent } from "./OrderSellerContent";
import { DashboardBuyerContent } from "./DashboardBuyerContent";
import { ActivityBuyerContent } from "./ActivityBuyerContent";
import { OrderBuyerContent } from "./OrderBuyerContent";
import { FlexBox, Heading, Text } from "@/components/commoncomponents";
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

const SellerAccountTab = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [activeParentTab, setActiveParentTab] = useState("Selling");
  const [selectedOrder, setSelectedOrder] = useState<orderlist | null>(null);
  const { user } = useAuthStore();

  const parentTabs = [
    {
      key: "Selling",
      name: "Selling",
    },
    {
      key: "Buying",
      name: "Buying",
    },
  ];

  const sellertabData = [
    {
      value: "dashboard",
      label: "Dashboard Overview",
      content: <DashboardSellerOverview />,
    },
    { value: "insight", label: "Insight", content: <InsightContent /> },
    {
      value: "mylisting",
      label: "My Listing",
      content: <MyListingSellerContent />,
    },
    {
      value: "orders",
      label: "Orders",
      content: (
        <OrderSellerContent
          selectedOrder={selectedOrder}
          setSelectedOrder={setSelectedOrder}
        />
      ),
    },
    {
      value: "wallet",
      label: "Wallet Address",
      content: <WalletSellerContent />,
    },
    { value: "reviews", label: "Reviews", content: <ReviewsSellerContent /> },
    { value: "alerts", label: "Alerts", content: <AlertTabContent /> },
  ];

  const buyertabData = [
    {
      value: "b-dashboard",
      label: "Dashboard Overview",
      content: <DashboardBuyerContent />,
    },
    {
      value: "b-orders",
      label: "Orders",
      content: (
        <OrderBuyerContent
          selectedOrder={selectedOrder}
          setSelectedOrder={setSelectedOrder}
        />
      ),
    },
    {
      value: "b-wishlist",
      label: "Activity",
      content: <ActivityBuyerContent />,
    },
    { value: "b-alerts", label: "Alerts", content: <AlertTabContent /> },
  ];

  useEffect(() => {
    if (activeParentTab === "Selling") {
      setActiveTab(sellertabData[0].value);
      setSelectedOrder(null);
    } else {
      setActiveTab(buyertabData[0].value);
      setSelectedOrder(null);
    }
  }, [activeParentTab]);
  console.log("---->", user);

  return (
    <div className="mt-7">
      <FlexBox direction="lg:flex-row flex-col" gap="gap-8">
        <div className="lg:w-[20%]">
          <FlexBox
            direction="flex-col"
            gap="gap-6"
            className="h-auto w-full bg-[#1C1E24] p-4 rounded-lg"
          >
            <FlexBox direction="flex-col" gap="gap-3" items="items-center">
              <Avatar className="w-20 h-20">
                <AvatarImage src="/assets/images/pr.png" />
                <AvatarFallback>Profile</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <Heading weight="font-medium" fontSize="text-[15px]">
                  {user?.userName || "Username"}
                </Heading>
                <Text
                  fontSize="text-[13px]"
                  color="text-[#B1B5C3]"
                  className="m-0"
                >
                  Joined Business Hub in{" "}
                  {user?.createdAt
                    ? new Date(user.createdAt).getFullYear()
                    : "2025"}
                </Text>
                <FlexBox
                  justify="justify-center"
                  items="items-center"
                  gap="gap-3"
                  className="mt-2"
                >
                  <FlexBox items="items-center" gap="gap-1">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <img
                          key={i}
                          className="w-4"
                          src={user?.image || "/assets/images/star.svg"}
                          alt="star"
                        />
                      ))}
                  </FlexBox>
                  <Text fontSize="text-[10px]" color="text-[#B1B53]">
                    4.0 Rating
                  </Text>
                </FlexBox>
              </div>
            </FlexBox>
            {/* parent tab seller/buyer */}
            <Tabs
              value={activeParentTab}
              onValueChange={setActiveParentTab}
              className="w-full justify-center items-center"
            >
              <TabsList className="bg-[#3D3F46] h-auto justify-center flex items-center rounded-sm p-[6px] w-full">
                {parentTabs.map((tab) => (
                  <TabsTrigger
                    key={tab.key}
                    value={tab.key}
                    className="text-white data-[state=active]:bg-[#0C666A] h-auto rounded-sm py-2 text-sm"
                  >
                    {tab.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
            {/* child tab heading according to parent  */}
            {activeParentTab === "Selling" ? (
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="flex flex-col bg-transparent gap-1 p-0 h-auto">
                  {sellertabData.map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className="w-full justify-start px-4 py-2 rounded-[4px] data-[state=active]:bg-transparent text-white data-[state=active]:text-[#2BAEB3] transition-colors"
                    >
                      <span className="font-medium text-sm">{tab.label}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            ) : (
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="flex flex-col bg-transparent gap-1 p-0 h-auto">
                  {buyertabData.map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className="w-full justify-start px-4 py-2 rounded-[4px] data-[state=active]:bg-transparent text-white data-[state=active]:text-[#2BAEB3] transition-colors"
                    >
                      <span className="font-medium text-sm">{tab.label}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            )}
          </FlexBox>
        </div>
        {/* content area */}
        <div className="lg:w-[80%]">
          {activeParentTab === "Selling" ? (
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full h-full"
            >
              {sellertabData.map((tab) => (
                <TabsContent
                  key={tab.value}
                  value={tab.value}
                  className="bg-[#1C1E24] p-6 rounded-lg h-full"
                >
                  <div className="text-white text-lg font-semibold">
                    {tab.content}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          ) : (
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full h-full"
            >
              {buyertabData.map((tab) => (
                <TabsContent
                  key={tab.value}
                  value={tab.value}
                  className="bg-[#1C1E24] p-6 rounded-lg h-full"
                >
                  <div className="text-white text-lg font-semibold">
                    {tab.content}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          )}
        </div>
      </FlexBox>
    </div>
  );
};

export { SellerAccountTab };
