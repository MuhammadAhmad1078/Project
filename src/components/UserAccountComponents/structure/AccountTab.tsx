import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { AccountInfoContent } from "./AccountInfoContent";
import { PersonalDetailsContent } from "./PersonalDetailsContent";
import { AddressBookContent } from "./AddressBookContent";
import { WalletContent } from "./WalletContent";
import { OrderHistoryContent } from "./OrderHistoryContent";
import { FlexBox, Text } from "@/components/commoncomponents";

const AccountTab = () => {
    const [activeTab, setActiveTab] = useState("account");
    const [isAccountOpen, setIsAccountOpen] = useState(false);

    const tabs = [
        { value: "account", label: 'Account Info', content: <AccountInfoContent />, collapsible: true },
        { value: "personal", label: "Personal Details", content: <PersonalDetailsContent />, parent: "account" },
        { value: "address", label: "Address Book", content: <AddressBookContent />, parent: "account" },
        { value: "wallet", label: "Wallet", content: <WalletContent />, parent: "account" },
        { value: "orders", label: "Order History", content: <OrderHistoryContent /> },
        { value: "track", label: "Track Order" },
        { value: "seller", label: "Become a Seller" },
        { value: "logout", label: "Logout" },
    ];

    return (
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-10">
            <FlexBox gap="gap-20" direction="lg:flex-row flex-col">
                <div className="lg:w-[20%]">
                    <TabsList className="flex flex-col h-auto w-full bg-transparent gap-1">
                        <Collapsible open={isAccountOpen} onOpenChange={setIsAccountOpen} className="w-full">
                            <CollapsibleTrigger asChild>
                                <div>
                                    <TabsTrigger value="account" className="w-full justify-between px-4 py-3 rounded-[4px] data-[state=active]:bg-[#0C666A]">
                                        <div className="flex items-center justify-between w-full">
                                            <Text color="text-white" className="m-0">Account Info</Text>
                                            <ChevronDown className={`h-5 w-5 text-white transition-transform duration-200 ${isAccountOpen ? "rotate-180" : ""}`} />
                                        </div>
                                    </TabsTrigger>
                                </div>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="border-l-2 border-[#0C666A]">
                                <div className="flex flex-col space-y-1">
                                    {tabs.filter((tab) => tab.parent === "account")
                                        .map((tab) => (
                                            <TabsTrigger key={tab.value} value={tab.value} className="
                                            w-full justify-start px-4 py-3 my-[1px] border-0 data-[state=active]:bg-[#202C2D] rounded-[4px]">
                                                <Text color="text-white" className="m-0">{tab.label}</Text>
                                            </TabsTrigger>
                                        ))}
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                        {tabs.filter((tab) => !tab.parent && !tab.collapsible)
                            .map((tab) => (
                                <TabsTrigger key={tab.value} value={tab.value} className="w-full justify-start px-4 py-3 rounded-[4px] data-[state=active]:bg-[#0C666A]">
                                    <Text color="text-white" className="m-0">{tab.label}</Text>
                                </TabsTrigger>
                            ))}
                    </TabsList>
                </div>
                <div className="lg:w-[80%]">
                    {tabs.map((tab) => (
                        <TabsContent key={tab.value} value={tab.value}>
                            <div className="text-white text-lg font-semibold">{tab.content}</div>
                        </TabsContent>
                    ))}
                </div>
            </FlexBox>
        </Tabs>
    );
};

export { AccountTab };
