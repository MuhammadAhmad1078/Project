import React from "react";
import {
  ButtonSecondary,
  ButtonSecondaryOutline,
  FlexBox,
  Heading,
  Modal,
  MyInput,
} from "@/components/commoncomponents";
import Image from "next/image";

interface Props {
  open: boolean;
  onClose: () => void;
}

const MarkShipModal: React.FC<Props> = ({ open, onClose }) => {

    return (
        <Modal open={open} onClose={onClose} className="md:max-w-[40%]">
            <div>
                <FlexBox direction="flex-col" items="items-center" gap="gap-5">
                    <Image
                        src={"/assets/icons/ship-icon.svg"}
                        width={80}
                        height={80}
                        alt="share product icon"
                    />
                    <FlexBox className="w-full" direction="flex-col" items="items-center" gap="gap-5">
                        <Heading type="pageHeading" title="Mark As Shipped" headClass="!m-0" />
                        <MyInput 
                            withoutForm
                            placeholder="Add Tracking Number"
                            className="max-w-[400px]"
                        />
                    </FlexBox>
                    <FlexBox
                        items="items-center"
                        justify="justify-center"
                        gap="gap-3"
                        className="mt-4 pt-4 border-t border-[#777E90] w-full"
                    >
                        <ButtonSecondaryOutline onClick={onClose}>Cancel</ButtonSecondaryOutline>
                        <ButtonSecondary onClick={() => {}}>
                            Confirm
                        </ButtonSecondary>
                    </FlexBox>
                </FlexBox>
            </div>
        </Modal>
    );
};

export { MarkShipModal };
