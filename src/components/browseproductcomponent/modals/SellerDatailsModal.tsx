import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SellerListingpro } from "../structure";
import {
  CommonCard,
  FlexBox,
  Heading,
  Modal,
  Text,
} from "@/components/commoncomponents";
import { selleroverviewData } from "@/components/data";
import { Seller } from "@/types";

type proItems = {
  id: number;
  title: string;
};

interface Props {
  list?: proItems[];
  open: boolean;
  onClose: () => void;
  seller?: Seller | null;
}

const SellerDatailsModal: React.FC<Props> = ({ open, onClose, seller }) => {
  return (
    <Modal open={open} onClose={onClose} className="md:max-w-[70%]">
      <div className="overflow-y-auto h-[550px] overflow-x-hidden no-scrollbar">
        <div className="flex flex-col gap-3 items-center mb-10">
          <Avatar className="w-20 h-20">
            {seller?.image ? (
              <AvatarImage src={seller.image} className="w-20" />
            ) : (
              <AvatarImage
                src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                className="w-20"
              />
            )}
            <AvatarFallback>{seller?.userName?.[0] || "S"}</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <Heading weight="font-medium" fontSize="text-[15px]">
              {seller?.userName || "Anonymous Seller"}
            </Heading>
            <Text fontSize="text-[13px]" color="text-[#B1B5C3]" className="m-0">
              {seller?.createdAt
                ? `Joined Business Hub in ${new Date(
                    seller.createdAt
                  ).getFullYear()}`
                : "Seller on Business Hub"}
            </Text>
            {seller?.country && (
              <Text
                fontSize="text-[13px]"
                color="text-[#B1B5C3]"
                className="mt-1"
              >
                Country: {seller.country}
              </Text>
            )}
            <FlexBox
              className="mt-2"
              items="items-center"
              justify="justify-center"
              gap="gap-3"
            >
              <div className="flex items-center gap-1">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <img
                      key={i}
                      className={"w-4"}
                      src="/assets/images/star-o.png"
                      alt="star"
                    />
                  ))}
              </div>
              <Text fontSize="text-[10px]" color="text-[#B1B5C3]">
                Seller Rating
              </Text>
            </FlexBox>
          </div>
        </div>
        <CommonCard
          data={[
            {
              id: 1,
              amount: seller?.balance ? `${seller.balance} UET` : "0 UET",
              title: "Balance",
            },
            {
              id: 2,
              amount: seller?.creatorEarning
                ? `${seller.creatorEarning} UET`
                : "0 UET",
              title: "Creator Earnings",
            },
            ...(seller?.description
              ? [{ id: 3, amount: "View Details", title: "Description" }]
              : []),
            ...(seller?.email
              ? [{ id: 4, amount: seller.email, title: "Contact" }]
              : []),
          ]}
          title="Seller Overview"
        />
        <SellerListingpro />
      </div>
    </Modal>
  );
};

export { SellerDatailsModal };
