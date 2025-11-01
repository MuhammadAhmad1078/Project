import React, { useEffect } from 'react'
import { useForm } from "react-hook-form"
import { Form } from '@/components/ui/form'
import { ButtonSecondary, Modal, MyInput, MySelect } from '@/components/commoncomponents'

interface Props {
  open: boolean;
  onClose: () => void;
}

interface FormValues {
  walletType: string;
  walletAddress: string;
}

const AddWalletModal: React.FC<Props> = ({ open, onClose }) => {
  const form = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  useEffect(() => {
    if (!open) {
      form.reset();
    }
  }, [open, form]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Add new wallet"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col gap-3 mt-4">
          <MySelect
            name="walletType"
            label="Wallet Type"
            options={[
              {
                id: 1,
                name: 'Type 01',
              },
            ]}
          />
          <MyInput
            name="walletAddress"
            label="Wallet Address"
            placeholder=""
          />
          <div className="flex justify-end mt-4">
            <ButtonSecondary type="submit">
              Apply
            </ButtonSecondary>
          </div>
        </form>
      </Form>
    </Modal>
  );
};

export { AddWalletModal };
