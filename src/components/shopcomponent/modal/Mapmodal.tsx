import React, { useEffect, useState } from 'react'
import { Form } from '@/components/ui/form'
import { useForm } from "react-hook-form"
import { ButtonSecondary, Modal, MyInput } from '@/components/commoncomponents';

interface Props {
  open: boolean;
  onClose: () => void;
}

interface FormValues {
  location: string;
}

const Mapmodal: React.FC<Props> = ({ open, onClose }) => {
  const form = useForm<FormValues>({
    defaultValues: {
      location: ''
    }
  });
  const [mapUrl, setMapUrl] = useState<string>('https://maps.google.com/maps?q=England,UK&output=embed')

  const onSubmit = (data: FormValues) => {
    const encodedLocation = encodeURIComponent(data.location)
    const newMapUrl = `https://maps.google.com/maps?q=${encodedLocation}&output=embed`
    setMapUrl(newMapUrl)
  }

  useEffect(() => {
    if (!open) {
      form.reset();
    }
  }, [open, form]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      title='Location Setting'
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='flex w-full flex-col gap-3 mt-4'>
          <iframe
            src={mapUrl}
            width="100%"
            height="200"
            className='border-0 rounded-lg mb-3'
            loading="lazy"
          ></iframe>
          <MyInput
            name="location"
            label="Your Current Location"
            placeholder="Evergreen Terrace Toronto, ON M4B 1B4 Canada"
          />
          <div className='flex justify-end mt-2'>
            <ButtonSecondary type='submit'>
              Apply
            </ButtonSecondary>
          </div>
        </form>
      </Form>
    </Modal>
  )
}

export { Mapmodal }
