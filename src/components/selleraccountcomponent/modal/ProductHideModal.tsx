import React from "react";
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

const ProductHideModal: React.FC<Props> = ({ open, onClose }) => {

    const router = useRouter()

    return (
        <Modal open={open} onClose={onClose} className="md:max-w-[40%]">
            <div className="">
                <FlexBox direction="flex-col" items="items-center" gap="gap-5">
                    <Image src={'/assets/icons/hide-icon.svg'} width={80} height={80} alt="out of stock icon" />
                    <FlexBox direction="flex-col" items="items-center" gap="gap-2">
                        <Heading type="pageHeading" title="Hide Product" headClass="!m-0" />
                        <Text color="text-white">
                            Are you sure you want to hide this product?
                        </Text>
                    </FlexBox>
                    <FlexBox items='items-center' justify='justify-center' gap="gap-3" className="mt-4 pt-4 border-t border-[#777E90] w-full">
                        <ButtonSecondaryOutline onClick={onClose}>
                            Cancel
                        </ButtonSecondaryOutline>
                        <ButtonSecondary onClick={() => router.push('/checkout')}>
                            Confirm
                        </ButtonSecondary>
                    </FlexBox>
                </FlexBox>
            </div>
        </Modal>
    );
};

export { ProductHideModal };
