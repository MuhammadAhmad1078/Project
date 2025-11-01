import React from 'react'
import { Form } from '@/components/ui/form'
import { useForm } from "react-hook-form"
import { ButtonSecondary, ButtonSecondaryOutline, MyInput, MySelect } from '@/components/commoncomponents'
import { countryOp, stateOp } from '@/shared';

interface FormValues {
  fullName: string;
  email: string;
  phoneNo: string;
  gender: string;
  birthDate: Date;
  country: string;
  state: string;
  city: string;
  defaultAddress: string;
}

interface EditProps{
    setEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditAddressBook: React.FC<EditProps> = ({setEdit}) => {
    const form = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log('Form data:', data);
    // Add your form submission logic here
  };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="space-y-6">
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-3 text-white'>
                        <MyInput 
                            name="fullName" 
                            label="Full name" 
                            required 
                            message='Please enter full name'
                        />
                        <MyInput 
                            name="phoneNo" 
                            label="Phone Number" 
                            required 
                            message='Please enter phone number'
                        />
                        <MySelect 
                            name="country"
                            label="Country"
                            options={countryOp}
                            required
                            message="Please select a country"
                            value={form.watch("country")}
                        />
                        <MySelect 
                            name="state"
                            label="Province/State"
                            options={stateOp}
                            required
                            message="Please select a region/state"
                            value={form.watch("state")}
                        />
                        <MySelect 
                            name="city"
                            label="Area/Town/City"
                            options={stateOp}
                            required
                            message="Please select a city"
                            value={form.watch("city")}
                        />
                        <MyInput 
                            name="address" 
                            label="Street Address/House No" 
                            placeholder="" 
                            required
                            message='Please enter street address'
                        /> 
                        <MyInput 
                            name="zipcode" 
                            label="Postal Code / Zip Code" 
                            placeholder="" 
                            required
                            message='Please enter zip code'
                        /> 
                        <MySelect 
                            name="defaultAddress"
                            label="Default Address"
                            options={[
                                {
                                    id: 1,
                                    name: 'Abc'
                                }
                            ]}
                            required
                            message="Please select default address"
                            value={form.watch("defaultAddress")}
                        />
                    </div>         
                    <div className='flex justify-end gap-5'>
                        <ButtonSecondaryOutline className='rounded-xs' onClick={()=>setEdit(false)}>
                            Cancel
                        </ButtonSecondaryOutline>
                        <ButtonSecondary type='submit' className='rounded-xs'>
                            Save
                        </ButtonSecondary>
                    </div>                    
                </div>
            </form>
        </Form>
    )
}

export {EditAddressBook}