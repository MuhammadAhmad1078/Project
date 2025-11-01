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

const ProductDeleteModal: React.FC<Props> = ({ open, onClose }) => {

    const router = useRouter()

    return (
        <Modal open={open} onClose={onClose} className="md:max-w-[40%]">
            <div className="">
                <FlexBox direction="flex-col" items="items-center" gap="gap-5">
                    <Image src={'/assets/icons/delete-icon.svg'} width={80} height={80} alt="out of stock icon" />
                    <FlexBox direction="flex-col" items="items-center" gap="gap-2">
                        <Heading type="pageHeading" title="Product Delete" headClass="!m-0" />
                        <Text color="text-white">
                            This action can’t be undone. Are you sure you want to delete this product?
                        </Text>
                    </FlexBox>
                    <FlexBox items='items-center' justify='justify-center' gap="gap-3" className="mt-4 pt-4 border-t border-[#777E90] w-full">
                        <ButtonSecondaryOutline className="text-white !border-[#777E90]" onClick={onClose}>
                            Cancel
                        </ButtonSecondaryOutline>
                        <ButtonSecondary onClick={() => router.push('/checkout')} className="!bg-[#E2464A] !border-[#E2464A]">
                            Confirm
                        </ButtonSecondary>
                    </FlexBox>
                </FlexBox>
            </div>
        </Modal>
    );
};

export { ProductDeleteModal };
