import React, { useState } from "react";
import {
  ButtonSecondary,
  ButtonSecondaryOutline,
  FlexBox,
  Heading,
  Modal,
  Text,
} from "@/components/commoncomponents";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  open: boolean;
  onClose: () => void;
}

const ProductShareLinkModal: React.FC<Props> = ({ open, onClose }) => {
  const router = useRouter();
  const [link] = useState("link_of_product");
  const [copied, setCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Modal open={open} onClose={onClose} className="md:max-w-[40%]">
      <div>
        <FlexBox direction="flex-col" items="items-center" gap="gap-5">
          <Image
            src={"/assets/icons/share-icon.svg"}
            width={80}
            height={80}
            alt="share product icon"
          />
          <FlexBox direction="flex-col" items="items-center" gap="gap-5">
            <Heading type="pageHeading" title="Share Product" headClass="!m-0" />
            <FlexBox className="border border-[#777E90] p-3 rounded-sm" gap="gap-2">
              <Text fontSize="text-xs" color="text-white" className="w-64">
                {link}
              </Text>
              <ButtonSecondary
                onClick={handleCopyClick}
                className="!bg-transparent !border-none h-auto !p-0 text-xs !text-[#2BAEB3]"
              >
                {copied ? "Link Copied!" : "Copy"}
              </ButtonSecondary>
            </FlexBox>
          </FlexBox>
          <FlexBox
            items="items-center"
            justify="justify-center"
            gap="gap-3"
            className="mt-4 pt-4 border-t border-[#777E90] w-full"
          >
            <ButtonSecondaryOutline onClick={onClose}>Cancel</ButtonSecondaryOutline>
            <ButtonSecondary onClick={() => router.push("/checkout")}>
              Confirm
            </ButtonSecondary>
          </FlexBox>
        </FlexBox>
      </div>
    </Modal>
  );
};

export { ProductShareLinkModal };
